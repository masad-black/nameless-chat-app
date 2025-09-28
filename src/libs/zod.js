import * as z from "zod";

const RegistrationSchema = z.object({
  username: z
    .string()
    .regex(/_/, { message: "Must contain a underscore." })
    .trim()
    .toLowerCase(),
  email: z.email(),
  password: z
    .string()
    .min(8, { message: "Must be at least 8 character long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});

export { RegistrationSchema };
