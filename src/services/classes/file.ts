import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "../../helpers/config";
import { ResultFunction } from "../../helpers/utils";
import { ReturnStatus } from "../../types/generic";
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
            cloudname: cloudinaryConfig.cloudName,
            apikey: cloudinaryConfig.apiKey
        }

        return ResultFunction(
            true,
            "Signature generated!",
            200,
            ReturnStatus.OK,
            signatureData
        )
    }
}

export default File;