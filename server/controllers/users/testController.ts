import { Request, Response } from "express"
import { Client } from "pg"
export const getUsers = async (req: Request, res: Response) => {
  const db: Client = req.app.locals.db
  try {
    const result = await db.query("select * from users")
    res.status(200).json(result.rows)
  } catch (error: any) {
    console.error("Error querying database", error.stack)
    res.status(500).json({ error: "Internal server error" })
  }
}
