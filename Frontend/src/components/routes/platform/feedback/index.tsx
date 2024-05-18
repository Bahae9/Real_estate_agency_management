import { RateRange } from "@/types/helper";
import { useEffect, useState } from "react";
import GlobalFeedbacks from "./_components/global-feedbacks";
import RatingCard from "./_components/rating-card";
import UserFeedbacks from "./_components/user-feedbacks";
import ReviewCard from "./_components/review-card";
import {
  globalRandomReviews,
  initialRateProgress,
  userRandomReviews,
} from "../data";
import { UserDataProps } from "@/types/db";

export type RatesProps = {
  rate: number;
  id: number;
};

export type GlobalReviewProps = ReviewProps & UserDataProps;

export type ReviewProps = {
  id: number;
  feedback: string;
  date: string;
} & RatesProps;

export type RateProgressProps = { [key in RateRange]: number };

const Feedback = () => {
  const [rates, setRates] = useState<null | RatesProps[]>(null);
  const [rateProgress, setRateProgress] =
    useState<RateProgressProps>(initialRateProgress);
  const [userReviews, setUserReviews] = useState<ReviewProps[] | null>(null);
  const [globalReviews, setGlobalReviews] = useState<
    GlobalReviewProps[] | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetcher = setTimeout(() => {
        setUserReviews(userRandomReviews);
        setGlobalReviews(globalRandomReviews);
        let rates = [] as RatesProps[];
        if (userRandomReviews.length > 0) {
          rates = userRandomReviews.map(({ rate, id }) => ({ rate, id }));
        }
        if (globalRandomReviews.length > 0) {
          rates = rates.concat(
            globalRandomReviews.map(({ rate, id }) => ({
              rate,
              id,
            }))
          );
        }
        setRates(rates);
        if (rates.length > 0) {
          setRateProgress({
            5: rates.filter((el) => el.rate === 5).length,
            4: rates.filter((el) => el.rate === 4).length,
            3: rates.filter((el) => el.rate === 3).length,
            2: rates.filter((el) => el.rate === 2).length,
            1: rates.filter((el) => el.rate === 1).length,
          });
        }
      }, 1000);
      return () => {
        clearTimeout(fetcher);
      };
    };
    if (rates && userReviews && globalReviews) return;
    fetchData();
  }, []);

  useEffect(() => {
    if (rates && rates.length > 0) {
      setRateProgress({
        5: rates.filter((el) => el.rate === 5).length,
        4: rates.filter((el) => el.rate === 4).length,
        3: rates.filter((el) => el.rate === 3).length,
        2: rates.filter((el) => el.rate === 2).length,
        1: rates.filter((el) => el.rate === 1).length,
      });
    }
  }, [rates]);

  return (
    <section>
      <div className="grid 2xl:grid-cols-[1fr_400px] gap-4 p-6 md:p-8">
        <div className="flex flex-col gap-4">
          <ReviewCard
            setUserReviews={setUserReviews}
            setRates={setRates}
            max={3}
          />
          <UserFeedbacks reviews={userReviews} />
        </div>
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-4">
            <RatingCard rates={rates} rateProgress={rateProgress} />
            <GlobalFeedbacks reviews={globalReviews} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
