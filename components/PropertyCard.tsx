import Link from "next/link";
import { TrendingUp, Maximize2, Bed } from "lucide-react";
import { Property } from "@/lib/data";

export default function PropertyCard({ property }: { property: Property }) {
  const statusColor =
    property.status === "disponible"
      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
      : property.status === "réservé"
      ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
      : "bg-red-500/20 text-red-400 border-red-500/30";

  return (
    <Link href={`/annonces/${property.id}`} className="group block">
      <div className="glass rounded-2xl overflow-hidden hover:border-[#c9a84c]/40 hover:shadow-[0_8px_40px_rgba(201,168,76,0.12)] transition-all duration-400">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent opacity-70" />
          {property.badge && (
            <span className="absolute top-3 left-3 bg-[#c9a84c] text-[#050d1a] text-xs font-bold px-3 py-1 rounded-full">
              {property.badge}
            </span>
          )}
          <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full border ${statusColor}`}>
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </span>
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <span className="text-white text-lg font-black">
              {(property.price / 1_000_000).toFixed(1)} M MAD
            </span>
            <span className="flex items-center gap-1 bg-[#c9a84c] text-[#050d1a] text-xs font-bold px-2.5 py-1 rounded-full">
              <TrendingUp size={11} />
              {property.roi}% ROI
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-wider mb-1">
            {property.type} · {property.city}
          </p>
          <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center gap-4 text-[#8a9ab5] text-xs mb-4">
            <span className="flex items-center gap-1">
              <Maximize2 size={12} />
              {property.surface} m²
            </span>
            {property.bedrooms > 0 && (
              <span className="flex items-center gap-1">
                <Bed size={12} />
                {property.bedrooms} ch.
              </span>
            )}
            <span className="ml-auto text-[#c9a84c] font-semibold">
              {property.pricePerSqm.toLocaleString()} MAD/m²
            </span>
          </div>
          <p className="text-[#8a9ab5] text-xs leading-relaxed line-clamp-2 border-t border-white/5 pt-3">
            {property.investmentHighlight}
          </p>
        </div>
      </div>
    </Link>
  );
}
