import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Email format is incorrect"),
  password: z.string().min(1, "Password is required"),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
