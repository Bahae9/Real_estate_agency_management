import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email est requis" })
    .email({ message: "Email est invalide" }),
  password: z
    .string({ required_error: "Le mot de passe est requis" })
    .min(8, { message: "Le mot de passe est invalide" }),
});
export type LoginValues = z.infer<typeof loginSchema>;
export const DEFAULT_LOGIN_VALUES = {
  email: "",
  password: "",
};

export const signupSchema = z.object({
  fullName: z
    .string({ required_error: "Le nom complet est requis" })
    .min(3, "Le nom complet doit comporter au moins 3 caractères")
    .max(30, "Le nom complet doit comporter moins de 30 caractères")
    .regex(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/, "Nom invalide"),
  telephone: z.union([
    z.literal(""),
    z
      .string()
      .regex(/^0[5-7]\d{7}$/, "Numéro de téléphone invalide")
      .optional(),
  ]),
  email: z
    .string({ required_error: "Email est requis" })
    .email({ message: "Email est invalide" }),
  password: z
    .string({ required_error: "Le mot de passe est requis" })
    .min(8, { message: "Le mot de passe doit comporter au moins 8 caractères" })
    .max(30, "Le mot de passe doit comporter moins de 30 caractères"),
});
export type SignupValues = z.infer<typeof signupSchema>;
export const DEFAULT_SIGNUP_VALUES = {
  fullName: "",
  telephone: "",
  email: "",
  password: "",
};
