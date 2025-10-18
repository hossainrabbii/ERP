import type { RequestHandler } from "express";
import { authServices } from "./auth.service.js";
import { sendResponse } from "../../utils/sendResponse.js";
import status from "http-status";
import config from "../../config/index.js";

const loginUser: RequestHandler = async (req, res) => {
  console.log(req.authorizedUser);
  const result = await authServices.loginUser(req.body);
  const { accessToken, refreshToken } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
  });
  sendResponse.sendSuccessResponse(res, {
    statusCode: status.OK,
    message: "Logged in successfully.",
    data: result,
  });
};

// change password
const changePassword: RequestHandler = async (req, res) => {
  console.log(req.authorizedUser, req.body);
  const { ...passwordData } = req?.body;
  const result = await authServices.changePassword(
    req.authorizedUser,
    passwordData
  );
  sendResponse.sendSuccessResponse(res, {
    statusCode: status.OK,
    message: "Password updated successfully.",
    data: result,
  });
};

// refresh token
const refreshToken: RequestHandler = async (req, res) => {
  // console.log(req.authorizedUser, req.body);
  // const { ...passwordData } = req?.body;
  // const result = await authServices.changePassword(
  //   req.authorizedUser,
  //   passwordData
  // );

  const result = await authServices.refreshToken(req?.cookies?.refreshToken);
  sendResponse.sendSuccessResponse(res, {
    statusCode: status.OK,
    message: "New access token retrieved successfully.",
    data: result,
  });
};

// forget password
const forgetPassword: RequestHandler = async (req, res) => {
  const result = await authServices.forgetPassword(req?.body?.email);
  sendResponse.sendSuccessResponse(res, {
    statusCode: status.OK,
    message: "Reset password link is generated successfully.",
    data: result,
  });
};

// reset password
const resetPassword: RequestHandler = async (req, res) => {
  console.log(req.headers.authorization);
  const result = await authServices.resetPasswordIntoDB(
    req?.body?.newPassword,
    req?.headers?.authorization
  );

  sendResponse.sendSuccessResponse(res, {
    statusCode: status.OK,
    message: "Password reset is successful.",
    data: null,
  });
};

export const authController = {
  loginUser,
  changePassword,
  refreshToken,
  forgetPassword,
  resetPassword,
};
