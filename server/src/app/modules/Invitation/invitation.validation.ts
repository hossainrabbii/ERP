import z from "zod";

const createInvitationValidation = z.object({
  companyId: z.string(),
  email: z.email({
    pattern:
      /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
  }),
  role: z.string().optional(),
  title: z.string({
    error: (issue) =>
      issue.input === undefined ? "Title is required" : "Not a string",
  }).min(20, "Title should minimum 20 characters long."),
  message: z.string().optional(),
  expiresAt: z.string({
    error: (error) => {
      console.log(error);
      return error.input === undefined ? "Status is required" : "Not a string";
    },
  }),
  status: z
    .enum(["pending", "accepted", "declined"], {
      message: "Status must be either pending, accepted, or declined",
    })
    .default("pending"),
});

export const invitationValidations = {
  createInvitationValidation,
};
