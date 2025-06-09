import mongoose, { Schema } from "mongoose";
import { IFile } from "../types/file";

const FileSchema: Schema = new Schema<IFile>({
    // name: { type: String, required: true },
    name: { type: String, required: true },
    fileUrl: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
})


const FileModel = mongoose.model<IFile>('File', FileSchema)
export default FileModel