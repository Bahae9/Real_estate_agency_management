import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GlobalReviewProps } from "..";
import FeedbackCard from "./feedback-card";

const GlobalFeedbacks = ({
  reviews,
}: {
  reviews: GlobalReviewProps[] | null;
}) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Nos retours clients</CardTitle>
        <CardDescription>
          Découvrez les trois avis les plus positifs de nos clients qui
          reflètent notre engagement envers l'excellence et la satisfaction
          client.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {reviews && reviews.length > 0 ? (
          <div className="grid gap-6">
            {reviews.slice(0, 3).map((el) => (
              <FeedbackCard key={el.id} {...el} />
            ))}
          </div>
        ) : reviews ? (
          <p>
            Soyez le premier à nous faire part de vos retours et contribuez à
            façonner notre service !
          </p>
        ) : (
          <div className="grid gap-6">
            <Skeleton className="h-[98px] w-full" />
            <Skeleton className="h-[98px] w-full" />
            <Skeleton className="h-[98px] w-full" />
          </div>
        )}
      </CardContent>
      {reviews && reviews.length > 0 && (
        <CardFooter>
          <Button asChild size="sm" className="ml-auto gap-1 mt-2">
            <Link to="nos-retours-clients">
              Voir tout
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default GlobalFeedbacks;
