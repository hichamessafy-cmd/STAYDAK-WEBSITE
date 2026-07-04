import "server-only";
import { redirect } from "next/navigation";
import { cache } from "react";
import { RoleName } from "@prisma/client";
import { auth } from "@/auth";
import { ROLE_HOME } from "@/lib/rbac";

/** Memoized per-request session read. Use this instead of calling `auth()` repeatedly. */
export const getSession = cache(async () => auth());

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user ?? null;
}

/** Redirects to /login if there is no session. Use in Server Components, Server Actions, Route Handlers. */
export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

/** Redirects unauthorized users to /unauthorized. Always call requireUser()-equivalent checks close to the data. */
export async function requireRole(...roles: RoleName[]) {
  const user = await requireUser();
  if (!roles.includes(user.role)) redirect("/unauthorized");
  return user;
}

export function homeForRole(role: RoleName) {
  return ROLE_HOME[role];
}
