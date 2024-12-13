import express, { Request, Response } from "express"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB"
import Router from "./routes/routes"
dotenv.config()
const app = express()

// MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
)
app.use(express.json())
app.use(morgan("dev"))

// Example route
app.use("/api", Router)
// Database

const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
  try {
    const db = await connectDB()
    app.locals.db = db
    console.log(`Server is running on port ${PORT}`)
  } catch (error) {
    console.error("Failed to connect to the database", error)
  }
})
