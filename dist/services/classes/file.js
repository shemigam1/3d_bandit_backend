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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const config_1 = require("../../helpers/config");
const utils_1 = require("../../helpers/utils");
const generic_1 = require("../../types/generic");
const file_1 = __importDefault(require("../../models/file"));
class File {
    upload3dFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const timestamp = Math.round((new Date).getTime() / 1000);
            if (!config_1.cloudinaryConfig.api_secret) {
                console.log("Cloudinary API secret is not defined.");
                return (0, utils_1.ResultFunction)(false, "Something went wrong", 500, generic_1.ReturnStatus.BAD_REQUEST, null);
            }
            const signature = cloudinary_1.v2.utils.api_sign_request({ timestamp }, config_1.cloudinaryConfig.api_secret);
            const signatureData = {
                signature,
                timestamp,
                cloudname: config_1.cloudinaryConfig.cloud_name,
                apikey: config_1.cloudinaryConfig.api_key
            };
            console.log(config_1.cloudinaryConfig);
            return (0, utils_1.ResultFunction)(true, "Signature generated!", 200, generic_1.ReturnStatus.OK, signatureData);
        });
    }
    createFile(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, fileUrl, owner, createdAt } = input;
            try {
                const newFile = file_1.default.create({ name, fileUrl, owner, createdAt });
                return (0, utils_1.ResultFunction)(true, "File created successfully", 200, generic_1.ReturnStatus.OK, newFile);
            }
            catch (error) {
                return (0, utils_1.ResultFunction)(false, "Something went wrong", 500, generic_1.ReturnStatus.BAD_REQUEST, null);
            }
        });
    }
    getFiles() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.default = File;
