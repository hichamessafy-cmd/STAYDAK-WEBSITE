import { RoleName } from "@prisma/client";
import { DefaultSession } from "next-auth";

declare module "@auth/core/types" {
  interface User {
    id: string;
    role: RoleName;
    clinicId: string | null;
  }

  interface Session {
    user: {
      id: string;
      role: RoleName;
      clinicId: string | null;
    } & DefaultSession["user"];
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id: string;
    role: RoleName;
    clinicId: string | null;
  }
}

declare module "next-auth" {
  interface User {
    id: string;
    role: RoleName;
    clinicId: string | null;
  }

  interface Session {
    user: {
      id: string;
      role: RoleName;
      clinicId: string | null;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: RoleName;
    clinicId: string | null;
  }
}
