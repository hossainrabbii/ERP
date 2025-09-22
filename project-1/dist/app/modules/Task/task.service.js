import { Company } from "../Company/company.model.js";
import { Task } from "./task.model.js";
const createTaskIntoDB = async (payload) => {
    const companyExist = await Company.findById(payload.companyId);
    if (!companyExist) {
        throw new Error("Company is not exist, contact with the authority.");
    }
    const newTask = await Task.create(payload);
    return newTask;
};
export const taskServices = {
    createTaskIntoDB,
};
//# sourceMappingURL=task.service.js.map