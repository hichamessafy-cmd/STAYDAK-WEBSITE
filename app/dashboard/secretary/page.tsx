import { requireRole } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export default async function SecretaryDashboardPage() {
  const user = await requireRole("SECRETARY");

  const todaysAppointments = user.clinicId
    ? await prisma.appointment.findMany({
        where: {
          clinicId: user.clinicId,
          scheduledAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
            lt: new Date(new Date().setHours(24, 0, 0, 0)),
          },
        },
        orderBy: { scheduledAt: "asc" },
        include: { patient: true, doctor: { include: { user: true } } },
      })
    : [];

  return (
    <div>
      <h1 className="text-xl font-semibold text-slate-900">Today&apos;s schedule</h1>
      <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
        {todaysAppointments.length === 0 && (
          <p className="p-4 text-sm text-slate-500">No appointments scheduled today.</p>
        )}
        {todaysAppointments.map((appointment) => (
          <div key={appointment.id} className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-medium text-slate-900">
                {appointment.patient.firstName} {appointment.patient.lastName}
              </p>
              <p className="text-xs text-slate-500">
                Dr. {appointment.doctor.user.firstName} {appointment.doctor.user.lastName}
                {" · "}
                {appointment.scheduledAt.toLocaleTimeString()}
              </p>
            </div>
            <span className="text-xs font-medium text-slate-500">
              {appointment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
