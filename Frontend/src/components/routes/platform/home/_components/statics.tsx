import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ArrowUpDown, Building, Users } from "lucide-react";

const STATICS = [
  {
    title: "Immobiliers",
    description: "+20",
    caption: "Nombre de biens immobiliers disponibles",
    Icon: Building,
  },
  {
    title: "Clients",
    description: "+10",
    caption: "Nombre de clients actuels ayant des transactions",
    Icon: Users,
  },
  {
    title: "Transactions",
    description: "+20",
    caption: "Nombre de transactions effectuées",
    Icon: ArrowUpDown,
  },
  {
    title: "Retours",
    description: "+50",
    caption: "Nombre de retours clients reçus",
    Icon: MessageSquare,
  },
];

const Statics = () => {
  return (
    <section>
      <div className="px-6 md:px-8 grid gap-6 md:gap-8">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {STATICS.map(({ Icon, description, title, caption }) => (
            <Card key={title}>
              <CardContent className="p-6 flex flex-col items-start gap-1">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-6 h-6" />
                  <h3 className="text-xl font-semibold pt-0.5">{title}</h3>
                </div>
                <div className="text-3xl font-bold">{description}</div>
                <p
                  className="text-muted-foreground line-clamp-2"
                  title={caption}
                >
                  {caption}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statics;
