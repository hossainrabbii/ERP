import z from "zod";

const taskSchemaValidation = z.object({
  title: z.string(),
  details: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "Task details fill is required"
          : "Not a string.",
    })
    .min(10, "Please meet the details to ensure task is done."),
  givenBy: z.string(),
  taskFor: z.string(),
  deadline: z.string(),
  companyId: z.string(),
});

export const taskValidation = {
  taskSchemaValidation,
};
