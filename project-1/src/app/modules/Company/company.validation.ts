import z from "zod";

const createCompanyValidationSchema = z.object({
  companyName: z.string().min(2, "Company name be at least 2 characters long."),
  ownerMailId: z.email(),
  industry: z.string,
  ownerUserId: z.string(),
  isDeleted: z.boolean(),
  status: z.enum(["running", "paused"]).default("running"),
});

export const companyValidation = {
  createCompanyValidationSchema,
};
