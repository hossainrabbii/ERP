import type { NextFunction, Request, RequestHandler, Response } from "express";
import { userServices } from "./user.service.js";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import status from "http-status";

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
// same as below

const createUser = catchAsync(async (req, res) => {
  const { user } = req.body;
  const result = await userServices.createUserIntoDB(user);
  sendResponse.sendSuccessResponse(res, {
    statusCode: status.OK,
    message: "Your account is created successfully",
    data: result,
  });
});

// get all use
const getAllUser = async (req: Request, res: Response) => {
  const result = await userServices.getAllUserFromDB(req.query);
  // console.log(result)
  sendResponse.sendSuccessResponse(res, {
    statusCode: status.OK,
    message: "All user fetched successfully.",
    data: result,
  });
};

export const userControllers = {
  createUser,
  getAllUser,
};
