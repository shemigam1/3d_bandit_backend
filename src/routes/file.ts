import { Router } from "express";
import authMiddleWare from "../middlewares/authMiddleware";
import { getSignController } from "../controllers/file";

const fileRouter = Router();

fileRouter.get("/get-sign", authMiddleWare, getSignController)

export default fileRouter;