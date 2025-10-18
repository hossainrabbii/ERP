import { departMentServices } from "./department.service.js";
import { sendResponse } from "../../utils/sendResponse.js";
import status from "http-status";
const createDepartMentInto = async (req, res) => {
    //   console.log(req.body);
    const result = await departMentServices.createDepartMentIntoDB(req.body);
    sendResponse.sendSuccessResponse(res, {
        statusCode: status.OK,
        message: "New department is created successfully.",
        data: result,
    });
};
export const departMentControllers = {
    createDepartMentInto,
};
//# sourceMappingURL=department.controller.js.map