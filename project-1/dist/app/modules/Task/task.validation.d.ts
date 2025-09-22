import z from "zod";
export declare const taskValidation: {
    taskSchemaValidation: z.ZodObject<{
        title: z.ZodString;
        details: z.ZodString;
        givenBy: z.ZodString;
        taskFor: z.ZodString;
        deadline: z.ZodString;
        companyId: z.ZodString;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=task.validation.d.ts.map