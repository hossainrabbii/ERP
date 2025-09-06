import z from "zod";
export declare const companyValidation: {
    createCompanyValidationSchema: z.ZodObject<{
        companyName: z.ZodString;
        ownerMailId: z.ZodEmail;
        industry: typeof z.string;
        ownerUserId: z.ZodString;
        isDeleted: z.ZodBoolean;
        status: z.ZodDefault<z.ZodEnum<{
            running: "running";
            paused: "paused";
        }>>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=company.validation.d.ts.map