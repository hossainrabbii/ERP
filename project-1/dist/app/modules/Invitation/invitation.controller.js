import status from "http-status";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { invitationServices } from "./invitation.service.js";
const createInvitation = catchAsync(async (req, res) => {
    const result = await invitationServices.createInvitationIntoDB(req.body);
    sendResponse.sendSuccessResponse(res, {
        statusCode: status.OK,
        message: "New invitation created successfully.",
        data: result,
    });
});
// get all invitations
const getAllInvitations = async (req, res) => {
    const result = await invitationServices.getAllInvitationFromDB();
    sendResponse.sendSuccessResponse(res, {
        statusCode: status.OK,
        message: "All inivitaions retrieved successfully.",
        data: result,
    });
};
// Accept invitation
const acceptInvitation = async (req, res) => {
    const { invitationId } = req.params;
    const result = await invitationServices.acceptInvitationIntoDB(invitationId);
    sendResponse.sendSuccessResponse(res, {
        statusCode: status.OK,
        message: "You are joined.",
        data: result,
    });
};
export const invitationControllers = {
    createInvitation,
    getAllInvitations,
    acceptInvitation,
};
//# sourceMappingURL=invitation.controller.js.map