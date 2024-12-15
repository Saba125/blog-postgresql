import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"
import jwt from "jsonwebtoken"

interface CustomRequest extends Request {
  user?: { userId: string }
}

export const authMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(StatusCodes.UNAUTHORIZED).json({ error: "Unauthorized" })
    return
  }

  const token = authHeader.split(" ")[1]
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
    req.user = { userId: (decoded as jwt.JwtPayload).userId }
    next() // Call next() to move to the next middleware/route handler
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({ error: "Unauthorized" })
  }
}
