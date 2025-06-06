"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = exports.ResultFunction = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("./config"));
const ResultFunction = (success, message, code, returnStatus, data) => {
    return {
        success,
        message,
        code,
        returnStatus,
        data,
    };
};
exports.ResultFunction = ResultFunction;
const signJwt = (user) => {
    try {
        const token = jsonwebtoken_1.default.sign({ _id: user._id.toString() }, config_1.default.JWT_SECRET, {
            expiresIn: '1h',
        });
        return token;
    }
    catch (error) {
        return null;
    }
};
exports.signJwt = signJwt;
const verifyJwt = (token) => {
    try {
        const verify = jsonwebtoken_1.default.verify(token, config_1.default.JWT_SECRET);
        return verify;
    }
    catch (error) {
        return error;
    }
};
exports.verifyJwt = verifyJwt;
