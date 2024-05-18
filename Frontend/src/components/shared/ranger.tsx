import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Slider } from "../ui/slider";

type RangerProps = {
  setMinValue: (num: number) => void;
  setMaxValue: (num: number) => void;
  minValue: string;
  maxValue: string;
  min?: number;
  max?: number;
  stepBy?: number;
};

export default function Ranger({
  maxValue,
  minValue,
  setMaxValue,
  setMinValue,
  max = 1,
  min = 100,
  stepBy = 1,
}: RangerProps) {
  const onChangeHandler = (values: number[]) => {
    if (values[1] < values[0]) return;
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };
  const { watch, control, getFieldState } = useFormContext();
  const minRangeWatch = watch(minValue);
  const maxRangeWatch = watch(maxValue);

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <Slider
        min={min}
        step={stepBy}
        max={max}
        value={[minRangeWatch, maxRangeWatch]}
        onValueChange={(values: number[]) => {
          onChangeHandler(values);
        }}
      />
      <div className="w-full flex gap-4">
        <FormField
          control={control}
          name={minValue}
          render={({ field }) => (
            <FormItem className="flex-1 flex-shrink-0">
              <FormControl className="relative z-20">
                <Input
                  className={cn(
                    getFieldState(minValue).error &&
                      "border-destructive placeholder:text-destructive/60 text-destructive"
                  )}
                  {...field}
                  value={minRangeWatch}
                  onChange={(e) => {
                    const isNumber = Number.isInteger(Number(e.target.value));
                    setMinValue(
                      !isNumber
                        ? e.target.value
                        : +e.target.value > maxRangeWatch ||
                          +e.target.value < min
                        ? minRangeWatch
                        : Number(e.target.value)
                    );
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={maxValue}
          render={({ field }) => (
            <FormItem className="flex-1 flex-shrink-0">
              <FormControl className="relative z-20">
                <Input
                  className={cn(
                    "flex-grow flex-shrink-0",
                    getFieldState(maxValue).error &&
                      "border-destructive placeholder:text-destructive/60 text-destructive"
                  )}
                  {...field}
                  value={maxRangeWatch}
                  onChange={(e) => {
                    const isNumber = Number.isInteger(Number(e.target.value));
                    setMaxValue(
                      !isNumber
                        ? e.target.value
                        : +e.target.value < minRangeWatch ||
                          +e.target.value > max
                        ? maxRangeWatch
                        : Number(e.target.value)
                    );
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
