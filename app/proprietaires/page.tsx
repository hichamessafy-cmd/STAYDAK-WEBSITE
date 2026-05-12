import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Users, Star } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Maximisez votre rendement",
    desc: "Notre réseau d'investisseurs qualifiés garantit une mise en location rapide et des loyers au prix du marché — voire supérieurs.",
  },
  {
    icon: Shield,
    title: "Zéro souci de gestion",
    desc: "StayDak prend en charge la totalité de la relation locataire : recherche, état des lieux, encaissement, incidents.",
  },
  {
    icon: Users,
    title: "Accès à notre base d'acheteurs",
    desc: "Nous disposons d'une base de plus de 320 investisseurs actifs prêts à acquérir des actifs performants dès la mise en vente.",
  },
  {
    icon: Star,
    title: "Valorisation premium",
    desc: "Notre mise en scène photo professionnelle et nos analyses ROI exclusives positionnent votre bien au segment le plus premium du marché.",
  },
];

const plans = [
  {
    name: "Mise en Vente",
    price: "2.5% du prix",
    sub: "Commission à la vente uniquement",
    features: [
      "Annonce premium sur notre plateforme",
      "Reportage photo professionnel",
      "Étude de valorisation incluse",
      "Accès à notre base d'acheteurs qualifiés",
      "Accompagnement notarial complet",
    ],
    cta: "Mettre mon bien en vente",
    highlight: false,
  },
  {
    name: "Gestion Locative",
    price: "8% des loyers",
    sub: "Mensuel, sans engagement",
    features: [
      "Mise en location rapide garantie",
      "Sélection rigoureuse des locataires",
      "Encaissement & reversement mensuel",
      "Gestion des réparations & urgences",
      "Reporting détaillé chaque mois",
      "Assurance loyers impayés disponible",
    ],
    cta: "Confier mon bien",
    highlight: true,
  },
  {
    name: "Pack Investisseurs",
    price: "Sur mesure",
    sub: "Pour portefeuilles 3+ biens",
    features: [
      "Gestionnaire dédié",
      "Reporting consolide multi-biens",
      "Optimisation fiscale incluse",
      "Accès aux offres off-market",
      "Participation aux events investisseurs",
    ],
    cta: "Nous contacter",
    highlight: false,
  },
];

const testimonials = [
  {
    name: "Yasmine Alaoui",
    role: "Propriétaire · 3 biens à Casablanca",
    quote: "J'ai confié mes 3 appartements à StayDak il y a 18 mois. Zéro vacance depuis, loyers versés le 5 de chaque mois. Le reporting mensuel est impeccable.",
    roi: "9.1% ROI",
  },
  {
    name: "Mohammed Tazi",
    role: "Investisseur · Riad Marrakech",
    quote: "StayDak a vendu mon riad en 3 semaines au prix souhaité. Leur base d'acheteurs est une vraie force. Je leur confie maintenant la gestion de mon prochain actif.",
    roi: "14.5% ROI",
  },
];

export default function ProprietairesPage() {
  return (
    <main className="min-h-screen bg-[#050d1a] pt-24 pb-16">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2044] to-[#050d1a] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Propriétaires & Investisseurs</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 max-w-3xl mx-auto leading-tight">
            Votre bien mérite une gestion <span className="text-gold-gradient">d&apos;exception</span>
          </h1>
          <p className="text-[#8a9ab5] text-lg max-w-xl mx-auto mb-10">
            Confiez votre patrimoine immobilier à StayDak. Nous maximisons vos rendements tout en vous libérant de toute contrainte de gestion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212600000000?text=Bonjour, je suis propriétaire et souhaite confier mon bien à StayDak."
              target="_blank" rel="noopener noreferrer"
              className="gold-shimmer relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-[#050d1a] font-bold px-8 py-4 rounded-xl hover:bg-[#d4af37] transition-colors"
            >
              Parler à un conseiller <ArrowRight size={18} />
            </a>
            <Link
              href="/calculateur-roi"
              className="inline-flex items-center justify-center gap-2 border border-[#c9a84c]/30 text-[#c9a84c] font-semibold px-8 py-4 rounded-xl hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all"
            >
              Estimer mon ROI
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mb-4">
                <Icon size={22} className="text-[#c9a84c]" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{title}</h3>
              <p className="text-[#8a9ab5] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Plans */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white">
            Choisissez votre <span className="text-gold-gradient">formule</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {plans.map(({ name, price, sub, features, cta, highlight }) => (
            <div
              key={name}
              className={`rounded-3xl p-8 flex flex-col ${
                highlight
                  ? "bg-[#c9a84c]/10 border-2 border-[#c9a84c]/50"
                  : "glass"
              }`}
            >
              {highlight && (
                <span className="self-start mb-4 bg-[#c9a84c] text-[#050d1a] text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Recommandé
                </span>
              )}
              <h3 className="text-white font-black text-lg mb-1">{name}</h3>
              <div className="text-[#c9a84c] font-black text-2xl mb-0.5">{price}</div>
              <div className="text-[#8a9ab5] text-xs mb-6">{sub}</div>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#b0bcd4]">
                    <CheckCircle size={15} className="text-[#c9a84c] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/212600000000?text=Bonjour, je souhaite en savoir plus sur la formule : ${name}`}
                target="_blank" rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${
                  highlight
                    ? "bg-[#c9a84c] text-[#050d1a] hover:bg-[#d4af37]"
                    : "border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c]/10 hover:border-[#c9a84c]"
                }`}
              >
                {cta} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-white">Ce que disent nos <span className="text-gold-gradient">clients</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(({ name, role, quote, roi }) => (
              <div key={name} className="glass rounded-2xl p-7">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#c9a84c" className="text-[#c9a84c]" />
                  ))}
                  <span className="ml-2 text-[#c9a84c] font-bold text-sm">{roi}</span>
                </div>
                <p className="text-[#b0bcd4] text-sm leading-relaxed mb-5 italic">&ldquo;{quote}&rdquo;</p>
                <div>
                  <div className="text-white font-bold text-sm">{name}</div>
                  <div className="text-[#8a9ab5] text-xs mt-0.5">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="glass rounded-3xl p-10 text-center border border-[#c9a84c]/20">
          <h2 className="text-2xl font-black text-white mb-3">Prêt à optimiser votre patrimoine ?</h2>
          <p className="text-[#8a9ab5] max-w-lg mx-auto mb-8 text-sm">
            Nos conseillers sont disponibles 7j/7 pour analyser votre situation et vous proposer la stratégie la plus adaptée.
          </p>
          <a
            href="https://wa.me/212600000000?text=Bonjour, je souhaite confier mon bien immobilier à StayDak."
            target="_blank" rel="noopener noreferrer"
            className="gold-shimmer relative overflow-hidden inline-flex items-center gap-2 bg-[#c9a84c] text-[#050d1a] font-bold px-8 py-4 rounded-xl hover:bg-[#d4af37] transition-colors"
          >
            Démarrer maintenant <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </main>
  );
}
