import StatusCard from "@/components/shared/cards/status-card";
import { Building, MessageSquare, Pickaxe, Users } from "lucide-react";
import Contracts from "./_components/contracts";
import Transactions from "./_components/transactions";

const Admin = () => {
  const statusCards = [
    {
      title: "Real Estates",
      description: "Manages data for properties available for sale or rent.",
      total: 20,
      Icon: Building,
      to: "real-estates",
    },
    {
      title: "Clients",
      description:
        "Contains information about clients, including buyers and sellers.",
      total: 10,
      Icon: Users,
      to: "clients",
    },
    {
      title: "Agents",
      description:
        "Lists agents and their details to facilitate interaction management.",
      total: 12,
      Icon: Pickaxe,
      to: "agents",
    },
    {
      title: "Feedbacks",
      description: "Archives user feedback and comments on services.",
      total: 0,
      Icon: MessageSquare,
      to: "feedbacks",
    },
  ];

  return (
    <div className="space-y-4 p-6 md:p-8">
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
