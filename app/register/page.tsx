"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerClinicAction, type RegisterFormState } from "@/lib/actions/auth";

const initialState: RegisterFormState = {};

function Field({
  id,
  label,
  type = "text",
  autoComplete,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  error?: string[];
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required
        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error[0]}</p>}
    </div>
  );
}

export default function RegisterClinicPage() {
  const [state, formAction, pending] = useActionState(
    registerClinicAction,
    initialState
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-24">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-2xl font-semibold text-slate-900">Register your clinic</h1>
        <p className="mt-1 text-sm text-slate-500">
          Creates your clinic workspace and an administrator account.
        </p>

        <form action={formAction} className="mt-6 space-y-4">
          <Field id="clinicName" label="Clinic name" error={state.errors?.clinicName} />
          <Field
            id="clinicSlug"
            label="Clinic URL slug"
            error={state.errors?.clinicSlug}
          />
          <div className="grid grid-cols-2 gap-4">
            <Field
              id="adminFirstName"
              label="First name"
              autoComplete="given-name"
              error={state.errors?.adminFirstName}
            />
            <Field
              id="adminLastName"
              label="Last name"
              autoComplete="family-name"
              error={state.errors?.adminLastName}
            />
          </div>
          <Field
            id="adminEmail"
            label="Admin email"
            type="email"
            autoComplete="email"
            error={state.errors?.adminEmail}
          />
          <Field
            id="adminPassword"
            label="Password"
            type="password"
            autoComplete="new-password"
            error={state.errors?.adminPassword}
          />
          <Field
            id="confirmPassword"
            label="Confirm password"
            type="password"
            autoComplete="new-password"
            error={state.errors?.confirmPassword}
          />

          {state.message && (
            <p className="text-sm text-red-600" role="alert">
              {state.message}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-md bg-slate-900 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {pending ? "Creating clinic..." : "Create clinic"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-slate-900 underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
