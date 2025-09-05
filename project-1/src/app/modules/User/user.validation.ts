import z from "zod";

const createUserValidationSchema = z.object({
  user: z.object({
    email: z.string().email(),
    password: z
      .string({
        error: (issue) =>
          issue.input === undefined ? "This field is required" : "Not a string",
      })
      .min(6, "Password must be at least 6 characters long"),
  }),
});

export const userValidation = {
  createUserValidationSchema,
};
