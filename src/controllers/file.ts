import { NextFunction, Request, Response } from "express";
import { fileFactory } from "../services/factories";
import { IFile } from "../types/file";


export const getSignController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // const input: ISignup = {
    //     // name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password,
    // };
    const response = await fileFactory().upload3dFile();
    // return res.status(response.code).json(response);
    return res.status(response.code).json(response);
};


export const createFileController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const input: IFile = {
        name: req.body.name,
        fileUrl: req.body.fileUrl,
        owner: req.body.owner, // Assuming owner is passed in the request body;
        createdAt: req.body.timestamp, // Set the current date as createdAt;
    };
    const response = await fileFactory().createFile(input);
    return res.status(response.code).json(response);
}