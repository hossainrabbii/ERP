import { Router } from "express";
import { taskValidation } from "./task.validation.js";
import validationRequest from "../../middlewares/validationRequest.js";
import { taskControllers } from "./task.controller.js";

const router = Router();

router.post(
  "/create-task",
  validationRequest(taskValidation.taskSchemaValidation),
  taskControllers.createTask
);

export const taskRoutes = router;
