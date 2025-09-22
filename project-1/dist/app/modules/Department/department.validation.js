import z from "zod";
const createDepartmentSchemaValidation = z.object({
    companyId: z.string({ error: "Can not be empty!" }),
    departmentName: z
        .string()
        .min(3, "Department name must be at least 3 characters long."),
    shortCode: z.string().optional(),
    despriction: z
        .string()
        .min(20, "Description must be at least 20 characters long."),
    parentDeptId: z.string().optional(),
    level: z.number({ error: "Level should be declared." }),
    status: z.string().default("active"),
    isDeleted: z.boolean().default(false),
});
export const departmentValidation = {
    createDepartmentSchemaValidation,
};
//# sourceMappingURL=department.validation.js.map