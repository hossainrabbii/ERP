import express from "express";
import { userControllers } from "./user.controller.js";
import validationRequest from "../../middlewares/validationRequest.js";
import { userValidation } from "./user.validation.js";
const router = express.Router();
router.post("/create-user", validationRequest(userValidation.createUserValidationSchema), userControllers.createUser);
export const userRoutes = router;
//# sourceMappingURL=user.route.js.map