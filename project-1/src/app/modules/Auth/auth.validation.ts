import z from "zod";

const loginValidationSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
const changePasswordValidationSchema = z.object({
  currentPassword: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
  newPassword: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
});

export const authValidation = {
  loginValidationSchema,
  changePasswordValidationSchema,
};
