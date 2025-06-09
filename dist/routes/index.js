"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const utils_1 = require("../helpers/utils");
const generic_1 = require("../types/generic");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const file_1 = __importDefault(require("./file"));
const apiRouter = (0, express_1.Router)();
// define your routes
apiRouter.use('/auth', auth_1.default);
apiRouter.use('/file', file_1.default);
apiRouter.use('/hello', authMiddleware_1.default, (req, res) => {
    const data = (0, utils_1.ResultFunction)(true, 'Welcome to 3d_bandit api v1.0', 200, generic_1.ReturnStatus.OK, null);
    return res.status(data.code).json(data);
});
exports.default = apiRouter;
