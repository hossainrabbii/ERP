import z from "zod";
const loginValidationSchema = z.object({
    body: z.object({
        email: z.string().nonempty("Email is required").email("Invalid email"),
        password: z.string().min(6, "Password must be at least 6 characters long"),
    }),
});
// password change validatio schema
const changePasswordValidationSchema = z.object({
    body: z.object({
        currentPassword: z
            .string()
            .min(6, "Password must be at least 6 characters long"),
        newPassword: z
            .string()
            .min(6, "Password must be at least 6 characters long"),
    }),
});
// password change validatio schema
const refreshTokenValidationSchema = z.object({
    cookies: z.object({
        refreshToken: z.string({
            error: (issue) => issue.input === undefined ? "This field is required" : "Not a string",
        }),
    }),
});
// forget password
const forgetPasswordValidationSchema = z.object({
    body: z.object({
        email: z.string().nonempty("Email is required").email("Invalid email"),
    }),
});
// reset password
const resetPasswordValidationSchema = z.object({
    body: z.object({
        newPassword: z
            .string()
            .min(6, "Password must be at least 6 characters long"),
    }),
});
export const authValidation = {
    loginValidationSchema,
    changePasswordValidationSchema,
    refreshTokenValidationSchema,
    forgetPasswordValidationSchema,
    resetPasswordValidationSchema,
};
//# sourceMappingURL=auth.validation.js.map