import Link from "next/link";
import { TrendingUp, Shield, MapPin, ArrowRight, ChevronRight, Star } from "lucide-react";
import { properties, stats, services, testimonials, cities } from "@/lib/data";
import PropertyCard from "@/components/PropertyCard";

export default function Home() {
  const featured = properties.slice(0, 4);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1800&q=85')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/50 to-[#050d1a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/60 via-transparent to-[#050d1a]/40" />

        {/* Decorative gold lines */}
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#c9a84c]/30 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#e0c97a] text-sm font-medium px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            Plateforme N°1 d&apos;investissement immobilier premium au Maroc
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Investissez dans<br />
            <span className="text-gold-gradient">l&apos;immobilier marocain</span>
          </h1>

          <p className="text-xl text-[#b0bcd4] mb-10 max-w-2xl mx-auto leading-relaxed">
            Des opportunités d&apos;exception sélectionnées par nos experts.
            Rendements entre <span className="text-[#c9a84c] font-semibold">7% et 14% net/an</span>.
            Accompagnement complet de A à Z.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/annonces"
              className="gold-shimmer flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#d4af37] text-[#050d1a] font-bold px-8 py-4 rounded-xl transition-all text-lg shadow-[0_0_40px_rgba(201,168,76,0.3)]"
            >
              Voir les opportunités
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/calculateur-roi"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#c9a84c]/40 text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg backdrop-blur-sm"
            >
              <TrendingUp size={20} className="text-[#c9a84c]" />
              Calculer mon ROI
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#8a9ab5]">
            {["Agrément CNRAI", "340+ investisseurs", "2.4 Mrd MAD gérés", "Notaire partenaire"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Shield size={14} className="text-[#c9a84c]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8a9ab5] text-xs">
          <span>Découvrir</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#c9a84c]/60 to-transparent animate-bounce" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-gradient-to-r from-[#0f2044] via-[#162455] to-[#0f2044] border-y border-[#c9a84c]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-gold-gradient mb-1">{s.value}</div>
                <div className="text-[#8a9ab5] text-xs font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section className="py-24 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Sélection exclusive</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-2">
                Opportunités à fort rendement
              </h2>
              <p className="text-[#8a9ab5]">Actifs pré-qualifiés par notre équipe d&apos;analystes</p>
            </div>
            <Link
              href="/annonces"
              className="hidden sm:flex items-center gap-2 text-[#c9a84c] hover:text-[#e0c97a] font-semibold text-sm transition-colors"
            >
              Voir toutes les annonces <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS / VILLES ── */}
      <section className="py-24 bg-[#0b1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Marchés couverts</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-3">
              Investissez dans les villes clés du Maroc
            </h2>
            <p className="text-[#8a9ab5] max-w-xl mx-auto">
              De Casablanca à Marrakech, nous couvrons les marchés immobiliers à plus fort potentiel.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.name}
                href="/annonces"
                className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-black text-xl leading-none">{city.name}</p>
                  <p className="text-[#8a9ab5] text-xs mt-1">{city.properties} biens</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <TrendingUp size={12} className="text-[#c9a84c]" />
                    <span className="text-[#c9a84c] text-xs font-bold">{city.avgRoi}% ROI moy.</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-[#c9a84c] text-[#050d1a] text-xs font-bold px-2 py-1 rounded-full">Voir →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY STAYDAK ── */}
      <section className="py-24 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Notre avantage</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-8 leading-tight">
                Pourquoi les investisseurs<br />
                <span className="text-gold-gradient">nous font confiance</span>
              </h2>
              <div className="space-y-5">
                {[
                  { title: "Accès off-market exclusif", desc: "70% de nos biens ne sont jamais publiés sur les portails grand public. Notre réseau vous donne un avantage compétitif décisif." },
                  { title: "Due diligence complète", desc: "Analyse juridique, technique et financière systématique. Zéro mauvaise surprise : nous vérifions tout avant de vous présenter un bien." },
                  { title: "Rendements vérifiés", desc: "Tous nos ROI sont calculés sur données réelles. Nous vous montrons les baux en cours, historiques de revenus et projections auditées." },
                  { title: "Gestion clés-en-main", desc: "Investissez depuis l'étranger sans contrainte. Notre équipe locale gère locataires, maintenance et comptabilité pour vous." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#c9a84c] mt-2 shrink-0" />
                    <div>
                      <h4 className="text-white font-bold mb-1">{title}</h4>
                      <p className="text-[#8a9ab5] text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85"
                alt="Investissement immobilier Maroc"
                className="rounded-3xl w-full object-cover aspect-[4/3] shadow-2xl"
              />
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 glass rounded-2xl p-5 shadow-xl max-w-[210px]">
                <div className="text-[#c9a84c] text-3xl font-black mb-1">+9.8%</div>
                <div className="text-white text-sm font-semibold">ROI moyen du portefeuille</div>
                <div className="text-[#8a9ab5] text-xs mt-1">Sur 340+ investisseurs accompagnés</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-[#c9a84c] rounded-2xl p-5 text-center shadow-xl">
                <div className="text-[#050d1a] text-2xl font-black">#1</div>
                <div className="text-[#050d1a] text-xs font-bold mt-0.5">Maroc premium</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-24 bg-[#0b1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Nos expertises</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-3">
              Un accompagnement 360°
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.id} className="glass rounded-2xl p-6 hover:border-[#c9a84c]/40 transition-all group">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-[#c9a84c] transition-colors">{s.title}</h3>
                <p className="text-[#8a9ab5] text-sm leading-relaxed mb-4">{s.desc}</p>
                <p className="text-[#c9a84c] text-xs font-medium border-t border-white/5 pt-3">{s.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#e0c97a] font-semibold transition-colors">
              Découvrir tous nos services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Témoignages</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Ce que disent nos investisseurs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="glass rounded-2xl p-7 hover:border-[#c9a84c]/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-[#c9a84c] text-[#c9a84c]" />
                    ))}
                  </div>
                  <span className="bg-[#c9a84c]/15 text-[#c9a84c] text-xs font-bold px-3 py-1 rounded-full border border-[#c9a84c]/30">
                    {t.return}
                  </span>
                </div>
                <p className="text-[#b0bcd4] text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#9a7a1e] flex items-center justify-center text-[#050d1a] font-black text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-[#8a9ab5] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-gradient-to-br from-[#0f2044] via-[#162455] to-[#0b1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/svg%3E\")", backgroundSize: "60px" }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
            Votre prochain investissement<br />
            <span className="text-gold-gradient">commence ici</span>
          </h2>
          <p className="text-[#8a9ab5] mb-10 text-lg max-w-xl mx-auto">
            Consultez gratuitement l&apos;un de nos conseillers et découvrez les opportunités adaptées à votre profil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/annonces"
              className="gold-shimmer flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#d4af37] text-[#050d1a] font-black px-8 py-4 rounded-xl transition-all text-lg shadow-[0_0_60px_rgba(201,168,76,0.4)]"
            >
              Voir les annonces <ArrowRight size={20} />
            </Link>
            <Link
              href="/proprietaires"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#c9a84c]/40 text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg"
            >
              Je suis propriétaire
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
