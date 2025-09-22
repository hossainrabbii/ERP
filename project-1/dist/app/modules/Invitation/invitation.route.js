import { Router } from "express";
import { invitationControllers } from "./invitation.controller.js";
import { invitationValidations } from "./invitation.validation.js";
import validationRequest from "../../middlewares/validationRequest.js";
const router = Router();
router.get("/", invitationControllers.getAllInvitations);
router.post("/create-invitation", validationRequest(invitationValidations.createInvitationValidation), invitationControllers.createInvitation);
router.patch("/accept/:invitationId", invitationControllers.acceptInvitation);
export const invitationRoutes = router;
//# sourceMappingURL=invitation.route.js.map