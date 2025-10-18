import z from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    email: z.email({
      pattern:
        /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
    }),
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
