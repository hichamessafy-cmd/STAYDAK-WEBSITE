export type Property = {
  id: string;
  title: string;
  location: string;
  city: string;
  country: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  type: string;
  beds: number;
  baths: number;
  guests: number;
  description: string;
  amenities: string[];
  featured: boolean;
  host: {
    name: string;
    avatar: string;
    superhost: boolean;
  };
};

export const properties: Property[] = [
  {
    id: "1",
    title: "Riad traditionnel avec piscine",
    location: "Médina de Marrakech",
    city: "Marrakech",
    country: "Maroc",
    price: 85,
    rating: 4.97,
    reviews: 214,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
    ],
    type: "Riad",
    beds: 3,
    baths: 2,
    guests: 6,
    description:
      "Plongez dans l'authenticité marocaine dans ce magnifique riad du XIXe siècle, entièrement restauré. Au cœur de la médina, vous profiterez d'une piscine privée, de mosaïques zellige et d'une terrasse panoramique.",
    amenities: ["Piscine privée", "Wi-Fi", "Climatisation", "Petit-déjeuner", "Terrasse rooftop", "Parking"],
    featured: true,
    host: { name: "Youssef B.", avatar: "Y", superhost: true },
  },
  {
    id: "2",
    title: "Villa vue mer à Essaouira",
    location: "Bord de plage, Essaouira",
    city: "Essaouira",
    country: "Maroc",
    price: 120,
    rating: 4.89,
    reviews: 97,
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    ],
    type: "Villa",
    beds: 4,
    baths: 3,
    guests: 8,
    description:
      "Villa contemporaine avec une vue imprenable sur l'océan Atlantique. Profitez du bruit des vagues depuis votre terrasse privée et découvrez la cité des alizés à deux pas.",
    amenities: ["Vue mer", "Piscine", "Wi-Fi", "Cuisine équipée", "Parking", "BBQ"],
    featured: true,
    host: { name: "Fatima Z.", avatar: "F", superhost: true },
  },
  {
    id: "3",
    title: "Appartement design - Casablanca",
    location: "Quartier Gauthier, Casablanca",
    city: "Casablanca",
    country: "Maroc",
    price: 55,
    rating: 4.75,
    reviews: 183,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    ],
    type: "Appartement",
    beds: 2,
    baths: 1,
    guests: 4,
    description:
      "Appartement moderne au cœur du quartier branché de Gauthier. Idéal pour explorer la capitale économique du Maroc : restaurants, cafés et plages à moins de 10 minutes.",
    amenities: ["Wi-Fi haut débit", "Climatisation", "Cuisine équipée", "Parking souterrain", "Salle de sport"],
    featured: true,
    host: { name: "Mehdi A.", avatar: "M", superhost: false },
  },
  {
    id: "4",
    title: "Kasbah dans les montagnes de l'Atlas",
    location: "Vallée de l'Ourika",
    city: "Atlas",
    country: "Maroc",
    price: 95,
    rating: 4.92,
    reviews: 68,
    images: [
      "https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    ],
    type: "Kasbah",
    beds: 5,
    baths: 4,
    guests: 10,
    description:
      "Kasbah berbère authentique nichée dans la vallée de l'Ourika, à 1 600 m d'altitude. Vue sur les sommets enneigés, jardins en terrasses et hammam privé pour une escapade totale.",
    amenities: ["Vue montagne", "Hammam", "Jardin", "Petit-déjeuner berbère", "Randonnées guidées", "Feu de cheminée"],
    featured: true,
    host: { name: "Rachid O.", avatar: "R", superhost: true },
  },
  {
    id: "5",
    title: "Suite de luxe - Fès el-Bali",
    location: "Fès el-Bali, Fès",
    city: "Fès",
    country: "Maroc",
    price: 110,
    rating: 4.85,
    reviews: 142,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    ],
    type: "Riad",
    beds: 2,
    baths: 2,
    guests: 4,
    description:
      "Suite luxueuse dans un riad du XIIe siècle, classé patrimoine UNESCO. Stuc sculpté, fontaines de marbre et hammam privatif — une immersion totale dans l'histoire fascinante de Fès.",
    amenities: ["Hammam privé", "Wi-Fi", "Petit-déjeuner", "Tour guidé médina", "Climatisation", "Service de thé"],
    featured: false,
    host: { name: "Nadia K.", avatar: "N", superhost: true },
  },
  {
    id: "6",
    title: "Bungalow de plage - Agadir",
    location: "Plage d'Agadir",
    city: "Agadir",
    country: "Maroc",
    price: 70,
    rating: 4.68,
    reviews: 109,
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
      "https://images.unsplash.com/photo-1540541338537-1220659e4946?w=800&q=80",
    ],
    type: "Bungalow",
    beds: 2,
    baths: 1,
    guests: 4,
    description:
      "Bungalow directement sur la plage d'Agadir, la plus belle plage du Maroc. Profitez du soleil 300 jours par an, de la mer turquoise et des sports nautiques juste devant votre porte.",
    amenities: ["Accès direct plage", "Wi-Fi", "Climatisation", "Terrasse", "Location de surf", "BBQ"],
    featured: false,
    host: { name: "Hassan M.", avatar: "H", superhost: false },
  },
];

export const destinations = [
  { city: "Marrakech", count: 248, image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=600&q=80" },
  { city: "Essaouira", count: 87, image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&q=80" },
  { city: "Fès", count: 134, image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=600&q=80" },
  { city: "Agadir", count: 196, image: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=600&q=80" },
];

export const testimonials = [
  {
    id: 1,
    name: "Sophie L.",
    country: "France",
    avatar: "S",
    rating: 5,
    text: "StayDak a complètement transformé mon voyage au Maroc. Le riad que j'ai réservé était encore plus beau qu'en photo, et le service était impeccable. Je recommande à 100% !",
  },
  {
    id: 2,
    name: "James W.",
    country: "Royaume-Uni",
    avatar: "J",
    rating: 5,
    text: "Incredible experience booking through StayDak. The Atlas kasbah was breathtaking, the host was wonderful, and everything went smoothly. Will definitely use again!",
  },
  {
    id: 3,
    name: "Amira B.",
    country: "Canada",
    avatar: "A",
    rating: 5,
    text: "En tant que Marocaine vivant à l'étranger, StayDak m'a reconnectée à mes racines d'une façon magique. Les logements sont authentiques et les hôtes adorables.",
  },
];
