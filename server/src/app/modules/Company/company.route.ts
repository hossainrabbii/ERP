import { Router } from "express";
import { companyControllers } from "./company.controller.js";
import validationRequest from "../../middlewares/validationRequest.js";
import { companyValidation } from "./company.validation.js";

const router = Router();

router.post("/create-company", companyControllers.createCompany);

export const companyRoutes = router;
