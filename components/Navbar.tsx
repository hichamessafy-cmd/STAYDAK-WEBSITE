"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Annonces", href: "/annonces" },
  { label: "Carte d'investissement", href: "/annonces#carte" },
  { label: "Calculateur ROI", href: "/calculateur-roi" },
  { label: "Services", href: "/services" },
  { label: "Tableau de bord", href: "/tableau-de-bord" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050d1a]/95 backdrop-blur-xl border-b border-[#c9a84c]/20 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#c9a84c]/20 rounded-lg rotate-45 group-hover:rotate-[60deg] transition-transform duration-500" />
              <span className="relative text-[#c9a84c] font-black text-lg">S</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-xl tracking-tight">
                STAY<span className="text-[#c9a84c]">DAK</span>
              </span>
              <span className="text-[#8a9ab5] text-[9px] uppercase tracking-[3px] font-medium">
                Immobilier Premium
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
                  pathname === item.href
                    ? "text-[#c9a84c]"
                    : "text-[#b0bcd4] hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#c9a84c] rounded-full transition-all duration-300 ${
                    pathname === item.href ? "w-6" : "w-0 group-hover:w-6"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/proprietaires"
              className="flex items-center gap-2 text-sm font-semibold text-[#c9a84c] border border-[#c9a84c]/40 hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 px-4 py-2 rounded-lg transition-all duration-200"
            >
              Propriétaires / Investisseurs
              <ChevronDown size={14} />
            </Link>
            <Link
              href="/calculateur-roi"
              className="gold-shimmer flex items-center gap-2 text-sm font-bold bg-[#c9a84c] hover:bg-[#d4af37] text-[#050d1a] px-5 py-2 rounded-lg transition-all duration-200"
            >
              Calculer mon ROI
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#b0bcd4] hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#050d1a]/98 backdrop-blur-xl border-t border-[#c9a84c]/20 px-4 py-6 space-y-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-[#c9a84c] bg-[#c9a84c]/10"
                  : "text-[#b0bcd4] hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 space-y-2 border-t border-white/10 mt-4">
            <Link
              href="/proprietaires"
              onClick={() => setIsOpen(false)}
              className="block text-center text-sm font-semibold text-[#c9a84c] border border-[#c9a84c]/40 px-4 py-3 rounded-lg"
            >
              Propriétaires / Investisseurs
            </Link>
            <Link
              href="/calculateur-roi"
              onClick={() => setIsOpen(false)}
              className="block text-center text-sm font-bold bg-[#c9a84c] text-[#050d1a] px-4 py-3 rounded-lg"
            >
              Calculer mon ROI
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
