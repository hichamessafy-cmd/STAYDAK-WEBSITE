import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import { Property } from "@/lib/data";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-200 mb-3">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-semibold text-[#1a1a2e] shadow">
          {property.type}
        </div>
        {property.host.superhost && (
          <div className="absolute top-3 left-3 bg-[#e8563a] text-white text-xs font-semibold px-2 py-1 rounded-full">
            Super-hôte
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-[#1a1a2e] text-sm leading-snug line-clamp-2 group-hover:text-[#e8563a] transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star size={12} className="fill-[#e8563a] text-[#e8563a]" />
            <span className="text-xs font-medium">{property.rating}</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <MapPin size={11} />
          {property.location}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-bold text-[#1a1a2e]">{property.price} €</span> / nuit
        </p>
      </div>
    </Link>
  );
}
