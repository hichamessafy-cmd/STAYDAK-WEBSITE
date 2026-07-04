import { RoleName } from "@prisma/client";

/** Where each role lands after login / when hitting a route it isn't allowed on. */
export const ROLE_HOME: Record<RoleName, string> = {
  SUPER_ADMIN: "/dashboard/admin",
  CLINIC_ADMIN: "/dashboard/admin",
  DOCTOR: "/dashboard/doctor",
  SECRETARY: "/dashboard/secretary",
  PATIENT: "/dashboard",
};

/** Route prefixes that require one of the listed roles. Checked longest-prefix first. */
export const ROLE_PROTECTED_ROUTES: { prefix: string; roles: RoleName[] }[] = [
  { prefix: "/dashboard/admin", roles: ["SUPER_ADMIN", "CLINIC_ADMIN"] },
  { prefix: "/dashboard/doctor", roles: ["DOCTOR"] },
  { prefix: "/dashboard/secretary", roles: ["SECRETARY"] },
];

/** Any route under this prefix requires a signed-in user. */
export const AUTH_REQUIRED_PREFIX = "/dashboard";

export function getRequiredRoles(pathname: string): RoleName[] | null {
  const match = ROLE_PROTECTED_ROUTES.filter((route) =>
    pathname.startsWith(route.prefix)
  ).sort((a, b) => b.prefix.length - a.prefix.length)[0];

  return match ? match.roles : null;
}

export function isRoleAllowed(pathname: string, role: RoleName): boolean {
  const requiredRoles = getRequiredRoles(pathname);
  if (!requiredRoles) return true;
  return requiredRoles.includes(role);
}
