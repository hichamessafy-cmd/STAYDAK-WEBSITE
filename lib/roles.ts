import "server-only";
import { RoleName } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const ROLE_DESCRIPTIONS: Record<RoleName, string> = {
  SUPER_ADMIN: "Platform-wide administrator across all clinics.",
  CLINIC_ADMIN: "Administrator for a single clinic.",
  DOCTOR: "Clinician who manages patients, records, and prescriptions.",
  SECRETARY: "Front-desk staff who manages scheduling and billing.",
  PATIENT: "Patient with portal access to their own records.",
};

/** Roles are reference data, not user input — upsert so first-run environments self-seed. */
export async function ensureRole(name: RoleName) {
  return prisma.role.upsert({
    where: { name },
    update: {},
    create: { name, description: ROLE_DESCRIPTIONS[name] },
  });
}
