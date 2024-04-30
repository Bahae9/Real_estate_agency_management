import { ContractProps, TransactionProps } from "@/types/db";

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
