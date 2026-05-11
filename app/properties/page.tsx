"use client";

import { useState } from "react";
import { SlidersHorizontal, MapPin, X } from "lucide-react";
import { properties } from "@/lib/data";
import PropertyCard from "@/components/PropertyCard";

const TYPES = ["Tous", "Riad", "Villa", "Appartement", "Kasbah", "Bungalow"];
const CITIES = ["Toutes", "Marrakech", "Essaouira", "Casablanca", "Fès", "Agadir", "Atlas"];

export default function PropertiesPage() {
  const [selectedType, setSelectedType] = useState("Tous");
  const [selectedCity, setSelectedCity] = useState("Toutes");
  const [maxPrice, setMaxPrice] = useState(200);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = properties.filter((p) => {
    const typeOk = selectedType === "Tous" || p.type === selectedType;
    const cityOk = selectedCity === "Toutes" || p.city === selectedCity;
    const priceOk = p.price <= maxPrice;
    return typeOk && cityOk && priceOk;
  });

  const resetFilters = () => {
    setSelectedType("Tous");
    setSelectedCity("Toutes");
    setMaxPrice(200);
  };

  const hasActiveFilters = selectedType !== "Tous" || selectedCity !== "Toutes" || maxPrice < 200;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-[#1a1a2e] mb-2">Tous nos logements</h1>
          <p className="text-gray-500 flex items-center gap-2">
            <MapPin size={16} className="text-[#e8563a]" />
            Maroc · {filtered.length} logement{filtered.length > 1 ? "s" : ""} disponible{filtered.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Type filter chips */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          {TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                selectedType === type
                  ? "bg-[#e8563a] text-white border-[#e8563a]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#e8563a] hover:text-[#e8563a]"
              }`}
            >
              {type}
            </button>
          ))}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              showFilters ? "bg-[#1a1a2e] text-white border-[#1a1a2e]" : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            }`}
          >
            <SlidersHorizontal size={15} />
            Filtres
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-[#e8563a] inline-block" />
            )}
          </button>
        </div>

        {/* Expanded filters */}
        {showFilters && (
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* City */}
            <div>
              <label className="block text-sm font-semibold text-[#1a1a2e] mb-3">Ville</label>
              <div className="flex flex-wrap gap-2">
                {CITIES.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      selectedCity === city
                        ? "bg-[#e8563a] text-white border-[#e8563a]"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:border-[#e8563a]"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-[#1a1a2e] mb-3">
                Prix max : <span className="text-[#e8563a]">{maxPrice} €/nuit</span>
              </label>
              <input
                type="range"
                min={30}
                max={200}
                step={5}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#e8563a]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>30 €</span>
                <span>200 €</span>
              </div>
            </div>

            {/* Reset */}
            <div className="flex items-end">
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#e8563a] transition-colors"
                >
                  <X size={14} />
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          </div>
        )}

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🏡</p>
            <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Aucun logement trouvé</h3>
            <p className="text-gray-500 mb-6">Essayez d&apos;élargir vos critères de recherche.</p>
            <button
              onClick={resetFilters}
              className="bg-[#e8563a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c94428] transition-colors"
            >
              Voir tous les logements
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
