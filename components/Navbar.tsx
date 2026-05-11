"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#e8563a] flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-[#1a1a2e]">
              Stay<span className="text-[#e8563a]">Dak</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/properties" className="hover:text-[#e8563a] transition-colors">
              Logements
            </Link>
            <Link href="/about" className="hover:text-[#e8563a] transition-colors">
              À propos
            </Link>
            <Link href="/properties" className="hover:text-[#e8563a] transition-colors">
              Devenir hôte
            </Link>
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#e8563a] transition-colors px-3 py-2 rounded-full hover:bg-gray-100">
              <Globe size={16} />
              <span>FR</span>
            </button>
            <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:shadow-md transition-all">
              <Menu size={16} />
              <User size={20} className="text-gray-500" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#e8563a] hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link
            href="/properties"
            className="block py-2 text-gray-700 font-medium hover:text-[#e8563a]"
            onClick={() => setIsOpen(false)}
          >
            Logements
          </Link>
          <Link
            href="/about"
            className="block py-2 text-gray-700 font-medium hover:text-[#e8563a]"
            onClick={() => setIsOpen(false)}
          >
            À propos
          </Link>
          <Link
            href="/properties"
            className="block py-2 text-gray-700 font-medium hover:text-[#e8563a]"
            onClick={() => setIsOpen(false)}
          >
            Devenir hôte
          </Link>
        </div>
      )}
    </nav>
  );
}
