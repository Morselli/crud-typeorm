import { Router } from "express";
import { UserController } from "../api/modules/user.controller";

const router = Router()

const userController = new UserController()

export { router }

