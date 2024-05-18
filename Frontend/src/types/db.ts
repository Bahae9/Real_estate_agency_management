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

// new
export type UserDataProps = { userId: number; fullName: string; email: string };
export type UserFullDataProps = UserDataProps & {
  phoneNumber?: string;
  auth: 0 | 1;
};

export type FeedbackProps = {
  feedbackId: number;
  rate: number;
  feedback: string;
  date: string;
};
export type FullFeedbackProps = UserDataProps & FeedbackProps;

export type ImageData = Buffer | Uint8Array;

export type BienImmobilierProps = {
  bienImmobilierId: number;
  type: string;
  images: ImageData[];
  updatedAt: string;
  price: number;
  transactionType: "vente" | "location";
  title: string;
  description: string;
};

export type BienImmobilierFullProps = BienImmobilierProps & {
  size: number;
  location: string;
  status: "active" | "inactive" | "pending_approval" | "rejected";
  createdAt: string;
  added_by: UserDataProps;
};
