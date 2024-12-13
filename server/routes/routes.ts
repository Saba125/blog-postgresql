import express from "express"
import userControllers from "../controllers/users"
const Router = express.Router()
Router.get("/users", userControllers.getUsers)
export default Router
