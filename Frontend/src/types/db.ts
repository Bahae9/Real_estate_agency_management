export interface ContractProps {
  idContrat: number;
  idTransaction: number;
  dateContrat: string;
  documentPath: string;
}
export interface TransactionProps {
  idTransaction: number;
  typeTransaction: string;
  montant: number;
  idVendeur: number;
  idAcheteur: number;
  idPropriete: number;
}

export type SharedUserDataProps = {
  fullName: string;
  email: string;
};

export type UserDataProps = SharedUserDataProps & { userId: number };
