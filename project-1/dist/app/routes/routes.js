import { Router } from "express";
import { userRoutes } from "../modules/User/user.route.js";
const routes = Router();
const allRoutes = [
    {
        path: "/users",
        route: userRoutes,
    },
    {
        path: "/company",
        route: userRoutes,
    },
];
allRoutes.forEach((route) => routes.use(route.path, route.route));
export default routes;
//# sourceMappingURL=routes.js.map