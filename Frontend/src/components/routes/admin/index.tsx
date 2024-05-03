import StatusCard from "@/components/shared/cards/status-card";
import { Building, MessageSquare, Pickaxe, Users } from "lucide-react";
import Contracts from "./_components/contracts";
import Transactions from "./_components/transactions";

const Admin = () => {
  const statusCards = [
    {
      title: "Immobiliers",
      description:
        "Gère les données des propriétés disponibles à la vente ou à la location.",
      total: 20,
      Icon: Building,
      to: "biem-estate",
    },
    {
      title: "Clients",
      description:
        "Contient les informations sur les clients, incluant acheteurs et vendeurs.",
      total: 10,
      Icon: Users,
      to: "clients",
    },
    {
      title: "Agents",
      description:
        "Répertorie les agents et leurs détails pour faciliter la gestion des interactions.",
      total: 12,
      Icon: Pickaxe,
      to: "agents",
    },
    {
      title: "Retour d'information",
      description:
        "Archive les retours et les commentaires des utilisateurs sur les services.",
      total: 0,
      Icon: MessageSquare,
      to: "feedback",
    },
  ];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
        {statusCards.map((el) => (
          <StatusCard key={el.to} {...el} />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_3fr] 2xl:grid-cols-[3fr_2fr] gap-4">
        <Transactions />
        <Contracts />
      </div>
    </div>
  );
};

export default Admin;
