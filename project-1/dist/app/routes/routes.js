import { Router } from "express";
import { userRoutes } from "../modules/User/user.route.js";
import { companyRoutes } from "../modules/Company/company.route.js";
const routes = Router();
const allRoutes = [
    {
        path: "/users",
        route: userRoutes,
    },
    {
        path: "/company",
        route: companyRoutes,
    },
];
allRoutes.forEach((route) => routes.use(route.path, route.route));
export default routes;
//# sourceMappingURL=routes.js.map