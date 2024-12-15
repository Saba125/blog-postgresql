import express, { Request, Response } from "express"
import userControllers from "../controllers/users/index"
import { authMiddleware } from "../middlewares/authMiddleware"
const Router = express.Router()
Router.post("/register", userControllers.register)
Router.post("/login", userControllers.login)

export default Router
