import { requireRole } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboardPage() {
  const user = await requireRole("SUPER_ADMIN", "CLINIC_ADMIN");

  const [doctorCount, secretaryCount, patientCount, appointmentCount] =
    user.clinicId
      ? await Promise.all([
          prisma.doctor.count({ where: { clinicId: user.clinicId } }),
          prisma.secretary.count({ where: { clinicId: user.clinicId } }),
          prisma.patient.count({ where: { clinicId: user.clinicId } }),
          prisma.appointment.count({ where: { clinicId: user.clinicId } }),
        ])
      : [0, 0, 0, 0];

  const stats = [
    { label: "Doctors", value: doctorCount },
    { label: "Secretaries", value: secretaryCount },
    { label: "Patients", value: patientCount },
    { label: "Appointments", value: appointmentCount },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold text-slate-900">Clinic overview</h1>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-slate-200 bg-white p-4"
          >
            <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
