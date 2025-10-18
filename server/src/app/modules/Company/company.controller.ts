import type { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import { companyServices } from "./company.service.js";
import { sendResponse } from "../../utils/sendResponse.js";
import status from "http-status";

const createCompany = catchAsync(async (req: Request, res: Response) => {
  const result = await companyServices.createCompanyIntoDB(req.body);
  sendResponse.sendSuccessResponse(res, {
    statusCode: status.OK,
    message: "Company created successfully.",
    data: result,
  });
});

export const companyControllers = {
  createCompany,
};
