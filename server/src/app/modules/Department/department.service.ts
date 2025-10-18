import { Company } from "../Company/company.model.js";
import type { TDepartment } from "./department.type.js";
import { Department } from "./department.model.js";

const createDepartMentIntoDB = async (payload: TDepartment) => {
  const company = await Company.findOne({ _id: payload.companyId });
  if (!company) {
    throw new Error("Company doesn't exist!");
  }
  // Determine level
  const level =
    payload.level == null || payload.level === 0 ? 1 : payload.level + 1;

  // Check if a department at this level already exists in the company
  const existingDept = await Department.findOne({
    companyId: company._id,
    level: level,
    departmentName: payload.departmentName,
    isDeleted: false,
  });

  if (existingDept) {
    throw new Error(
      `A department at this name is already exists for this company.`
    );
  }

  // Continue creating department
  const newDepartment = await Department.create({
    ...payload,
    level,
  });

  return newDepartment;
};

export const departMentServices = {
  createDepartMentIntoDB,
};
