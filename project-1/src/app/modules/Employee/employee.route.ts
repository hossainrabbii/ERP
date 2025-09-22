import { Router } from "express";
import { employeeController } from "./employee.controller.js";

const router = Router();

// routes
router.post("/create-employee", employeeController.createEmployee);

export const employeeRoutes = router;
