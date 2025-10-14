import { authServices } from "./auth.service.js";
import { sendResponse } from "../../utils/sendResponse.js";
import status from "http-status";
const loginUser = async (req, res) => {
    const result = await authServices.loginUser(req.body);
    sendResponse.sendSuccessResponse(res, {
        statusCode: status.OK,
        message: "Logged in successfully.",
        data: result,
    });
};
export const authController = {
    loginUser,
};
//# sourceMappingURL=auth.controller.js.map