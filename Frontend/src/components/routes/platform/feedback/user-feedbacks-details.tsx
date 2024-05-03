import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { ReviewProps } from ".";
import { userRandomReviews } from "../data";
import ReviewCard from "./_components/review-card";
import Stars from "./_components/stars";

const UserFeedbacksDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState<null | ReviewProps>(
    null
  );

  const [reviews, setReviews] = useState<ReviewProps[] | null>(null);

  function onDelete(id: number) {
    setReviews((prev) => (prev ? prev.filter((el) => el.id !== id) : null));
  }

  useEffect(() => {
    const fetchData = async () => {
      const fetcher = setTimeout(() => {
        setReviews(userRandomReviews);
      }, 1000);
      return () => {
        clearTimeout(fetcher);
      };
    };
    if (reviews) return;
    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row gap-6 space-y-0">
        <div className="grid gap-2">
          <CardTitle>Vos retours</CardTitle>
          <CardDescription
            className="line-clamp-2"
            title="Ce tableau montre seulement trois retours que vous avez soumis."
          >
            Ce tableau montre tous les retours que vous avez soumis.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-8">
        {reviews && reviews.length > 0 ? (
          <>
            <Table className="table-auto">
              <TableHeader>
                <TableRow>
                  <TableHead>Retour d'information</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Rates</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reviews.map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell
                      className="text-wrap w-[360px] line-clamp-3"
                      title={feedback.feedback}
                    >
                      {feedback.feedback}
                    </TableCell>
                    <TableCell>{feedback.date}</TableCell>
                    <TableCell>
                      <Stars rate={feedback.rate} />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => {
                            onDelete(feedback.id);
                          }}
                        >
                          <Trash size={20} className="text-destructive" />
                        </button>
                        <button
                          onClick={() => {
                            setIsOpen(true);
                            setCurrentFeedback(feedback);
                          }}
                        >
                          <Edit size={20} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {currentFeedback && (
              <Dialog
                open={isOpen}
                onOpenChange={(e) => {
                  setIsOpen(e);
                }}
                key={currentFeedback?.id}
              >
                <DialogContent className="max-w-2xl h-[90vh] md:h-fit">
                  <ReviewCard
                    className="border-0"
                    currentFeedback={currentFeedback}
                    setUserReviews={setReviews}
                    setIsOpen={setIsOpen}
                  />
                </DialogContent>
              </Dialog>
            )}
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

export default UserFeedbacksDetails;
