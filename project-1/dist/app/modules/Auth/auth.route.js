import { Router } from "express";
import validationRequest from "../../middlewares/validationRequest.js";
import { authValidation } from "./auth.validation.js";
import { authController } from "./auth.controller.js";
const router = Router();
router.post("/login", validationRequest(authValidation.loginValidationSchema), authController.loginUser);
export const authRoutes = router;
//# sourceMappingURL=auth.route.js.map