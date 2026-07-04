import { redirect } from "next/navigation";
import { requireUser, homeForRole } from "@/lib/session";

export default async function DashboardIndexPage() {
  const user = await requireUser();
  redirect(homeForRole(user.role));
}
