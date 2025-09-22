import z from "zod";
export declare const userValidation: {
    createUserValidationSchema: z.ZodObject<{
        user: z.ZodObject<{
            email: z.ZodEmail;
            password: z.ZodString;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=user.validation.d.ts.map