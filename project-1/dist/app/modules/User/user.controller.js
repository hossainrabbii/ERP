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
export const userControllers = {
    createUser,
};
//# sourceMappingURL=user.controller.js.map