import { User } from "../User/user.model.js";
import type { TCompany } from "./company.interface.js";
import { Company } from "./company.model.js";

// create company into DB
const createCompanyIntoDB = async (payload: TCompany) => {
  console.log(payload);
  // user check exits

  const owner = await User.findOne({ email: payload.ownerMailId });
  if (!owner) {
    throw new Error("Email id not registered yet. Please register first.");
  }
  payload.ownerUserId = owner._id;
  console.log(payload);

  const newCompany = await Company.create(payload);
  return newCompany;
};

export const companyServices = {
  createCompanyIntoDB,
};
