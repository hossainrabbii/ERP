import { Router } from "express";
import { employeeController } from "./employee.controller.js";
import auth from "../../middlewares/auth.js";
import { USER_ROLE } from "../User/user.constant.js";
const router = Router();
// routes
router.post("/create-employee", auth(USER_ROLE.admin), //auth(USER_ROLE.admin, USER_ROLE.employee ),
employeeController.createEmployee);
export const employeeRoutes = router;
//# sourceMappingURL=employee.route.js.map