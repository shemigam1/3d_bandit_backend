"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFileController = exports.getSignController = void 0;
const factories_1 = require("../services/factories");
const getSignController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const input: ISignup = {
    //     // name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password,
    // };
    const response = yield (0, factories_1.fileFactory)().upload3dFile();
    // return res.status(response.code).json(response);
    return res.status(response.code).json(response);
});
exports.getSignController = getSignController;
const createFileController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const input = {
        name: req.body.name,
        fileUrl: req.body.fileUrl,
        owner: req.body.owner,
        createdAt: req.body.timestamp, // Set the current date as createdAt;
    };
    const response = yield (0, factories_1.fileFactory)().createFile(input);
    return res.status(response.code).json(response);
});
exports.createFileController = createFileController;
