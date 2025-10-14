import { Router } from "express";
import { userRoutes } from "../modules/User/user.route.js";
import { companyRoutes } from "../modules/Company/company.route.js";
import { departmentRoutes } from "../modules/Department/department.route.js";
import { invitationRoutes } from "../modules/Invitation/invitation.route.js";
import { taskRoutes } from "../modules/Task/task.route.js";
import { employeeRoutes } from "../modules/Employee/employee.route.js";
import { authRoutes } from "../modules/Auth/auth.route.js";

const routes = Router();

const allRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/companies",
    route: companyRoutes,
  },
  {
    path: "/departments",
    route: departmentRoutes,
  },
  {
    path: "/invitations",
    route: invitationRoutes,
  },
  {
    path: "/task",
    route: taskRoutes,
  },
  {
    path: "/employee",
    route: employeeRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
];

allRoutes.forEach((route) => routes.use(route.path, route.route));

export default routes;
