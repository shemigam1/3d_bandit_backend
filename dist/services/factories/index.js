"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFactory = exports.authFactory = void 0;
const auth_1 = __importDefault(require("../classes/auth"));
const file_1 = __importDefault(require("../classes/file"));
const authFactory = () => {
    // define parameters for initialization here
    return new auth_1.default();
};
exports.authFactory = authFactory;
const fileFactory = () => {
    // define parameters for initialization here
    return new file_1.default();
};
exports.fileFactory = fileFactory;
