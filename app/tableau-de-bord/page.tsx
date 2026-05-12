"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, MapPin, ArrowRight, ArrowUpRight, Bell, BarChart3, Wallet, Building2 } from "lucide-react";

const portfolio = [
  { id: "1", title: "Penthouse Anfa", city: "Casablanca", type: "Penthouse", price: 4800000, roi: 9.2, monthlyIncome: 36800, status: "loué", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80" },
  { id: "4", title: "Riad Batha", city: "Fès", type: "Riad", price: 1800000, roi: 14.2, monthlyIncome: 21300, status: "loué", img: "https://images.unsplash.com/photo-1539650116574-75c0c6d73d0e?w=400&q=80" },
  { id: "3", title: "Appartement Marina", city: "Casablanca", type: "Appartement", price: 2350000, roi: 8.1, monthlyIncome: 15860, status: "vacant", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80" },
];

const notifications = [
  { type: "income", msg: "Loyer reçu — Riad Batha (21 300 MAD)", time: "Il y a 2h", color: "emerald" },
  { type: "alert", msg: "Opportunité : Duplex Agadir — ROI 10.3%", time: "Il y a 5h", color: "gold" },
  { type: "report", msg: "Rapport mensuel avril disponible", time: "Hier", color: "blue" },
];

const monthlyData = [
  { month: "Nov", income: 51200 },
  { month: "Déc", income: 57000 },
  { month: "Jan", income: 53800 },
  { month: "Fév", income: 57100 },
  { month: "Mar", income: 59500 },
  { month: "Avr", income: 73960 },
];

const maxIncome = Math.max(...monthlyData.map((d) => d.income));

export default function TableauDeBordPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "portfolio" | "alerts">("overview");

  const totalInvested = portfolio.reduce((s, p) => s + p.price, 0);
  const monthlyIncome = portfolio.reduce((s, p) => s + p.monthlyIncome, 0);
  const avgRoi = (portfolio.reduce((s, p) => s + p.roi, 0) / portfolio.length).toFixed(1);

  return (
    <main className="min-h-screen bg-[#050d1a] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Espace investisseur</span>
            <h1 className="text-3xl font-black text-white mt-1">Tableau de bord</h1>
          </div>
          <div className="relative">
            <button className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:border-[#c9a84c]/40 transition-all">
              <Bell size={18} className="text-[#8a9ab5]" />
            </button>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c9a84c] rounded-full text-[10px] font-bold text-[#050d1a] flex items-center justify-center">3</span>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Building2, label: "Biens en portefeuille", value: portfolio.length.toString(), sub: `${portfolio.filter((p) => p.status === "loué").length} loués`, color: "gold" },
            { icon: Wallet, label: "Capital investi", value: `${(totalInvested / 1_000_000).toFixed(1)} M MAD`, sub: "Valeur d'acquisition", color: "gold" },
            { icon: TrendingUp, label: "Revenu mensuel net", value: `${monthlyIncome.toLocaleString()} MAD`, sub: "+12% vs mois dernier", color: "emerald" },
            { icon: BarChart3, label: "ROI moyen pondéré", value: `${avgRoi}%`, sub: "Net annuel", color: "gold" },
          ].map(({ icon: Icon, label, value, sub, color }) => (
            <div key={label} className="glass rounded-2xl p-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color === "emerald" ? "bg-emerald-500/15" : "bg-[#c9a84c]/15"}`}>
                <Icon size={18} className={color === "emerald" ? "text-emerald-400" : "text-[#c9a84c]"} />
              </div>
              <div className={`text-2xl font-black mb-0.5 ${color === "emerald" ? "text-emerald-400" : "text-[#c9a84c]"}`}>{value}</div>
              <div className="text-white text-xs font-semibold">{label}</div>
              <div className="text-[#8a9ab5] text-xs mt-0.5">{sub}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(["overview", "portfolio", "alerts"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                activeTab === tab
                  ? "bg-[#c9a84c]/15 text-[#c9a84c] border-[#c9a84c]/40"
                  : "bg-white/5 text-[#8a9ab5] border-white/10 hover:text-white"
              }`}
            >
              {{ overview: "Vue générale", portfolio: "Mon portefeuille", alerts: "Alertes" }[tab]}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart */}
            <div className="lg:col-span-2 glass rounded-3xl p-7">
              <h2 className="text-white font-bold text-base mb-6">Revenus locatifs mensuels (MAD)</h2>
              <div className="flex items-end gap-3 h-40">
                {monthlyData.map(({ month, income }) => (
                  <div key={month} className="flex-1 flex flex-col items-center gap-1.5">
                    <span className="text-[#8a9ab5] text-[10px]">{(income / 1000).toFixed(0)}k</span>
                    <div
                      className="w-full rounded-t-lg bg-[#c9a84c]/60 hover:bg-[#c9a84c] transition-colors"
                      style={{ height: `${(income / maxIncome) * 100}%` }}
                    />
                    <span className="text-[#8a9ab5] text-[10px]">{month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="glass rounded-3xl p-6">
              <h2 className="text-white font-bold text-base mb-5">Dernières activités</h2>
              <div className="space-y-4">
                {notifications.map(({ msg, time, color }) => (
                  <div key={msg} className={`flex items-start gap-3 p-3 rounded-xl ${
                    color === "emerald" ? "bg-emerald-500/10" : color === "gold" ? "bg-[#c9a84c]/10" : "bg-blue-500/10"
                  }`}>
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                      color === "emerald" ? "bg-emerald-400" : color === "gold" ? "bg-[#c9a84c]" : "bg-blue-400"
                    }`} />
                    <div>
                      <p className="text-white text-xs font-medium leading-relaxed">{msg}</p>
                      <p className="text-[#8a9ab5] text-[10px] mt-1">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/annonces" className="mt-5 flex items-center gap-1.5 text-[#c9a84c] text-sm font-semibold hover:text-[#e0c97a] transition-colors">
                Voir les nouvelles opportunités <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}

        {activeTab === "portfolio" && (
          <div className="space-y-4">
            {portfolio.map((p) => (
              <div key={p.id} className="glass rounded-2xl p-5 flex items-center gap-5">
                <img src={p.img} alt={p.title} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-bold text-sm">{p.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p.status === "loué" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                      {p.status}
                    </span>
                  </div>
                  <p className="text-[#8a9ab5] text-xs flex items-center gap-1">
                    <MapPin size={11} className="text-[#c9a84c]" /> {p.city} · {p.type}
                  </p>
                </div>
                <div className="hidden sm:block text-right">
                  <div className="text-white font-bold text-sm">{(p.price / 1_000_000).toFixed(2)} M MAD</div>
                  <div className="text-[#8a9ab5] text-xs">Prix d&apos;acquisition</div>
                </div>
                <div className="text-right">
                  <div className="text-[#c9a84c] font-black text-lg">{p.roi}%</div>
                  <div className="text-[#8a9ab5] text-xs">ROI net</div>
                </div>
                <div className="hidden md:block text-right">
                  <div className="text-emerald-400 font-bold text-sm">{p.monthlyIncome.toLocaleString()} MAD</div>
                  <div className="text-[#8a9ab5] text-xs">/mois</div>
                </div>
                <Link href={`/annonces/${p.id}`} className="shrink-0 w-9 h-9 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center hover:bg-[#c9a84c]/25 transition-all">
                  <ArrowUpRight size={14} className="text-[#c9a84c]" />
                </Link>
              </div>
            ))}
            <div className="glass rounded-2xl p-5 border border-dashed border-[#c9a84c]/20 flex items-center justify-center gap-3">
              <Link href="/annonces" className="flex items-center gap-2 text-[#c9a84c] font-semibold text-sm hover:text-[#e0c97a] transition-colors">
                <span className="text-xl font-black">+</span> Ajouter un bien à mon portefeuille
              </Link>
            </div>
          </div>
        )}

        {activeTab === "alerts" && (
          <div className="space-y-4">
            {notifications.concat([
              { type: "report", msg: "Taux de vacance Casablanca en baisse : −2.1 pts ce trimestre", time: "Il y a 2 jours", color: "blue" },
              { type: "income", msg: "Versement loyer Penthouse Anfa reçu (36 800 MAD)", time: "Il y a 3 jours", color: "emerald" },
            ]).map(({ msg, time, color }) => (
              <div key={msg} className={`glass rounded-2xl p-5 flex items-start gap-4 border ${
                color === "emerald" ? "border-emerald-500/20" : color === "gold" ? "border-[#c9a84c]/25" : "border-blue-500/20"
              }`}>
                <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${
                  color === "emerald" ? "bg-emerald-400" : color === "gold" ? "bg-[#c9a84c]" : "bg-blue-400"
                }`} />
                <div>
                  <p className="text-white text-sm font-medium">{msg}</p>
                  <p className="text-[#8a9ab5] text-xs mt-1">{time}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
