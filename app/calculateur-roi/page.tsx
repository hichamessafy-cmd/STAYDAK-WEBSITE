"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";

export default function CalculateurROI() {
  const [prix, setPrix] = useState(2000000);
  const [loyer, setLoyer] = useState(12000);
  const [charges, setCharges] = useState(15);
  const [vacance, setVacance] = useState(5);
  const [apport, setApport] = useState(30);

  const loyerAnnuel = loyer * 12;
  const chargesAnnuelles = loyerAnnuel * (charges / 100);
  const vacanceAnnuelle = loyerAnnuel * (vacance / 100);
  const revenuNet = loyerAnnuel - chargesAnnuelles - vacanceAnnuelle;
  const roiBrut = ((loyerAnnuel / prix) * 100).toFixed(2);
  const roiNet = ((revenuNet / prix) * 100).toFixed(2);
  const apportEuros = prix * (apport / 100);
  const cashOnCash = ((revenuNet / apportEuros) * 100).toFixed(2);
  const payback = (prix / revenuNet).toFixed(1);

  return (
    <main className="min-h-screen bg-[#050d1a] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Outil exclusif</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Calculateur de <span className="text-gold-gradient">Rendement</span>
          </h1>
          <p className="text-[#8a9ab5] max-w-xl mx-auto text-lg">
            Simulez en temps réel le rendement locatif et le ROI de votre investissement immobilier au Maroc.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="glass rounded-3xl p-8 space-y-7">
            <h2 className="text-white font-bold text-lg border-b border-white/5 pb-4">Paramètres du bien</h2>

            {[
              { label: "Prix d'acquisition (MAD)", value: prix, setter: setPrix, min: 500000, max: 20000000, step: 50000, format: (v: number) => `${(v / 1_000_000).toFixed(2)} M MAD` },
              { label: "Loyer mensuel estimé (MAD)", value: loyer, setter: setLoyer, min: 2000, max: 100000, step: 500, format: (v: number) => `${v.toLocaleString()} MAD/mois` },
            ].map(({ label, value, setter, min, max, step, format }) => (
              <div key={label}>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-[#8a9ab5]">{label}</label>
                  <span className="text-[#c9a84c] font-bold text-sm">{format(value)}</span>
                </div>
                <input
                  type="range" min={min} max={max} step={step} value={value}
                  onChange={(e) => setter(Number(e.target.value))}
                  className="w-full accent-[#c9a84c]"
                />
              </div>
            ))}

            {[
              { label: "Charges et frais de gestion (%)", value: charges, setter: setCharges, min: 0, max: 30, step: 1 },
              { label: "Taux de vacance locative (%)", value: vacance, setter: setVacance, min: 0, max: 20, step: 1 },
              { label: "Apport personnel (%)", value: apport, setter: setApport, min: 10, max: 100, step: 5 },
            ].map(({ label, value, setter, min, max, step }) => (
              <div key={label}>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-[#8a9ab5]">{label}</label>
                  <span className="text-[#c9a84c] font-bold text-sm">{value}%</span>
                </div>
                <input
                  type="range" min={min} max={max} step={step} value={value}
                  onChange={(e) => setter(Number(e.target.value))}
                  className="w-full accent-[#c9a84c]"
                />
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="space-y-5">
            <div className="glass rounded-3xl p-8">
              <h2 className="text-white font-bold text-lg border-b border-white/5 pb-4 mb-6">Résultats de la simulation</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "ROI Brut", value: `${roiBrut}%`, sub: "Avant charges", highlight: true },
                  { label: "ROI Net", value: `${roiNet}%`, sub: "Après charges", highlight: true },
                  { label: "Cash-on-Cash", value: `${cashOnCash}%`, sub: "Sur apport", highlight: false },
                  { label: "Retour sur invest.", value: `${payback} ans`, sub: "Payback period", highlight: false },
                ].map(({ label, value, sub, highlight }) => (
                  <div key={label} className={`rounded-2xl p-5 ${highlight ? "bg-[#c9a84c]/15 border border-[#c9a84c]/30" : "bg-white/5 border border-white/5"}`}>
                    <div className={`text-2xl font-black mb-1 ${highlight ? "text-[#c9a84c]" : "text-white"}`}>{value}</div>
                    <div className={`text-xs font-semibold ${highlight ? "text-[#e0c97a]" : "text-white"}`}>{label}</div>
                    <div className="text-[#8a9ab5] text-xs mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detail */}
            <div className="glass rounded-3xl p-6">
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Détail annuel</h3>
              <div className="space-y-2.5">
                {[
                  { label: "Loyers annuels bruts", value: `${loyerAnnuel.toLocaleString()} MAD`, positive: true },
                  { label: "Charges & gestion", value: `− ${chargesAnnuelles.toLocaleString()} MAD`, positive: false },
                  { label: "Vacance locative", value: `− ${vacanceAnnuelle.toLocaleString()} MAD`, positive: false },
                  { label: "Revenu net annuel", value: `${revenuNet.toLocaleString()} MAD`, bold: true },
                ].map(({ label, value, positive, bold }) => (
                  <div key={label} className={`flex justify-between text-sm py-2 border-b border-white/5 last:border-0 ${bold ? "font-bold" : ""}`}>
                    <span className="text-[#8a9ab5]">{label}</span>
                    <span className={bold ? "text-[#c9a84c]" : positive === false ? "text-red-400" : "text-emerald-400"}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="glass rounded-2xl p-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-white font-bold text-sm">Besoin d&apos;un bien correspondant ?</p>
                <p className="text-[#8a9ab5] text-xs mt-0.5">Nos conseillers trouvent l&apos;actif optimal.</p>
              </div>
              <Link href="/annonces" className="shrink-0 flex items-center gap-1.5 bg-[#c9a84c] text-[#050d1a] font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-[#d4af37] transition-colors">
                Voir les biens <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* ROI benchmark */}
        <div className="mt-10 glass rounded-2xl p-6">
          <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
            <TrendingUp size={16} />Benchmark ROI par type de bien au Maroc
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { type: "Appartement", min: 5.5, max: 8.5 },
              { type: "Riad / Boutique", min: 10, max: 15 },
              { type: "Villa Premium", min: 7, max: 12 },
              { type: "Bureau CBD", min: 6, max: 9 },
            ].map(({ type, min, max }) => (
              <div key={type} className="bg-white/5 rounded-xl p-4">
                <p className="text-[#8a9ab5] text-xs mb-2">{type}</p>
                <p className="text-white font-black text-xl">{min}–{max}%</p>
                <p className="text-[#8a9ab5] text-xs">ROI net/an</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
