"use server";

import { AuthError } from "next-auth";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { signIn, signOut } from "@/auth";
import { hashPassword } from "@/lib/password";
import { ensureRole } from "@/lib/roles";
import {
  loginSchema,
  registerClinicSchema,
} from "@/lib/validation/auth";

export type LoginFormState = {
  errors?: { email?: string[]; password?: string[] };
  message?: string;
};

export async function loginAction(
  _prevState: LoginFormState | undefined,
  formData: FormData
): Promise<LoginFormState> {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    await signIn("credentials", {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
      redirectTo: "/dashboard",
    });
    return {};
  } catch (error) {
    if (error instanceof AuthError) {
      return { message: "Invalid email or password." };
    }
    throw error;
  }
}

export type RegisterFormState = {
  errors?: Record<string, string[]>;
  message?: string;
};

export async function registerClinicAction(
  _prevState: RegisterFormState | undefined,
  formData: FormData
): Promise<RegisterFormState> {
  const validatedFields = registerClinicSchema.safeParse({
    clinicName: formData.get("clinicName"),
    clinicSlug: formData.get("clinicSlug"),
    adminFirstName: formData.get("adminFirstName"),
    adminLastName: formData.get("adminLastName"),
    adminEmail: formData.get("adminEmail"),
    adminPassword: formData.get("adminPassword"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const {
    clinicName,
    clinicSlug,
    adminFirstName,
    adminLastName,
    adminEmail,
    adminPassword,
  } = validatedFields.data;

  const [existingClinic, existingUser] = await Promise.all([
    prisma.clinic.findUnique({ where: { slug: clinicSlug } }),
    prisma.user.findUnique({ where: { email: adminEmail } }),
  ]);

  if (existingClinic) {
    return { errors: { clinicSlug: ["This clinic URL is already taken."] } };
  }
  if (existingUser) {
    return { errors: { adminEmail: ["An account with this email already exists."] } };
  }

  const adminRole = await ensureRole("CLINIC_ADMIN");
  const passwordHash = await hashPassword(adminPassword);

  try {
    await prisma.$transaction(async (tx) => {
      const clinic = await tx.clinic.create({
        data: { name: clinicName, slug: clinicSlug },
      });

      await tx.user.create({
        data: {
          email: adminEmail,
          passwordHash,
          firstName: adminFirstName,
          lastName: adminLastName,
          roleId: adminRole.id,
          clinicId: clinic.id,
        },
      });
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return { message: "This clinic URL or email is already in use." };
    }
    throw error;
  }

  try {
    await signIn("credentials", {
      email: adminEmail,
      password: adminPassword,
      redirectTo: "/dashboard/admin",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        message: "Clinic created. Please sign in with your new account.",
      };
    }
    throw error;
  }

  return {};
}

export async function logoutAction() {
  await signOut({ redirectTo: "/login" });
}
