import { Router } from "express";
import UserController from "../controllers/UserController";
import UserMiddleware from "../middlewares/UserMiddleware"

const routes = Router()

routes.get("/api/users", UserController.index)
routes.post("/api/users", UserController.create);
routes.delete("/api/users",UserMiddleware.verifyToken, UserController.deleteUser)

routes.post("/api/login", UserController.login, UserMiddleware.verifyToken , UserController.index);

export default routes