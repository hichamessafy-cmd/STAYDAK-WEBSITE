import Link from "next/link";
import { Shield, TrendingUp, Search, FileText, Users, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Sourcing & Acquisition",
    subtitle: "Identification des meilleures opportunités",
    description: "Notre équipe d'analystes parcourt le marché marocain pour identifier les actifs sous-valorisés à fort potentiel de rendement. Nous négocions en votre nom pour obtenir les meilleures conditions.",
    features: [
      "Analyse de marché propriétaire",
      "Due diligence juridique complète",
      "Négociation prix et conditions",
      "Vérification titre foncier",
      "Audit technique du bien",
    ],
    price: "Inclus dans notre commission",
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "Gestion Locative Premium",
    subtitle: "Maximisez votre rendement sans effort",
    description: "Nous prenons en charge l'intégralité de la gestion locative de votre bien : recherche de locataires, état des lieux, encaissement des loyers et maintenance. Vous percevez votre revenu chaque mois.",
    features: [
      "Sélection rigoureuse des locataires",
      "Encaissement et reversement des loyers",
      "Gestion des réparations & maintenance",
      "Reporting mensuel détaillé",
      "Assurance loyers impayés disponible",
    ],
    price: "8% des loyers perçus",
    highlight: true,
  },
  {
    icon: Shield,
    title: "Conseil Patrimonial",
    subtitle: "Stratégie d'investissement sur-mesure",
    description: "Nos conseillers patrimoniaux construisent avec vous une stratégie d'investissement immobilier adaptée à vos objectifs de rendement, votre horizon d'investissement et votre profil de risque.",
    features: [
      "Bilan patrimonial complet",
      "Optimisation fiscale (IS / IR)",
      "Structuration SCI / holding",
      "Plan de financement bancaire",
      "Accompagnement notarial",
    ],
    price: "Sur devis",
    highlight: false,
  },
  {
    icon: FileText,
    title: "Études & Rapports",
    subtitle: "Intelligence de marché premium",
    description: "Accédez à nos rapports exclusifs sur l'immobilier marocain : analyse par quartier, tendances des prix, rendements locatifs par type de bien et perspectives macroéconomiques.",
    features: [
      "Rapport mensuel marché marocain",
      "Analyse de quartier détaillée",
      "Comparatif rendements par ville",
      "Alertes opportunités en temps réel",
      "Accès à notre base de données propriétaire",
    ],
    price: "Abonnement Premium",
    highlight: false,
  },
];

const process = [
  { step: "01", title: "Consultation gratuite", desc: "Échange de 30 minutes avec un conseiller pour comprendre vos objectifs." },
  { step: "02", title: "Proposition personnalisée", desc: "Nous sélectionnons 2 à 3 biens correspondant exactement à votre profil." },
  { step: "03", title: "Visite & due diligence", desc: "Visite physique ou virtuelle, audit complet, vérification juridique." },
  { step: "04", title: "Acquisition accompagnée", desc: "Nous vous accompagnons chez le notaire jusqu'à la remise des clés." },
  { step: "05", title: "Gestion & suivi", desc: "Reporting mensuel, gestion locative, optimisation continue du rendement." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050d1a] pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Nos expertises</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Des services <span className="text-gold-gradient">360°</span>
          </h1>
          <p className="text-[#8a9ab5] max-w-2xl mx-auto text-lg">
            De l&apos;identification du bien à la gestion locative, StayDak vous accompagne à chaque étape de votre investissement immobilier au Maroc.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map(({ icon: Icon, title, subtitle, description, features, price, highlight }) => (
            <div
              key={title}
              className={`rounded-3xl p-8 flex flex-col ${
                highlight
                  ? "bg-[#c9a84c]/10 border border-[#c9a84c]/40"
                  : "glass"
              }`}
            >
              {highlight && (
                <span className="self-start mb-4 bg-[#c9a84c] text-[#050d1a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Populaire
                </span>
              )}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${highlight ? "bg-[#c9a84c]/20" : "bg-[#c9a84c]/10"}`}>
                <Icon size={26} className="text-[#c9a84c]" />
              </div>
              <h2 className="text-xl font-black text-white mb-1">{title}</h2>
              <p className="text-[#c9a84c] text-sm font-semibold mb-4">{subtitle}</p>
              <p className="text-[#8a9ab5] text-sm leading-relaxed mb-6">{description}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#b0bcd4]">
                    <CheckCircle size={15} className="text-[#c9a84c] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-5 border-t border-white/5">
                <span className="text-[#c9a84c] font-bold text-sm">{price}</span>
                <Link
                  href={`https://wa.me/212614192537?text=Bonjour, je souhaite en savoir plus sur votre service : ${title}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-white font-semibold hover:text-[#c9a84c] transition-colors"
                >
                  En savoir plus <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">Notre processus en <span className="text-gold-gradient">5 étapes</span></h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#c9a84c] font-black text-lg">{step}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
                  <p className="text-[#8a9ab5] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners / trust section */}
        <div className="glass rounded-3xl p-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users size={24} className="text-[#c9a84c]" />
            <h2 className="text-2xl font-black text-white">Ils nous font confiance</h2>
          </div>
          <p className="text-[#8a9ab5] max-w-xl mx-auto mb-8">
            Plus de 320 investisseurs particuliers et institutionnels ont choisi StayDak pour gérer leur portefeuille immobilier au Maroc.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { value: "320+", label: "Investisseurs actifs" },
              { value: "9.8%", label: "ROI moyen portefeuille" },
              { value: "1.2 Mrd", label: "MAD sous gestion" },
              { value: "98%", label: "Taux de satisfaction" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-black text-[#c9a84c] mb-1">{value}</div>
                <div className="text-[#8a9ab5] text-sm">{label}</div>
              </div>
            ))}
          </div>
          <Link
            href="/annonces"
            className="gold-shimmer relative overflow-hidden inline-flex items-center gap-2 bg-[#c9a84c] text-[#050d1a] font-bold px-8 py-4 rounded-xl hover:bg-[#d4af37] transition-colors"
          >
            Découvrir nos biens <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
