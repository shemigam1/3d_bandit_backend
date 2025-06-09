"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const file_1 = require("../controllers/file");
const fileRouter = (0, express_1.Router)();
console.log("File Router initialized");
fileRouter.get("/get-sign", authMiddleware_1.default, file_1.getSignController);
fileRouter.post("/create-file", authMiddleware_1.default, file_1.createFileController);
exports.default = fileRouter;
