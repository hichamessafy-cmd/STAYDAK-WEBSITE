import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "StayDak — Logements authentiques au Maroc",
  description:
    "Découvrez plus de 1 500 logements authentiques au Maroc : riads, villas, kasbahs, bungalows. Réservez en toute confiance avec StayDak.",
  keywords: "riad marrakech, logement maroc, location villa maroc, kasbah atlas, essaouira airbnb",
  openGraph: {
    title: "StayDak — Logements authentiques au Maroc",
    description: "Riads, villas et kasbahs sélectionnés pour leur authenticité.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
