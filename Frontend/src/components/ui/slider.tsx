import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, min, max, step, value, onValueChange, ...props }) => {
  const handleValueChange = (newValues: number[]) => {
    if (onValueChange) {
      onValueChange(newValues);
    }
  };

  return (
    <SliderPrimitive.Root
      min={min}
      max={max}
      step={step}
      value={value}
      onValueChange={handleValueChange}
      className={cn(
        "relative flex w-full touch-none select-none items-center cursor-pointer h-6",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-border/80">
        <SliderPrimitive.Range className="absolute h-full bg-primary/40" />
      </SliderPrimitive.Track>
      {value &&
        value.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full bg-primary transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
            </React.Fragment>
          );
        })}
    </SliderPrimitive.Root>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
