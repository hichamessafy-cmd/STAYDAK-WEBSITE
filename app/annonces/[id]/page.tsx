import { notFound } from "next/navigation";
import Link from "next/link";
import { properties } from "@/lib/data";
import { TrendingUp, MapPin, Maximize2, Bed, Bath, ChevronRight, ArrowLeft, Shield } from "lucide-react";

type Props = { params: Promise<{ id: string }> };

export default async function AnnoncePage({ params }: Props) {
  const { id } = await params;
  const p = properties.find((x) => x.id === id);
  if (!p) notFound();

  const similar = properties.filter((x) => x.id !== id && x.city === p.city).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#050d1a] pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-[#8a9ab5]">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">Accueil</Link>
          <ChevronRight size={14} />
          <Link href="/annonces" className="hover:text-[#c9a84c] transition-colors">Annonces</Link>
          <ChevronRight size={14} />
          <span className="text-white truncate">{p.title}</span>
        </nav>
      </div>

      {/* Images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-2 gap-3 rounded-3xl overflow-hidden aspect-[16/7]">
          <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
          <img src={p.images[1] || p.images[0]} alt={p.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-[#c9a84c]/15 text-[#c9a84c] text-xs font-semibold px-3 py-1 rounded-full border border-[#c9a84c]/30">{p.type}</span>
              {p.badge && <span className="bg-[#c9a84c] text-[#050d1a] text-xs font-bold px-3 py-1 rounded-full">{p.badge}</span>}
            </div>
            <h1 className="text-3xl font-black text-white mb-3">{p.title}</h1>
            <p className="flex items-center gap-2 text-[#8a9ab5] mb-6">
              <MapPin size={15} className="text-[#c9a84c]" />{p.location}
            </p>

            {/* Specs */}
            <div className="flex flex-wrap gap-4 py-6 border-y border-white/5 mb-8">
              {[
                { icon: Maximize2, label: `${p.surface} m²` },
                ...(p.bedrooms > 0 ? [{ icon: Bed, label: `${p.bedrooms} chambre${p.bedrooms > 1 ? "s" : ""}` }] : []),
                { icon: Bath, label: `${p.bathrooms} salle${p.bathrooms > 1 ? "s" : ""} de bain` },
                { icon: TrendingUp, label: `${p.roi}% ROI` },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-[#b0bcd4]">
                  <div className="w-9 h-9 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center">
                    <Icon size={16} className="text-[#c9a84c]" />
                  </div>
                  {label}
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Description</h2>
              <p className="text-[#8a9ab5] leading-relaxed">{p.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Point d&apos;investissement</h2>
              <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/25 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <TrendingUp size={20} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  <p className="text-[#e0c97a] font-medium leading-relaxed">{p.investmentHighlight}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-5">Prestations incluses</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {p.features.map((f) => (
                  <div key={f} className="glass rounded-xl p-3 flex items-center gap-2">
                    <span className="text-[#c9a84c] font-bold text-lg">✦</span>
                    <span className="text-sm text-[#b0bcd4]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 glass rounded-3xl p-7">
              <div className="text-3xl font-black text-white mb-1">
                {(p.price / 1_000_000).toFixed(2)} M MAD
              </div>
              <div className="text-[#8a9ab5] text-sm mb-2">{p.pricePerSqm.toLocaleString()} MAD/m²</div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={16} className="text-[#c9a84c]" />
                <span className="text-[#c9a84c] font-bold">{p.roi}% ROI brut</span>
                <span className="text-[#8a9ab5] text-sm">· {p.rentalYield}% rendement locatif</span>
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href={`https://wa.me/212614192537?text=Bonjour, je suis intéressé par le bien : ${p.title} (ID: ${p.id})`}
                  target="_blank" rel="noopener noreferrer"
                  className="gold-shimmer w-full flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#d4af37] text-[#050d1a] font-bold py-4 rounded-xl transition-colors text-base"
                >
                  Contacter via WhatsApp
                </a>
                <Link
                  href="/calculateur-roi"
                  className="w-full flex items-center justify-center gap-2 border border-[#c9a84c]/30 hover:border-[#c9a84c] text-[#c9a84c] font-semibold py-3 rounded-xl transition-all text-sm"
                >
                  Simuler mon ROI
                </Link>
              </div>

              <div className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                <Shield size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-emerald-400 text-xs leading-relaxed">Due diligence complète effectuée. Titre foncier vérifié. Aucune charge cachée.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar */}
        {similar.length > 0 && (
          <section className="pt-12 border-t border-white/5">
            <h2 className="text-2xl font-black text-white mb-8">Autres biens à {p.city}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {similar.map((s) => (
                <Link key={s.id} href={`/annonces/${s.id}`} className="group glass rounded-2xl overflow-hidden hover:border-[#c9a84c]/40 transition-all">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={s.images[0]} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute bottom-3 right-3 bg-[#c9a84c] text-[#050d1a] text-xs font-bold px-2 py-1 rounded-full">{s.roi}% ROI</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold text-sm group-hover:text-[#c9a84c] transition-colors">{s.title}</h3>
                    <p className="text-[#8a9ab5] text-xs mt-1">{(s.price / 1_000_000).toFixed(1)} M MAD</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10">
          <Link href="/annonces" className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#e0c97a] font-semibold transition-colors">
            <ArrowLeft size={16} />Retour aux annonces
          </Link>
        </div>
      </div>
    </main>
  );
}
