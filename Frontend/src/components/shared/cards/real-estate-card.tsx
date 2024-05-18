import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BienImmobilierProps } from "@/types/db";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const RealEstateCard = ({
  transactionType,
  updatedAt,
  description,
  title,
  price,
  bienImmobilierId,
}: BienImmobilierProps) => {
  return (
    <Card className="w-full overflow-hidden">
      <div className="relative">
        <img
          alt="Product Image 1"
          className="w-full h-60 object-cover"
          height={400}
          src="/backgrounds/hero.jpg"
          width={600}
        />
      </div>
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <Badge variant={transactionType === "vente" ? "third" : "default"}>
            {transactionType}
          </Badge>
          <p className="text-sm">{updatedAt}</p>
        </div>
        <div className="py-6 space-y-1">
          <h3 className="text-xl font-semibold line-clamp-1" title={title}>
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2" title={description}>
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-6">
          <span className="text-xl font-bold">{price}DA</span>
          <Button size="sm" className="gap-2" asChild>
            <Link to={`/real-estate/${bienImmobilierId}`}>
              Détails <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealEstateCard;
