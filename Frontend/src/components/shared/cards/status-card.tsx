import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusCardProps } from "@/types/cards";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function StatusCard({
  title,
  total,
  description,
  Icon,
  to,
}: StatusCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 gap-2 pb-2">
        <CardTitle className="text-lg font-medium line-clamp-1" title={title}>
          {title}
        </CardTitle>
        <Icon className="h-8 w-8 text-muted-foreground flex-shrink-0" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">+{total}</div>
        <p
          className="text-xs text-muted-foreground line-clamp-3"
          title={description}
        >
          {description}
        </p>
        <Link
          className="w-fit ml-auto flex items-center gap-2 mt-4 hover:underline"
          to={to}
        >
          Détails
          <MoveRight />
        </Link>
      </CardContent>
    </Card>
  );
}
