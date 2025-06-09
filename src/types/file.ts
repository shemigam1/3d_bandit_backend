import { Types } from "mongoose";

export interface IFile {
    name: string;
    fileUrl: string;
    owner: Types.ObjectId | string;
    createdAt: Date;
}