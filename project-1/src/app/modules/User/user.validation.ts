import z from "zod";

const userValidationSchema = z.object({
  email: z.email({ pattern: z.regexes.html5Email }),
  password: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "This field is required" : "Not a string",
    })
    .min(6, "Password must be at least 6 characters long"),
});

export const userValidation = {
  userValidationSchema,
};
