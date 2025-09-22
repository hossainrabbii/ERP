import status from "http-status";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { employeeServices } from "./employee.service.js";
const createEmployee = catchAsync(async (req, res) => {
    const result = await employeeServices.createEmployeeIntoDB(req.body);
    sendResponse.sendSuccessResponse(res, {
        statusCode: status.OK,
        message: "New employee added.",
        data: result,
    });
});
export const employeeController = {
    createEmployee,
};
//# sourceMappingURL=employee.controller.js.map