import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CONTRACTS } from "@/data/db";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contracts() {
  return (
    <Card>
      <CardHeader className="flex flex-row gap-6 space-y-0">
        <div className="grid gap-2">
          <CardTitle>Contrats</CardTitle>
          <CardDescription
            className="line-clamp-2"
            title=" Les cinq derniers contrats signés aujourd'hui"
          >
            Les cinq derniers contrats signés aujourd'hui
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link to="contracts">
            Voir tout
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="grid gap-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Contrat Id</TableHead>
              <TableHead>Transaction Id</TableHead>
              <TableHead className="text-right">Contrat Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {CONTRACTS.map(({ idContrat, idTransaction, dateContrat }) => (
              <TableRow>
                <TableCell>
                  <div>{idContrat}</div>
                </TableCell>
                <TableCell>{idTransaction}</TableCell>
                <TableCell className="text-right">{dateContrat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
