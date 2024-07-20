import { z } from "zod";

export const ContactMeSchema = z.object({
  name: z
    .string({ message: "required" })
    .refine((data) => data != "", { message: "required" }),
  email: z
    .string({ message: "required" })
    .email({ message: "invalid email address" })
    .refine((data) => data != "", { message: "required" }),
  message: z
    .string({ message: "required" })
    .refine((data) => data != "", { message: "required" }),
});
