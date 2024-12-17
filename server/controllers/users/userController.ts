import { Request, Response } from "express"
import { Client } from "pg"
import { StatusCodes } from "http-status-codes"
import bcrpyt from "bcryptjs"
import { createToken } from "../../utils/createToken"
import { comparePasswords } from "../../utils/comparePasswords"
import { registerSchema, loginSchema } from "./schema"
export const register = async (req: Request, res: Response) => {
  const { error, value } = registerSchema.validate(req.body)
  if (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: error.details[0].message })
    return
  }
  const { username, email, password } = value
  const saltRounds = 10
  const db: Client = req.app.locals.db
  const hashedPassword = await bcrpyt.hash(password, saltRounds)
  if (!username || !email || !password) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: "Username, email, or password is missing",
    })
    return
  }

  try {
    const result = await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING username,email",
      [username, email, hashedPassword]
    )
    const token = createToken(result.rows[0].id, result.rows[0].username)
    res.status(StatusCodes.CREATED).json({
      user: {
        id: result.rows[0].id,
        username: result.rows[0].username,
        email: result.rows[0].email,
      },
      token,
    })
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message,
    })
  }
}
export const login = async (req: Request, res: Response): Promise<void> => {
  const db: Client = req.app.locals.db
  const { email, password } = req.body

  if (!email || !password) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: "Email or password is missing",
    })
    return
  }

  try {
    const user = await db.query("SELECT * FROM users WHERE email = $1", [email])

    if (user.rows.length === 0) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `User with email ${email} not found` })
      return
    }

    // Check if the password matches
    const isValidPassword = await comparePasswords(
      password,
      user.rows[0].password
    )

    if (!isValidPassword) {
      res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid credentials" })
      return
    }
    // Create token
    const token = createToken(user.rows[0].id, user.rows[0].username)

    // Respond with user data and token
    res.status(StatusCodes.OK).json({
      user: {
        id: user.rows[0].id,
        email: user.rows[0].email,
        username: user.rows[0].username,
      },
      token,
    })
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message,
    })
  }
}
