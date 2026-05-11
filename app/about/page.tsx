import Link from "next/link";
import { Heart, Globe, Shield, Users, Star, ArrowRight } from "lucide-react";

const TEAM = [
  { name: "Karim Benjelloun", role: "Co-fondateur & CEO", avatar: "K", bio: "Passionné du tourisme marocain depuis 15 ans, Karim a créé StayDak pour partager l'hospitalité de son pays avec le monde entier." },
  { name: "Leila Fassi", role: "Co-fondatrice & COO", avatar: "L", bio: "Architecte de formation, Leila sélectionne personnellement chaque logement pour garantir authenticité et qualité." },
  { name: "Omar Tazi", role: "CTO", avatar: "O", bio: "Omar dirige l'équipe tech avec pour obsession : offrir l'expérience de réservation la plus fluide du marché." },
];

const STATS = [
  { value: "1 500+", label: "Logements" },
  { value: "12", label: "Villes couvertes" },
  { value: "45 000+", label: "Séjours réalisés" },
  { value: "4.9/5", label: "Note moyenne" },
];

const VALUES = [
  {
    icon: Heart,
    title: "Authenticité avant tout",
    desc: "Nous refusons les logements standardisés. Chaque propriété sur StayDak raconte une histoire, un savoir-faire, une culture.",
  },
  {
    icon: Globe,
    title: "Impact local positif",
    desc: "95% de nos hôtes sont des habitants locaux. Chaque réservation soutient directement l'économie des communautés marocaines.",
  },
  {
    icon: Shield,
    title: "Confiance & transparence",
    desc: "Avis vérifiés, photos authentiques, prix sans surprises. Nous mettons tout en œuvre pour que vous partiez l'esprit serein.",
  },
  {
    icon: Users,
    title: "Communauté de voyageurs",
    desc: "StayDak c'est aussi une communauté de passionnés qui partagent leurs bonnes adresses, itinéraires et coups de cœur.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-[#1a1a2e]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1553603227-2358aabe821e?w=1800&q=80')",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#e8563a]/20 border border-[#e8563a]/40 text-[#f5a623] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Notre histoire
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Nés de l&apos;amour du<br />
            <span className="text-[#e8563a]">Maroc authentique</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            StayDak est né d&apos;une conviction simple : les meilleures expériences de voyage ne s&apos;achètent pas dans les grandes chaînes hôtelières. Elles se vivent dans les maisons des habitants.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#e8563a] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-orange-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80"
                alt="Médina de Marrakech"
                className="rounded-3xl w-full object-cover aspect-[4/3] shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#f7f0e6] rounded-2xl p-5 shadow-xl max-w-[220px]">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-[#f5a623] text-[#f5a623]" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 font-medium">&ldquo;Le meilleur séjour de ma vie, grâce à StayDak&rdquo;</p>
                <p className="text-xs text-gray-400 mt-1">— Marie, Paris</p>
              </div>
            </div>
            <div>
              <span className="text-[#e8563a] font-semibold text-sm uppercase tracking-wider">2019 — Fondation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3 mb-6">
                L&apos;histoire commence dans un riad de Marrakech
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  En 2019, Karim et Leila, tous deux passionnés du patrimoine marocain, observaient avec tristesse la disparition progressive des riads traditionnels au profit d&apos;hôtels standardisés.
                </p>
                <p>
                  Leur idée : créer une plateforme qui mette en valeur les logements authentiques et les hôtes locaux, tout en offrant aux voyageurs une expérience radicalement différente des circuits touristiques classiques.
                </p>
                <p>
                  Aujourd&apos;hui, StayDak connecte des milliers de voyageurs avec des hôtes marocains passionnés, dans plus de 12 villes à travers tout le royaume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f7f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Nos valeurs</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Quatre principes guident chacune de nos décisions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#e8563a]/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#e8563a]" />
                </div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">L&apos;équipe fondatrice</h2>
            <p className="text-gray-600">Des Marocains passionnés, au service de votre voyage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-[#e8563a] flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-1">{member.name}</h3>
                <p className="text-[#e8563a] font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Rejoignez l&apos;aventure StayDak
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Que vous soyez voyageur ou propriétaire, il y a une place pour vous dans notre communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="flex items-center justify-center gap-2 bg-[#e8563a] text-white font-bold px-8 py-4 rounded-full hover:bg-[#c94428] transition-colors"
            >
              Explorer les logements <ArrowRight size={18} />
            </Link>
            <Link
              href="/properties"
              className="flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-full hover:border-white/50 hover:bg-white/5 transition-all"
            >
              Devenir hôte
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
