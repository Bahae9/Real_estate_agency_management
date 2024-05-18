import {
  BienImmobilierFullProps,
  BienImmobilierProps,
  ContractProps,
  TransactionProps,
} from "@/types/db";

export const TRANSACTIONS: TransactionProps[] = [
  {
    idTransaction: 342,
    typeTransaction: "vente",
    montant: 152000,
    idVendeur: 45,
    idAcheteur: 78,
    idPropriete: 12,
  },
  {
    idTransaction: 127,
    typeTransaction: "location",
    montant: 95000,
    idVendeur: 23,
    idAcheteur: 56,
    idPropriete: 9,
  },
  {
    idTransaction: 591,
    typeTransaction: "vente",
    montant: 213000,
    idVendeur: 67,
    idAcheteur: 89,
    idPropriete: 33,
  },
  {
    idTransaction: 437,
    typeTransaction: "location",
    montant: 120000,
    idVendeur: 34,
    idAcheteur: 90,
    idPropriete: 27,
  },
  {
    idTransaction: 231,
    typeTransaction: "location",
    montant: 150000,
    idVendeur: 12,
    idAcheteur: 44,
    idPropriete: 123,
  },
];

export const CONTRACTS: ContractProps[] = [
  {
    idContrat: 101,
    idTransaction: 342,
    dateContrat: "2023-04-01",
    documentPath: "/path/to/contrat_101.pdf",
  },
  {
    idContrat: 202,
    idTransaction: 127,
    dateContrat: "2023-05-15",
    documentPath: "/path/to/contrat_202.pdf",
  },
  {
    idContrat: 303,
    idTransaction: 591,
    dateContrat: "2023-03-21",
    documentPath: "/path/to/contrat_303.pdf",
  },
  {
    idContrat: 404,
    idTransaction: 437,
    dateContrat: "2023-06-11",
    documentPath: "/path/to/contrat_404.pdf",
  },
  {
    idContrat: 505,
    idTransaction: 123,
    dateContrat: "2024-06-11",
    documentPath: "/path/to/contrat_404.pdf",
  },
];

export const CATEGORIES = [
  { id: "maison", name: "Maison" },
  { id: "appartement", name: "Appartement" },
  { id: "terrain", name: "Terrain" },
  { id: "bureau", name: "Bureau" },
  { id: "studio", name: "Studio" },
  { id: "villa", name: "Villa" },
  { id: "duplex", name: "Duplex" },
  { id: "ferme", name: "Ferme" },
  { id: "penthouse", name: "Penthouse" },
  { id: "loft", name: "Loft" },
  { id: "chateau", name: "Château" },
  { id: "residence", name: "Résidence" },
  { id: "hangar", name: "Hangar" },
  { id: "entrepot", name: "Entrepôt" },
];

export const BIEN_IMMOBILIERS_CARDS: BienImmobilierProps[] = [
  {
    bienImmobilierId: 1,
    type: "House",
    images: [],
    updatedAt: "2024-05-11",
    price: 500000,
    transactionType: "vente",
    title: "Luxury Villa",
    description:
      "This luxurious villa offers breathtaking views and unparalleled amenities.",
  },
  {
    bienImmobilierId: 2,
    type: "Apartment",
    images: [],
    updatedAt: "2024-05-11",
    price: 250000,
    transactionType: "location",
    title: "Modern Apartment",
    description:
      "Stylish and modern apartment with convenient access to city amenities.",
  },
  {
    bienImmobilierId: 3,
    type: "House",
    images: [],
    updatedAt: "2024-05-11",
    price: 700000,
    transactionType: "vente",
    title: "Seaside Villa",
    description:
      "A charming villa by the sea, perfect for tranquil living and entertaining.",
  },
  {
    bienImmobilierId: 4,
    type: "Apartment",
    images: [],
    updatedAt: "2024-05-11",
    price: 150000,
    transactionType: "location",
    title: "Cozy Studio",
    description:
      "Compact studio apartment with modern furnishings and city views.",
  },
  {
    bienImmobilierId: 5,
    type: "House",
    images: [],
    updatedAt: "2024-05-11",
    price: 800000,
    transactionType: "vente",
    title: "Country Estate",
    description:
      "Expansive estate offering privacy, tranquility, and stunning countryside views.",
  },
  {
    bienImmobilierId: 6,
    type: "Apartment",
    images: [],
    updatedAt: "2024-05-11",
    price: 180000,
    transactionType: "location",
    title: "Downtown Loft",
    description:
      "Chic loft-style apartment in the heart of the city, ideal for urban living.",
  },
  {
    bienImmobilierId: 7,
    type: "House",
    images: [],
    updatedAt: "2024-05-11",
    price: 600000,
    transactionType: "vente",
    title: "Mountain Retreat",
    description:
      "Retreat to the mountains in this cozy yet luxurious mountain home.",
  },
  {
    bienImmobilierId: 8,
    type: "Apartment",
    images: [],
    updatedAt: "2024-05-11",
    price: 200000,
    transactionType: "location",
    title: "Riverside Condo",
    description:
      "Enjoy waterfront living in this modern condo with stunning river views.",
  },
  {
    bienImmobilierId: 9,
    type: "House",
    images: [],
    updatedAt: "2024-05-11",
    price: 900000,
    transactionType: "vente",
    title: "Golf Course Estate",
    description:
      "Live in luxury on the fairways with this elegant golf course estate.",
  },
  {
    bienImmobilierId: 10,
    type: "Apartment",
    images: [],
    updatedAt: "2024-05-11",
    price: 220000,
    transactionType: "location",
    title: "City View Penthouse",
    description:
      "Penthouse living with panoramic city views in this sophisticated urban retreat.",
  },
];

export const BIEN_IMMOBILIER: BienImmobilierFullProps = {
  bienImmobilierId: 1,
  type: "Appartement",
  images: [],
  updatedAt: "2022-05-11",
  price: 200000,
  transactionType: "vente",
  title: "Spacieux appartement au centre-ville",
  description:
    "This luxurious villa offers breathtaking views and Live in luxury on the fairways with this elegant golf course estate. unparalleled amenities. This luxurious Penthouse living with panoramic city views in this sophisticated urban retreat. villa offers breathtaking views and unparalleled amenities.",
  size: 100,
  location: "Paris, France",
  status: "active",
  createdAt: "2022-05-10T08:00:00Z",
  added_by: {
    email: "djaidrichouaib.24@gmail.com",
    fullName: "Djaidri chouaib",
    userId: 1,
  },
};
