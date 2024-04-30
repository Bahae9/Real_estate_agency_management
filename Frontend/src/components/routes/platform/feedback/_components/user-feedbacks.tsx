import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ReviewProps } from "..";
import Stars from "./stars";

const UserFeedbacks = ({ reviews }: { reviews: ReviewProps[] | null }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row gap-6 space-y-0">
        <div className="grid gap-2">
          <CardTitle>Vos retours</CardTitle>
          <CardDescription
            className="line-clamp-2"
            title="Ce tableau montre seulement trois retours que vous avez soumis."
          >
            Ce tableau montre seulement trois retours que vous avez soumis.
          </CardDescription>
        </div>
        {reviews && (
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link to="vos-retours">
              Détails
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardHeader>
      <CardContent className="grid gap-8">
        {reviews && reviews.length > 0 ? (
          <>
            <Table className="table-auto">
              <TableHeader>
                <TableRow>
                  <TableHead>Retour d'information</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Rates</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reviews.slice(0, 3).map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell
                      className="text-wrap w-[360px] line-clamp-3"
                      title={feedback.feedback}
                    >
                      {feedback.feedback}
                    </TableCell>
                    <TableCell>{feedback.date}</TableCell>
                    <TableCell>
                      <div className="ml-auto w-fit">
                        <Stars rate={feedback.rate} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        ) : reviews ? (
          <p>
            Nous aimerions connaître votre avis ! Merci de prendre un moment
            pour nous faire part de vos retours.
          </p>
        ) : (
          <Skeleton className="w-full h-[267px]" />
        )}
      </CardContent>
    </Card>
  );
};

export default UserFeedbacks;
