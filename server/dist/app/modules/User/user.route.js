import express from "express";
import { userControllers } from "./user.controller.js";
import validationRequest from "../../middlewares/validationRequest.js";
import { userValidation } from "./user.validation.js";
import auth from "../../middlewares/auth.js";
import { USER_ROLE } from './user.constant.js';
const router = express.Router();
router.post("/create-user", validationRequest(userValidation.createUserValidationSchema), userControllers.createUser);
router.get("/", auth(USER_ROLE.user), userControllers.getAllUser);
export const userRoutes = router;
//# sourceMappingURL=user.route.js.map