import type { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
const app: Application = express();

//parsers
app.use(express.json()); // to use json data
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
