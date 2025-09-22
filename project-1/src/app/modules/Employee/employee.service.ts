import { Employee } from "./employee.model.js";
import type { TEmployee } from "./employee.type.js";

const createEmployeeIntoDB = async (payload: TEmployee) => {
  const newEmployee = await Employee.create(payload);
  return newEmployee;
};

export const employeeServices = {
  createEmployeeIntoDB,
};
