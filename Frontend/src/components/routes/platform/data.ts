import { z } from "zod";
import { GlobalReviewProps, RateProgressProps, ReviewProps } from "./feedback";

export const contactSchema = z.object({
  fullName: z
    .string({ required_error: "Le nom complet est requis" })
    .min(3, "Le nom complet doit comporter au moins 3 caractères")
    .max(30, "Le nom complet doit comporter moins de 30 caractères")
    .regex(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/, "Nom invalide"),
  email: z
    .string({ required_error: "Email est requis" })
    .email({ message: "Email est invalide" }),
  messagge: z
    .string({ required_error: "Messagge est requis" })
    .min(10, { message: "Messagge doit comporter au moins 10 caractères" })
    .max(250, "Messagge doit comporter moins de 250 caractères"),
});
export type ContactValues = z.infer<typeof contactSchema>;
export const DEFAULT_CONTACT_VALUES = {
  fullName: "",
  email: "",
  messagge: "",
};

export const feedbackSchema = z.object({
  fullName: z
    .string({ required_error: "Le nom complet est requis" })
    .min(3, "Le nom complet doit comporter au moins 3 caractères")
    .max(30, "Le nom complet doit comporter moins de 30 caractères")
    .regex(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/, "Nom invalide"),
  email: z
    .string({ required_error: "Email est requis" })
    .email({ message: "Email est invalide" }),
  rate: z
    .number({ required_error: "La note est requise" })
    .gte(1, "La note doit être supérieure ou égale à 1")
    .lte(5, "La note doit être inférieure ou égale à 5"),
  feedback: z
    .string({ required_error: "Retour d'information est requis" })
    .min(10, {
      message: "Retour d'information doit comporter au moins 10 caractères",
    })
    .max(350, "Retour d'information doit comporter moins de 350 caractères"),
});
export type FeedbackValues = z.infer<typeof feedbackSchema>;
export const DEFAULT_FEEDBACK_VALUES = {
  fullName: "",
  email: "",
  feedback: "",
  rate: 0,
};

export const initialRateProgress: RateProgressProps = {
  5: 0,
  4: 0,
  3: 0,
  2: 0,
  1: 0,
};

export const profileSchema = z.object({
  fullName: z
    .string({ required_error: "Le nom complet est requis" })
    .min(3, "Le nom complet doit comporter au moins 3 caractères")
    .max(30, "Le nom complet doit comporter moins de 30 caractères")
    .regex(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/, "Nom invalide"),
  email: z
    .string({ required_error: "Email est requis" })
    .email({ message: "Email est invalide" }),
  telephone: z.union([
    z.literal(""),
    z
      .string()
      .regex(/^0[5-7]\d{8}$/, "Numéro de téléphone invalide")
      .optional(),
  ]),
});
export type ProfileValues = z.infer<typeof profileSchema>;

export const globalRandomReviews: GlobalReviewProps[] = [
  {
    id: 2342,
    fullName: "Claire Martin",
    feedback:
      "Je suis très satisfaite de mon expérience. L'équipe a été très professionnelle.",
    rate: 234243,
    date: "2024-04-29",
    email: "exemple@gmail.com",
  },
  {
    id: 234223,
    fullName: "Pierre Bernard",
    feedback:
      "Le service était plutôt moyen. Il y avait des points à améliorer.",
    rate: 2,
    date: "2024-04-29",
    email: "tester@gmail.com",
  },
  {
    id: 1232,
    fullName: "Sophie Gauthier",
    feedback:
      "Le service était exceptionnel ! Je recommanderais à d'autres sans hésiter.",
    rate: 5,
    date: "2024-04-29",
    email: "global@yahoo.fr",
  },
  {
    id: 88,
    fullName: "Sophie Gauthier",
    feedback:
      "Le service était exceptionnel ! Je recommanderais à d'autres sans hésiter.",
    rate: 5,
    date: "2024-04-29",
    email: "global@yahoo.fr",
  },
  {
    id: 14,
    fullName: "Sophie Gauthier",
    feedback:
      "Le service était exceptionnel ! Je recommanderais à d'autres sans hésiter.",
    rate: 5,
    date: "2024-04-29",
    email: "global@yahoo.fr",
  },
  {
    id: 15,
    fullName: "Sophie Gauthier",
    feedback:
      "Le service était exceptionnel ! Je recommanderais à d'autres sans hésiter.",
    rate: 5,
    date: "2024-04-29",
    email: "global@yahoo.fr",
  },
  {
    id: 888,
    fullName: "Sophie Gauthier",
    feedback:
      "Le service était exceptionnel ! Je recommanderais à d'autres sans hésiter.",
    rate: 5,
    date: "2024-04-29",
    email: "global@yahoo.fr",
  },
  {
    id: 184,
    fullName: "Sophie Gauthier",
    feedback:
      "Le service était exceptionnel ! Je recommanderais à d'autres sans hésiter.",
    rate: 5,
    date: "2024-04-29",
    email: "global@yahoo.fr",
  },
  {
    id: 185,
    fullName: "Sophie Gauthier",
    feedback:
      "Le service était exceptionnel ! Je recommanderais à d'autres sans hésiter.",
    rate: 5,
    date: "2024-04-29",
    email: "global@yahoo.fr",
  },
];

export const userRandomReviews: ReviewProps[] = [
  {
    id: 1024,
    feedback:
      "Le service était très efficace et rapide. J'ai été impressionnée par la qualité des réponses.",
    rate: 5,
    date: "2024-04-29",
  },
  {
    id: 2056,
    feedback:
      "L'expérience était correcte, mais il y a eu quelques retards dans la communication.",
    rate: 3,
    date: "2024-04-29",
  },
  {
    id: 3078,
    feedback:
      "Je suis très satisfaite de mon expérience. L'équipe a été très professionnelle.",
    rate: 4,
    date: "2024-04-29",
  },
  {
    id: 1,
    feedback:
      "Je suis très satisfaite de mon expérience. L'équipe a été très professionnelle.",
    rate: 4,
    date: "2024-04-29",
  },
  {
    id: 2,
    feedback:
      "Je suis très satisfaite de mon expérience. L'équipe a été très professionnelle.",
    rate: 5,
    date: "2024-04-29",
  },
];
