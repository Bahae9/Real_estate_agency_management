import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Invalid password" }),
});
export type LoginValues = z.infer<typeof loginSchema>;
export const DEFAULT_LOGIN_VALUES = {
  email: "",
  password: "",
};

export const signupSchema = z.object({
  fullName: z
    .string({ required_error: "Full name is required" })
    .min(3, "Full name must be at least 3 characters long")
    .max(50, "Full name must be less than 50 characters long")
    .regex(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/, "Invalid name"),
  telephone: z.union([
    z.literal(""),
    z
      .string()
      .regex(/^0[5-7]\d{8}$/, "Invalid phone number")
      .optional(),
  ]),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(30, "Password must be less than 30 characters long"),
});
export type SignupValues = z.infer<typeof signupSchema>;
export const DEFAULT_SIGNUP_VALUES = {
  fullName: "",
  telephone: "",
  email: "",
  password: "",
};
