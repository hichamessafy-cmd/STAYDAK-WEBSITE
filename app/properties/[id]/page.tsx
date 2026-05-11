import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, MapPin, Users, Bed, Bath, Wifi, ArrowLeft, Shield, ChevronRight } from "lucide-react";
import { properties } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

const AMENITY_ICONS: Record<string, string> = {
  "Piscine privée": "🏊",
  "Wi-Fi": "📶",
  "Wi-Fi haut débit": "📶",
  "Climatisation": "❄️",
  "Petit-déjeuner": "🥐",
  "Petit-déjeuner berbère": "🫖",
  "Terrasse rooftop": "🌅",
  "Terrasse": "🌿",
  "Parking": "🚗",
  "Parking souterrain": "🚗",
  "Vue mer": "🌊",
  "Vue montagne": "🏔️",
  "Piscine": "🏊",
  "Cuisine équipée": "🍳",
  "BBQ": "🔥",
  "Hammam": "♨️",
  "Hammam privé": "♨️",
  "Jardin": "🌳",
  "Randonnées guidées": "🥾",
  "Feu de cheminée": "🔥",
  "Tour guidé médina": "🗺️",
  "Service de thé": "🫖",
  "Salle de sport": "💪",
  "Accès direct plage": "🏖️",
  "Location de surf": "🏄",
};

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) notFound();

  const similar = properties.filter((p) => p.id !== id && p.city === property.city).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#e8563a] transition-colors">Accueil</Link>
          <ChevronRight size={14} />
          <Link href="/properties" className="hover:text-[#e8563a] transition-colors">Logements</Link>
          <ChevronRight size={14} />
          <span className="text-[#1a1a2e] font-medium truncate">{property.title}</span>
        </nav>
      </div>

      {/* Images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-2 gap-3 rounded-3xl overflow-hidden aspect-[16/7]">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <img
            src={property.images[1] || property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Title */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-[#e8563a]/10 text-[#e8563a] text-xs font-semibold px-3 py-1 rounded-full">
                  {property.type}
                </span>
                {property.host.superhost && (
                  <span className="bg-amber-50 text-amber-600 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
                    ⭐ Super-hôte
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-[#1a1a2e] mb-3">{property.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-[#e8563a]" />
                  {property.location}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={14} className="fill-[#f5a623] text-[#f5a623]" />
                  <span className="font-semibold">{property.rating}</span>
                  <span className="text-gray-400">({property.reviews} avis)</span>
                </span>
              </div>
            </div>

            {/* Specs */}
            <div className="flex flex-wrap gap-4 py-6 border-y border-gray-100 mb-8">
              {[
                { icon: Users, label: `${property.guests} voyageurs` },
                { icon: Bed, label: `${property.beds} chambre${property.beds > 1 ? "s" : ""}` },
                { icon: Bath, label: `${property.baths} salle${property.baths > 1 ? "s" : ""} de bain` },
                { icon: Wifi, label: "Wi-Fi inclus" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Icon size={16} className="text-[#e8563a]" />
                  </div>
                  {label}
                </div>
              ))}
            </div>

            {/* Host */}
            <div className="flex items-center gap-4 mb-8 p-5 bg-[#f7f0e6] rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-[#e8563a] flex items-center justify-center text-white text-xl font-bold shrink-0">
                {property.host.avatar}
              </div>
              <div>
                <p className="text-sm text-gray-500">Hôte</p>
                <p className="font-bold text-[#1a1a2e]">{property.host.name}</p>
                {property.host.superhost && (
                  <p className="text-xs text-amber-600 font-medium">⭐ Super-hôte certifié StayDak</p>
                )}
              </div>
              <Shield size={20} className="ml-auto text-[#2d6a4f]" />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">À propos du logement</h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-5">Ce que propose ce logement</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-[#e8563a]/30 hover:bg-[#e8563a]/5 transition-all">
                    <span className="text-xl">{AMENITY_ICONS[amenity] || "✓"}</span>
                    <span className="text-sm text-gray-700 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-3xl border border-gray-200 shadow-xl p-7">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-black text-[#1a1a2e]">{property.price} €</span>
                <span className="text-gray-500 text-sm">/ nuit</span>
              </div>
              <div className="flex items-center gap-1 mb-6">
                <Star size={13} className="fill-[#f5a623] text-[#f5a623]" />
                <span className="text-sm font-semibold">{property.rating}</span>
                <span className="text-xs text-gray-400">({property.reviews} avis)</span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="border border-gray-200 rounded-xl p-3">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">Arrivée</p>
                  <input type="date" className="text-sm text-gray-700 outline-none w-full" />
                </div>
                <div className="border border-gray-200 rounded-xl p-3">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">Départ</p>
                  <input type="date" className="text-sm text-gray-700 outline-none w-full" />
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-3 mb-5">
                <p className="text-xs font-bold text-gray-500 uppercase mb-1">Voyageurs</p>
                <select className="text-sm text-gray-700 outline-none w-full bg-transparent">
                  {Array.from({ length: property.guests }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n} voyageur{n > 1 ? "s" : ""}</option>
                  ))}
                </select>
              </div>

              <button className="w-full bg-[#e8563a] hover:bg-[#c94428] text-white font-bold py-4 rounded-2xl transition-colors text-lg mb-4">
                Réserver maintenant
              </button>
              <p className="text-center text-xs text-gray-400 mb-6">Vous ne serez pas débité pour l&apos;instant</p>

              <div className="space-y-3 border-t border-gray-100 pt-5">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{property.price} € × 3 nuits</span>
                  <span>{property.price * 3} €</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Frais de service StayDak</span>
                  <span>{Math.round(property.price * 3 * 0.12)} €</span>
                </div>
                <div className="flex justify-between font-bold text-[#1a1a2e] border-t border-gray-100 pt-3">
                  <span>Total</span>
                  <span>{property.price * 3 + Math.round(property.price * 3 * 0.12)} €</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-5 p-3 bg-[#2d6a4f]/10 rounded-xl">
                <Shield size={16} className="text-[#2d6a4f] shrink-0" />
                <p className="text-xs text-[#2d6a4f] font-medium">Réservation 100% sécurisée et remboursable sous 48h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar properties */}
        {similar.length > 0 && (
          <section className="py-16 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8">
              D&apos;autres logements à {property.city}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map((p) => (
                <Link key={p.id} href={`/properties/${p.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                      {p.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#1a1a2e] text-sm mb-1 group-hover:text-[#e8563a] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    <span className="font-bold text-[#1a1a2e]">{p.price} €</span> / nuit · ⭐ {p.rating}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="pb-10">
          <Link href="/properties" className="inline-flex items-center gap-2 text-[#e8563a] font-semibold hover:underline">
            <ArrowLeft size={16} />
            Retour aux logements
          </Link>
        </div>
      </div>
    </main>
  );
}
