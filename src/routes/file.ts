import { Router } from "express";
import authMiddleWare from "../middlewares/authMiddleware";
import { createFileController, getSignController } from "../controllers/file";

const fileRouter = Router();
console.log("File Router initialized");

fileRouter.get("/get-sign", authMiddleWare, getSignController)
fileRouter.post("/create-file", authMiddleWare, createFileController)

export default fileRouter;