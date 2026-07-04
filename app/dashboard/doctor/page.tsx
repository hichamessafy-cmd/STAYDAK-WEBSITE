import { requireRole } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export default async function DoctorDashboardPage() {
  const user = await requireRole("DOCTOR");

  const doctor = await prisma.doctor.findUnique({ where: { userId: user.id } });

  const upcomingAppointments = doctor
    ? await prisma.appointment.findMany({
        where: { doctorId: doctor.id, scheduledAt: { gte: new Date() } },
        orderBy: { scheduledAt: "asc" },
        take: 10,
        include: { patient: true },
      })
    : [];

  return (
    <div>
      <h1 className="text-xl font-semibold text-slate-900">Upcoming appointments</h1>
      <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
        {upcomingAppointments.length === 0 && (
          <p className="p-4 text-sm text-slate-500">No upcoming appointments.</p>
        )}
        {upcomingAppointments.map((appointment) => (
          <div key={appointment.id} className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-medium text-slate-900">
                {appointment.patient.firstName} {appointment.patient.lastName}
              </p>
              <p className="text-xs text-slate-500">
                {appointment.scheduledAt.toLocaleString()}
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
