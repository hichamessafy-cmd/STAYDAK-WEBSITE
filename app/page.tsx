import Link from "next/link";
import { Search, MapPin, Star, Shield, Heart, Zap } from "lucide-react";
import { properties, destinations, testimonials } from "@/lib/data";
import PropertyCard from "@/components/PropertyCard";

export default function Home() {
  const featured = properties.filter((p) => p.featured);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-[#e8563a]/20 border border-[#e8563a]/40 text-[#f5a623] text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            ✨ +1 500 logements authentiques au Maroc
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Vivez le Maroc<br />
            <span className="text-[#e8563a]">autrement</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Riads centenaires, villas avec vue mer, kasbahs dans l&apos;Atlas…
            Des logements uniques, sélectionnés pour leur authenticité.
          </p>

          {/* Search bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-3 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-xl">
              <MapPin size={18} className="text-[#e8563a] shrink-0" />
              <input
                type="text"
                placeholder="Où souhaitez-vous séjourner ?"
                className="bg-transparent w-full text-sm text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>
            <Link
              href="/properties"
              className="flex items-center justify-center gap-2 bg-[#e8563a] hover:bg-[#c94428] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <Search size={18} />
              Rechercher
            </Link>
          </div>

          <p className="mt-5 text-gray-400 text-sm">
            Destinations populaires :{" "}
            {["Marrakech", "Essaouira", "Fès", "Agadir"].map((city, i) => (
              <span key={city}>
                <Link href="/properties" className="underline hover:text-[#e8563a] transition-colors">
                  {city}
                </Link>
                {i < 3 && " · "}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-[#f7f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Explorez nos destinations
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Du nord au sud, des côtes atlantiques aux sommets de l&apos;Atlas, le Maroc vous surprend à chaque détour.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((dest) => (
              <Link
                key={dest.city}
                href="/properties"
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-lg leading-none">{dest.city}</p>
                  <p className="text-gray-300 text-xs mt-1">{dest.count} logements</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3">
                Logements coups de cœur
              </h2>
              <p className="text-gray-600">Sélectionnés par notre équipe pour leur authenticité exceptionnelle</p>
            </div>
            <Link
              href="/properties"
              className="hidden sm:inline-flex items-center text-[#e8563a] font-semibold hover:underline text-sm"
            >
              Voir tout →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/properties"
              className="inline-block border border-[#e8563a] text-[#e8563a] font-semibold px-6 py-3 rounded-full hover:bg-[#e8563a] hover:text-white transition-colors"
            >
              Voir tous les logements
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Réserver votre logement de rêve n&apos;a jamais été aussi simple.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Search,
                step: "01",
                title: "Cherchez",
                desc: "Entrez votre destination et vos dates. Filtrez par type de logement, budget et équipements.",
                color: "#e8563a",
              },
              {
                icon: Heart,
                step: "02",
                title: "Choisissez",
                desc: "Parcourez les logements triés sur le volet, lisez les avis vérifiés et contactez l'hôte.",
                color: "#f5a623",
              },
              {
                icon: Zap,
                step: "03",
                title: "Profitez",
                desc: "Réservez en quelques clics, recevez votre confirmation instantanée et partez l'esprit léger.",
                color: "#2d6a4f",
              },
            ].map(({ icon: Icon, step, title, desc, color }) => (
              <div key={step} className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${color}20`, border: `2px solid ${color}40` }}
                >
                  <Icon size={28} style={{ color }} />
                </div>
                <div className="text-4xl font-black mb-2" style={{ color: `${color}30` }}>
                  {step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why StayDak */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#e8563a] font-semibold text-sm uppercase tracking-wider">Notre promesse</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3 mb-6">
                Pourquoi choisir<br />StayDak ?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Logements vérifiés",
                    desc: "Chaque propriété est inspectée par notre équipe locale. Photos authentiques, descriptions précises, garanties.",
                  },
                  {
                    icon: Star,
                    title: "Hôtes de confiance",
                    desc: "Nos hôtes sont sélectionnés pour leur hospitalité. Le label Super-hôte récompense les meilleurs.",
                  },
                  {
                    icon: Heart,
                    title: "Expériences uniques",
                    desc: "Au-delà du logement : cours de cuisine, randonnées guidées, hammams — tout pour un séjour inoubliable.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#e8563a]/10 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-[#e8563a]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a1a2e] mb-1">{title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                alt="Riad marocain"
                className="rounded-3xl w-full object-cover aspect-[4/3] shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-[#f5a623] text-[#f5a623]" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 font-medium">4.9/5 de moyenne sur +8 000 avis vérifiés</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-[#e8563a] text-white rounded-2xl p-5 text-center shadow-xl">
                <div className="text-3xl font-black">1500+</div>
                <div className="text-xs font-medium mt-1">logements au Maroc</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f7f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Ils ont adoré leur séjour
            </h2>
            <p className="text-gray-600">Des voyageurs du monde entier font confiance à StayDak</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} className="fill-[#f5a623] text-[#f5a623]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e8563a] flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1a1a2e]">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#e8563a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Prêt à vivre une expérience inoubliable ?
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Plus de 1 500 logements vous attendent. Votre coup de cœur est peut-être à deux clics.
          </p>
          <Link
            href="/properties"
            className="inline-block bg-white text-[#e8563a] font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg text-lg"
          >
            Découvrir les logements
          </Link>
        </div>
      </section>
    </main>
  );
}
