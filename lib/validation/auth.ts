import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email address."),
  password: z.string().min(1, "Password is required."),
});

export type LoginInput = z.infer<typeof loginSchema>;

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long.")
  .regex(/[a-zA-Z]/, "Password must contain at least one letter.")
  .regex(/[0-9]/, "Password must contain at least one number.");

const slugSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(3, "Clinic URL must be at least 3 characters long.")
  .max(63, "Clinic URL must be at most 63 characters long.")
  .regex(
    /^[a-z0-9]+(-[a-z0-9]+)*$/,
    "Clinic URL may only contain lowercase letters, numbers, and hyphens."
  );

export const registerClinicSchema = z
  .object({
    clinicName: z.string().trim().min(2, "Clinic name is required."),
    clinicSlug: slugSchema,
    adminFirstName: z.string().trim().min(1, "First name is required."),
    adminLastName: z.string().trim().min(1, "Last name is required."),
    adminEmail: z.string().trim().toLowerCase().email("Enter a valid email address."),
    adminPassword: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.adminPassword === data.confirmPassword, {
    error: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type RegisterClinicInput = z.infer<typeof registerClinicSchema>;
