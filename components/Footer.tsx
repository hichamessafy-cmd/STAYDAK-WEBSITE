import Link from "next/link";

const SOCIAL = [
  { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "YouTube", path: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050d1a] border-t border-[#c9a84c]/10">
      {/* Top band */}
      <div className="bg-gradient-to-r from-[#0f2044] via-[#162455] to-[#0f2044] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-1">
                Prêt à investir au <span className="text-gold-gradient">Maroc</span> ?
              </h3>
              <p className="text-[#8a9ab5] text-sm">Nos conseillers vous répondent sous 2h.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/calculateur-roi"
                className="gold-shimmer bg-[#c9a84c] hover:bg-[#d4af37] text-[#050d1a] font-bold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Calculer mon ROI
              </Link>
              <a
                href="https://wa.me/212614192537"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#c9a84c]/40 hover:border-[#c9a84c] text-[#c9a84c] font-semibold px-6 py-3 rounded-xl transition-all text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center">
                <span className="text-[#c9a84c] font-black">S</span>
              </div>
              <span className="text-xl font-black text-white">STAY<span className="text-[#c9a84c]">DAK</span></span>
            </Link>
            <p className="text-[#8a9ab5] text-sm leading-relaxed mb-5">
              Plateforme d'investissement immobilier premium au Maroc. Riads, villas, appartements et actifs commerciaux sélectionnés pour leur potentiel de rendement.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ label, path }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#8a9ab5] hover:text-[#c9a84c] hover:border-[#c9a84c]/40 transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#c9a84c] font-semibold text-xs uppercase tracking-widest mb-4">Investir</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Toutes les annonces", href: "/annonces" },
                { label: "Casablanca", href: "/annonces" },
                { label: "Marrakech", href: "/annonces" },
                { label: "Rabat", href: "/annonces" },
                { label: "Calculateur ROI", href: "/calculateur-roi" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#8a9ab5] hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#c9a84c] font-semibold text-xs uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Sourcing Off-Market", href: "/services" },
                { label: "Gestion Locative", href: "/services" },
                { label: "Structuration Financière", href: "/services" },
                { label: "Conseil Patrimonial", href: "/services" },
                { label: "Tableau de bord", href: "/tableau-de-bord" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#8a9ab5] hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#c9a84c] font-semibold text-xs uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-[#8a9ab5]">
              <li>📍 Dakhla, Rue Ouala</li>
              <li>📞 +212 6 14 19 25 37</li>
              <li>✉️ contacte@staydak.ma</li>
              <li className="pt-2">
                <span className="inline-block bg-emerald-500/15 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/20">
                  Disponible Lun–Sam 9h–19h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#4a5a70]">
          <p>© 2026 StayDak Immobilier. Tous droits réservés. Agrément CNRAI N° 2024-0847.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">CGU</a>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
