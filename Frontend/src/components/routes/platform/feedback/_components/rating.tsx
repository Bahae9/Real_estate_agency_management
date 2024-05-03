import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import Emojies from "./emojies";
import { Star } from "./stars";

type RatingProps = {
  setRate: (event: number) => void;
  rate: number;
};

function Rating({ rate, setRate }: RatingProps) {
  const emojiWraperAnimation = {
    translateY:
      rate === 0
        ? 0
        : rate === 1
        ? -116
        : rate === 2
        ? -232
        : rate === 3
        ? -348
        : rate === 4
        ? -464
        : -580,
  };
  return (
    <div className="bg-background-alt border rounded-lg flex justify-center items-center w-full min-h-[260px]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[100px] h-[100px] overflow-hidden">
          <motion.div
            className="space-y-4"
            animate={emojiWraperAnimation}
            initial={emojiWraperAnimation}
            transition={{ duration: 0.2 }}
          >
            {["default", "sobad", "bad", "ok", "good", "sogood"].map(
              (el, index) => (
                <motion.div
                  animate={{ scale: index === rate ? 1 : 0.2 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  key={el}
                  className={el === "default" ? "grayscale" : ""}
                >
                  <Emojies emoji={el} />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
        <RadioGroup
          defaultValue={rate.toString()}
          className="flex gap-1.5"
          onValueChange={(e) => {
            setRate(+e);
          }}
        >
          {["1", "2", "3", "4", "5"].map((el) => (
            <div key={el}>
              <label className="cursor-pointer">
                <RadioGroupItem value={el} className={"hidden"} />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Star isActive={+el <= rate} />
                </motion.div>
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

export default Rating;
