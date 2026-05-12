"use client";

import { useState } from "react";
import { SlidersHorizontal, MapPin, X, TrendingUp } from "lucide-react";
import { properties } from "@/lib/data";
import PropertyCard from "@/components/PropertyCard";

const TYPES = ["Tous", "Appartement", "Penthouse", "Villa", "Riad", "Duplex", "Bureau"];
const CITIES = ["Toutes", "Casablanca", "Marrakech", "Fès", "Agadir", "Rabat"];

export default function AnnoncesPage() {
  const [type, setType] = useState("Tous");
  const [city, setCity] = useState("Toutes");
  const [minRoi, setMinRoi] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = properties.filter((p) => {
    const typeOk = type === "Tous" || p.type === type;
    const cityOk = city === "Toutes" || p.city === city;
    const roiOk = p.roi >= minRoi;
    return typeOk && cityOk && roiOk;
  });

  const reset = () => { setType("Tous"); setCity("Toutes"); setMinRoi(0); };
  const hasFilters = type !== "Tous" || city !== "Toutes" || minRoi > 0;

  return (
    <main className="min-h-screen bg-[#050d1a] pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0f2044] to-[#0b1628] border-b border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Opportunités</span>
          <h1 className="text-3xl md:text-4xl font-black text-white mt-2 mb-2">Toutes nos annonces</h1>
          <p className="text-[#8a9ab5] flex items-center gap-2">
            <MapPin size={15} className="text-[#c9a84c]" />
            Maroc · <span className="text-white font-semibold">{filtered.length}</span> bien{filtered.length > 1 ? "s" : ""} disponible{filtered.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter chips */}
        <div className="flex items-center gap-3 overflow-x-auto pb-3 mb-4">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                type === t
                  ? "bg-[#c9a84c] text-[#050d1a] border-[#c9a84c] font-bold"
                  : "bg-white/5 text-[#8a9ab5] border-white/10 hover:border-[#c9a84c]/40 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              showFilters ? "bg-[#c9a84c]/15 text-[#c9a84c] border-[#c9a84c]/40" : "bg-white/5 text-[#8a9ab5] border-white/10"
            }`}
          >
            <SlidersHorizontal size={14} />
            Filtres avancés
            {hasFilters && <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />}
          </button>
        </div>

        {/* Advanced filters */}
        {showFilters && (
          <div className="glass rounded-2xl p-6 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wider block mb-3">Ville</label>
              <div className="flex flex-wrap gap-2">
                {CITIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCity(c)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      city === c ? "bg-[#c9a84c] text-[#050d1a] border-[#c9a84c]" : "bg-white/5 text-[#8a9ab5] border-white/10 hover:border-[#c9a84c]/40"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wider block mb-3">
                ROI minimum : <span className="text-white">{minRoi}%</span>
              </label>
              <input
                type="range" min={0} max={14} step={0.5} value={minRoi}
                onChange={(e) => setMinRoi(Number(e.target.value))}
                className="w-full accent-[#c9a84c]"
              />
              <div className="flex justify-between text-xs text-[#8a9ab5] mt-1"><span>0%</span><span>14%</span></div>
            </div>
            <div className="flex items-end">
              {hasFilters && (
                <button onClick={reset} className="flex items-center gap-2 text-sm text-[#8a9ab5] hover:text-[#c9a84c] transition-colors">
                  <X size={14} />Réinitialiser
                </button>
              )}
            </div>
          </div>
        )}

        {/* ROI highlight bar */}
        {filtered.length > 0 && (
          <div className="flex items-center gap-3 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-xl px-5 py-3 mb-6">
            <TrendingUp size={16} className="text-[#c9a84c]" />
            <span className="text-sm text-[#b0bcd4]">
              ROI moyen sur cette sélection :{" "}
              <span className="text-[#c9a84c] font-bold">
                {(filtered.reduce((sum, p) => sum + p.roi, 0) / filtered.length).toFixed(1)}% net/an
              </span>
            </span>
          </div>
        )}

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-5xl mb-4">🔍</p>
            <h3 className="text-xl font-bold text-white mb-2">Aucun bien trouvé</h3>
            <p className="text-[#8a9ab5] mb-6">Élargissez vos critères de recherche.</p>
            <button onClick={reset} className="bg-[#c9a84c] text-[#050d1a] px-6 py-3 rounded-xl font-bold hover:bg-[#d4af37] transition-colors">
              Voir tous les biens
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => <PropertyCard key={p.id} property={p} />)}
          </div>
        )}
      </div>
    </main>
  );
}
