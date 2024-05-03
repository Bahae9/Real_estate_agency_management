import { GlobalReviewProps } from "..";
import Stars from "./stars";

const FeedbackCard = ({
  fullName,
  feedback,
  rate,
  date,
}: GlobalReviewProps) => {
  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <div className="space-y-1.5">
          <h4 className="font-semibold">{fullName}</h4>
          <p
            className="text-sm text-muted-foreground line-clamp-2"
            title={feedback}
          >
            {feedback}
          </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">{date}</p>
          <div className="flex items-center gap-0.5">
            <Stars rate={rate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
