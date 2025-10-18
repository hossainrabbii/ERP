import { Employee } from "./employee.model.js";
const createEmployeeIntoDB = async (payload) => {
    const newEmployee = await Employee.create(payload);
    return newEmployee;
};
export const employeeServices = {
    createEmployeeIntoDB,
};
//# sourceMappingURL=employee.service.js.map