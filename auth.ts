import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/password";
import { loginSchema } from "@/lib/validation/auth";
import { AUTH_REQUIRED_PREFIX, ROLE_HOME, getRequiredRoles } from "@/lib/rbac";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) return null;
        const { email, password } = parsed.data;

        const user = await prisma.user.findUnique({
          where: { email },
          include: { role: true },
        });

        if (!user || !user.isActive || !user.passwordHash) return null;

        const isValid = await verifyPassword(password, user.passwordHash);
        if (!isValid) return null;

        await prisma.user.update({
          where: { id: user.id },
          data: { lastLoginAt: new Date() },
        });

        return {
          id: user.id,
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          role: user.role.name,
          clinicId: user.clinicId,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.clinicId = user.clinicId;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.clinicId = token.clinicId;
      return session;
    },
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;
      const isLoggedIn = !!auth?.user;

      const isAuthPage = pathname === "/login" || pathname === "/register";
      if (isAuthPage) {
        if (isLoggedIn) {
          return NextResponse.redirect(
            new URL(ROLE_HOME[auth.user.role], request.nextUrl)
          );
        }
        return true;
      }

      if (!pathname.startsWith(AUTH_REQUIRED_PREFIX)) return true;
      if (!isLoggedIn) return false;

      const requiredRoles = getRequiredRoles(pathname);
      if (requiredRoles && !requiredRoles.includes(auth.user.role)) {
        return NextResponse.redirect(new URL("/unauthorized", request.nextUrl));
      }

      return true;
    },
  },
});
