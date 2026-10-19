import { z } from "zod";

/** Hero lead-capture form payload validation (client + API). */
export const heroLeadFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(120),
  specialty: z.string().trim().min(1, "Select a specialty").max(80),
  npi: z.string().trim().max(40).optional().default(""),
  email: z.email("Enter a valid email address"),
  phone: z.string().trim().min(1, "Phone number is required").max(40),
  preferredDate: z.string().trim().max(20).optional().default(""),
  ehr: z.string().trim().max(160).optional().default(""),
  practiceAddress: z.string().trim().min(1, "Practice name & address is required").max(240),
  consent: z.literal(true, { message: "Consent is required" }),
  /** Honeypot — ignored when filled; API pretends success. */
  website: z.string().max(200).optional().default(""),
});

export type HeroLeadFormPayload = z.infer<typeof heroLeadFormSchema>;
