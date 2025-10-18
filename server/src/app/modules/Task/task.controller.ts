import status from "http-status";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { taskServices } from "./task.service.js";

const createTask = catchAsync(async (req, res) => {
  const result = await taskServices.createTaskIntoDB(req.body);
  sendResponse.sendSuccessResponse(res, {
    statusCode: status.OK,
    message: "New Task is created.",
    data: result,
  });
});

export const taskControllers = {
  createTask,
};
