import { Router } from "express";
import { departMentControllers } from "./department.controller.js";
const router = Router();
router.post("/create-department", departMentControllers.createDepartMentInto);
export const departmentRoutes = router;
//# sourceMappingURL=department.route.js.map