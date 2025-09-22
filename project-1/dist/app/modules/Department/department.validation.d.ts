import z from "zod";
export declare const departmentValidation: {
    createDepartmentSchemaValidation: z.ZodObject<{
        companyId: z.ZodString;
        departmentName: z.ZodString;
        shortCode: z.ZodOptional<z.ZodString>;
        despriction: z.ZodString;
        parentDeptId: z.ZodOptional<z.ZodString>;
        level: z.ZodNumber;
        status: z.ZodDefault<z.ZodString>;
        isDeleted: z.ZodDefault<z.ZodBoolean>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=department.validation.d.ts.map