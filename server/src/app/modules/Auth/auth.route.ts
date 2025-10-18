import { Router } from "express";
import validationRequest from "../../middlewares/validationRequest.js";
import { authValidation } from "./auth.validation.js";
import { authController } from "./auth.controller.js";
import auth from "../../middlewares/auth.js";
import { USER_ROLE } from "../User/user.constant.js";

const router = Router();

router.post(
  "/login",
  validationRequest(authValidation.loginValidationSchema),
  authController.loginUser
);

router.post(
  "/change-password",
  auth(USER_ROLE.admin, USER_ROLE.employee, USER_ROLE.user),
  validationRequest(authValidation.changePasswordValidationSchema),
  authController.changePassword
);
router.post(
  "/refresh-token",
  validationRequest(authValidation.refreshTokenValidationSchema),
  authController.refreshToken
);

router.post(
  "/forget-password",
  validationRequest(authValidation.forgetPasswordValidationSchema),
  authController.forgetPassword
);

router.post(
  "/reset-password",
  validationRequest(authValidation.resetPasswordValidationSchema),
  authController.resetPassword
);

export const authRoutes = router;
