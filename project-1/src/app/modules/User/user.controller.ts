import type { NextFunction, Request, RequestHandler, Response } from "express";
import { userServices } from "./user.service.js";

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
// same as below
const createUser: RequestHandler = async (req, res, next) => {
  // console.log(req.body)
  try {
    const { user } = req.body;
    console.log(req.body);
    const result = await userServices.createUserIntoDB(user);
    res.status(200).json({
      success: true,
      message: "Your account is created successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const userControllers = {
  createUser,
};
