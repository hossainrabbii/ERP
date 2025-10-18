import { userServices } from "./user.service.js";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import status from "http-status";
// const createUser = async (req: Request, res: Response, next: NextFunction) => {
// same as below
const createUser = catchAsync(async (req, res) => {
    const { user } = req.body;
    console.log(user);
    const result = await userServices.createUserIntoDB(req.body);
    sendResponse.sendSuccessResponse(res, {
        statusCode: status.OK,
        message: "Your account is created successfully",
        data: result,
    });
});
// get all use
const getAllUser = async (req, res) => {
    const result = await userServices.getAllUserFromDB(req.query);
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
//# sourceMappingURL=user.controller.js.map