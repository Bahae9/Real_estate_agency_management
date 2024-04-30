import { RateProgressProps } from "@/components/routes/platform/feedback";
import { RateRange } from "@/types/helper";

export const calculateRatePercentage = (
  rateProgress: RateProgressProps,
  rating: RateRange,
  ratesLength?: number
): number => {
  return +((rateProgress[rating] * 100) / (ratesLength || 1)).toFixed(2);
};

export const getTheMiddleRate = (
  rateProgress: RateProgressProps,
  ratesLength?: number
) => {
  return (
    (rateProgress[1] +
      rateProgress[2] * 2 +
      rateProgress[3] * 3 +
      rateProgress[4] * 4 +
      rateProgress[5] * 5) /
    (ratesLength || 1)
  );
};
