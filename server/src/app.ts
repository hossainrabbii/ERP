import type { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
import globaErrorHandler from "./app/middlewares/globalErrorHandler.js";
import notFound from "./app/middlewares/notFound.js";
import routes from "./app/routes/routes.js";
import cookieParser from "cookie-parser";
const app: Application = express();

//parsers
app.use(express.json()); // to use json data
app.use(cookieParser()); // to parse cokies

app.use(cors());

app.use("/api/v1/", routes);

// global error handler
app.use(globaErrorHandler);

// not found API
app.use(notFound);

// front-end response
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! App is running.");
});

export default app;
