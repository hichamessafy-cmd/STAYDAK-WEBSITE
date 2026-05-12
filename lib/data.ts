export type Property = {
  id: string;
  title: string;
  location: string;
  city: string;
  type: string;
  price: number;
  pricePerSqm: number;
  surface: number;
  bedrooms: number;
  bathrooms: number;
  roi: number;
  rentalYield: number;
  images: string[];
  description: string;
  features: string[];
  status: "disponible" | "vendu" | "réservé";
  badge?: string;
  investmentHighlight: string;
};

export const properties: Property[] = [
  {
    id: "1",
    title: "Penthouse Luxe — Tour Anfa",
    location: "Quartier Anfa, Casablanca",
    city: "Casablanca",
    type: "Penthouse",
    price: 4_800_000,
    pricePerSqm: 22_000,
    surface: 218,
    bedrooms: 4,
    bathrooms: 3,
    roi: 9.2,
    rentalYield: 7.4,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
    ],
    description: "Penthouse d'exception au sommet de la Tour Anfa avec vue panoramique sur l'Atlantique. Finitions haut de gamme, domotique intégrée, terrasse privée de 60 m².",
    features: ["Vue Atlantique", "Terrasse 60 m²", "Domotique", "Parking × 2", "Sécurité 24h/24", "Cave à vin"],
    status: "disponible",
    badge: "Exclusivité",
    investmentHighlight: "Rendement locatif garanti 7.4% — zone prime CBD",
  },
  {
    id: "2",
    title: "Villa Contemporaine — Palmeraie",
    location: "Palmeraie, Marrakech",
    city: "Marrakech",
    type: "Villa",
    price: 7_200_000,
    pricePerSqm: 18_000,
    surface: 400,
    bedrooms: 6,
    bathrooms: 5,
    roi: 11.5,
    rentalYield: 9.1,
    images: [
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=900&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=85",
    ],
    description: "Villa de prestige au cœur de la Palmeraie de Marrakech. Architecture contemporaine fusionnant avec l'héritage berbère, piscine à débordement, jardin exotique.",
    features: ["Piscine à débordement", "Jardin 800 m²", "Hammam privé", "Salle de cinéma", "Personnel inclus", "Hélisurface"],
    status: "disponible",
    badge: "ROI Top",
    investmentHighlight: "Meilleur ROI du segment — 11.5% net/an via location saisonnière",
  },
  {
    id: "3",
    title: "Appartement Prestige — Marina",
    location: "Marina, Casablanca",
    city: "Casablanca",
    type: "Appartement",
    price: 2_350_000,
    pricePerSqm: 19_500,
    surface: 120,
    bedrooms: 3,
    bathrooms: 2,
    roi: 8.1,
    rentalYield: 6.8,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=85",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=85",
    ],
    description: "Appartement de standing dans la Marina de Casablanca, vue mer directe. Résidence sécurisée, conciergerie 24h/24, à 5 min du centre financier.",
    features: ["Vue marina", "Conciergerie", "Piscine résidence", "Salle de sport", "Parking", "Cave"],
    status: "disponible",
    badge: "Coup de cœur",
    investmentHighlight: "Zone de forte demande locative — taux d'occupation 94%",
  },
  {
    id: "4",
    title: "Riad Investissement — Médina",
    location: "Médina, Fès",
    city: "Fès",
    type: "Riad",
    price: 1_800_000,
    pricePerSqm: 12_000,
    surface: 150,
    bedrooms: 5,
    bathrooms: 4,
    roi: 14.2,
    rentalYield: 12.0,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=85",
    ],
    description: "Riad restauré à neuf dans la médina de Fès, classée UNESCO. Exploitation en maison d'hôtes boutique déjà opérationnelle, clientèle internationale fidèle.",
    features: ["Patrimoine UNESCO", "Exploitation active", "5 suites", "Courtyard & fontaine", "Rooftop", "Cuisine équipée"],
    status: "disponible",
    badge: "Rendement record",
    investmentHighlight: "14.2% ROI brut — activité hôtelière en place, revenu immédiat",
  },
  {
    id: "5",
    title: "Duplex Bord de Mer — Agadir",
    location: "Corniche, Agadir",
    city: "Agadir",
    type: "Duplex",
    price: 3_100_000,
    pricePerSqm: 16_800,
    surface: 185,
    bedrooms: 4,
    bathrooms: 3,
    roi: 10.3,
    rentalYield: 8.5,
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=85",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85",
    ],
    description: "Duplex premium en première ligne sur la Corniche d'Agadir. Vue mer à 180°, terrasse de 80 m², dans une résidence hôtelière 5 étoiles avec services.",
    features: ["Première ligne mer", "Terrasse 80 m²", "Services 5★", "Piscine", "Spa", "Accès plage privée"],
    status: "réservé",
    badge: "Dernière unité",
    investmentHighlight: "Station balnéaire en plein essor — +15% valeur/an depuis 3 ans",
  },
  {
    id: "6",
    title: "Bureau Premium — Twin Center",
    location: "Twin Center, Casablanca",
    city: "Casablanca",
    type: "Bureau",
    price: 5_500_000,
    pricePerSqm: 28_000,
    surface: 196,
    bedrooms: 0,
    bathrooms: 2,
    roi: 7.8,
    rentalYield: 6.5,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=85",
    ],
    description: "Plateau de bureaux premium au Twin Center, icône de Casablanca. Locataire institutionnel en place, bail commercial 9 ans, revenu sécurisé.",
    features: ["Vue panoramique", "Locataire en place", "Bail 9 ans", "Parking × 4", "Salle conf.", "Fibre dédiée"],
    status: "disponible",
    badge: "Revenu sécurisé",
    investmentHighlight: "Revenu immédiat sécurisé — locataire AAA, bail LT garanti",
  },
];

export const stats = [
  { value: "2.4 Mrd MAD", label: "Volume de transactions 2024", icon: "💰" },
  { value: "340+", label: "Investisseurs accompagnés", icon: "👥" },
  { value: "9.8%", label: "ROI moyen portefeuille", icon: "📈" },
  { value: "98%", label: "Clients satisfaits", icon: "⭐" },
];

export const services = [
  {
    id: "sourcing",
    title: "Sourcing & Due Diligence",
    desc: "Identification des meilleures opportunités off-market au Maroc. Analyse juridique, technique et financière complète avant toute acquisition.",
    icon: "🔍",
    detail: "Accès à notre réseau exclusif de 200+ promoteurs et propriétaires privés.",
  },
  {
    id: "gestion",
    title: "Gestion Locative Premium",
    desc: "Gestion complète de votre bien : mise en location, sélection locataires, maintenance, comptabilité et reporting mensuel.",
    icon: "🏢",
    detail: "Taux d'occupation moyen de 94% sur notre portefeuille géré.",
  },
  {
    id: "financement",
    title: "Structuration Financière",
    desc: "Montage financier optimisé : crédit immobilier, SCI, holding patrimoniale. Partenariats avec les 5 principales banques marocaines.",
    icon: "🏦",
    detail: "Économie fiscale moyenne de 18% sur la structuration d'acquisition.",
  },
  {
    id: "accompagnement",
    title: "Accompagnement Investisseur",
    desc: "De la recherche à la revente : conseil personnalisé, visites, négociation, actes notariés, fiscalité et stratégie de sortie.",
    icon: "🤝",
    detail: "Un conseiller dédié disponible 6j/7, de la signature à la livraison.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Khalid Bennani",
    role: "Entrepreneur, MRE Paris",
    avatar: "K",
    rating: 5,
    return: "+11.2% ROI",
    text: "StayDak m'a permis de constituer un portefeuille immobilier de 3 biens à Casablanca depuis Paris. Processus 100% digital, équipe réactive, résultats au-delà de mes attentes.",
  },
  {
    id: 2,
    name: "Sophie Marchand",
    role: "Directrice Financière, Lyon",
    avatar: "S",
    rating: 5,
    return: "+9.4% ROI",
    text: "Investir au Maroc semblait complexe depuis la France. StayDak a géré toute la procédure — de la due diligence au notaire — avec une transparence totale. Très professionnel.",
  },
  {
    id: 3,
    name: "Ahmed Tazi",
    role: "Investisseur, Casablanca",
    avatar: "A",
    rating: 5,
    return: "+14.5% ROI",
    text: "Le riad à Fès était une opportunité rare. Grâce au réseau off-market de StayDak, j'ai pu l'acquérir avant sa mise sur le marché public. ROI exceptionnel en 18 mois.",
  },
];

export const cities = [
  { name: "Casablanca", properties: 142, avgRoi: 8.2, image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=600&q=80" },
  { name: "Marrakech", properties: 98, avgRoi: 10.5, image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=600&q=80" },
  { name: "Rabat", properties: 67, avgRoi: 7.8, image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80" },
  { name: "Agadir", properties: 54, avgRoi: 9.1, image: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=600&q=80" },
];
