import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "../../helpers/config";
import { ResultFunction } from "../../helpers/utils";
import { ReturnStatus } from "../../types/generic";
import { IFile } from "../../types/file";
import FileModel from "../../models/file";
class File {
    public async upload3dFile() {
        const timestamp = Math.round((new Date).getTime() / 1000);

        if (!cloudinaryConfig.api_secret) {
            console.log("Cloudinary API secret is not defined.");
            return ResultFunction(
                false,
                "Something went wrong",
                500,
                ReturnStatus.BAD_REQUEST,
                null);
        }
        const signature = cloudinary.utils.api_sign_request({ timestamp }, cloudinaryConfig.api_secret);

        const signatureData = {
            signature,
            timestamp,
            cloudname: cloudinaryConfig.cloud_name,
            apikey: cloudinaryConfig.api_key
        }

        // console.log(cloudinaryConfig);

        return ResultFunction(
            true,
            "Signature generated!",
            200,
            ReturnStatus.OK,
            signatureData
        )
    }

    public async createFile(input: IFile) {
        const { name, fileUrl, owner, createdAt } = input;

        try {
            const newFile = FileModel.create({ name, fileUrl, owner, createdAt });
            // console.log(newFile);

            return ResultFunction(
                true,
                "File created successfully",
                200,
                ReturnStatus.OK,
                newFile
            );
        } catch (error) {
            return ResultFunction(
                false,
                "Something went wrong",
                500,
                ReturnStatus.BAD_REQUEST,
                null);
        }
    }

    public async getFiles() { }
}

export default File;