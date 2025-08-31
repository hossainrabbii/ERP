import express from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/User/user.route.js";
import globaErrorHandler from "./app/middlewares/globalErrorHandler.js";
import notFound from "./app/middlewares/notFound.js";
import routes from "./app/routes/routes.js";
const app = express();
//parsers
app.use(express.json()); // to use json data
app.use(cors());
app.use("/api/v1/", routes);
// global error handler
app.use(globaErrorHandler);
// not found API
app.use(notFound);
// front-end response
app.get("/", (req, res) => {
    res.send("Hello World! App is running.");
});
export default app;
//# sourceMappingURL=app.js.map