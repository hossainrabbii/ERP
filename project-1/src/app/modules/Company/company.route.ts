import { Router } from "express";
import { companyControllers } from "./company.controller.js";

const router = Router();

router.post("/create-company", companyControllers.createCompany);

export const companyRoutes = router;
