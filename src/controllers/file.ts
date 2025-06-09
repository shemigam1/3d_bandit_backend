import { NextFunction, Request, Response } from "express";
import { fileFactory } from "../services/factories";


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