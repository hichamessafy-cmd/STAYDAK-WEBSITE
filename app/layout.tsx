import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "StayDak — Investissement Immobilier Premium au Maroc",
  description:
    "Découvrez les meilleures opportunités d'investissement immobilier au Maroc. Riads, villas, appartements et actifs commerciaux. ROI moyen 9.8%. Accompagnement complet.",
  keywords: "investissement immobilier maroc, acheter appartement casablanca, villa marrakech, riad fes, rendement locatif maroc, ROI immobilier",
  openGraph: {
    title: "StayDak — Investissement Immobilier Premium Maroc",
    description: "Les meilleures opportunités immobilières au Maroc. ROI moyen 9.8%.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
