import type { TCompnay } from "./company.interface.js";
import { Company } from "./company.model.js";

// create company into DB
const createCompanyIntoDB = async (payload: TCompnay) => {
  const newCompany = await Company.create(payload);
  return newCompany;
};

export const companyServices = {
  createCompanyIntoDB,
};
