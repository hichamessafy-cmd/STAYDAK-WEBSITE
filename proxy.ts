export { auth as proxy } from "@/auth";

// Route protection and role checks live in auth.ts's `authorized` callback.
// Skip static assets and Next.js internals; run on everything else.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
