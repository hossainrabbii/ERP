import z from "zod";
export declare const authValidation: {
    loginValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodString;
            password: z.ZodString;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
    changePasswordValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            currentPassword: z.ZodString;
            newPassword: z.ZodString;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
    refreshTokenValidationSchema: z.ZodObject<{
        cookies: z.ZodObject<{
            refreshToken: z.ZodString;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
    forgetPasswordValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodString;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
    resetPasswordValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            newPassword: z.ZodString;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=auth.validation.d.ts.map