import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { GlobalReviewProps } from ".";
import { globalRandomReviews } from "../data";
import FeedbackCard from "./_components/feedback-card";

const FeedbacksDetails = () => {
  const [reviews, setReviews] = useState<GlobalReviewProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetcher = setTimeout(() => {
        setReviews(globalRandomReviews);
      }, 1000);
      return () => {
        clearTimeout(fetcher);
      };
    };
    if (reviews) return;
    fetchData();
  }, []);

  return (
    <div>
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
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {reviews.map((el) => (
                <FeedbackCard key={el.id} {...el} />
              ))}
            </div>
          ) : reviews ? (
            <p>
              Soyez le premier à nous faire part de vos retours et contribuez à
              façonner notre service !
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
                <Skeleton key={el} className="h-[98px] w-full" />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbacksDetails;
