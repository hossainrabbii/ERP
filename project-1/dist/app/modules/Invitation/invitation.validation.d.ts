import z from "zod";
export declare const invitationValidations: {
    createInvitationValidation: z.ZodObject<{
        companyId: z.ZodString;
        email: z.ZodEmail;
        role: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
        expiresAt: z.ZodString;
        status: z.ZodDefault<z.ZodEnum<{
            pending: "pending";
            accepted: "accepted";
            declined: "declined";
        }>>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=invitation.validation.d.ts.map