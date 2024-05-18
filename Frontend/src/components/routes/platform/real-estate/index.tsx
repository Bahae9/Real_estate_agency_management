import RealEstateCard from "@/components/shared/cards/real-estate-card";
import { BIEN_IMMOBILIERS_CARDS } from "@/data/db";
import { useState } from "react";
import Filters from "./_components/filters";
import FiltersMobile from "./_components/filters-mobile";

const RealEstate = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className="p-6 md:p-8 grid grid-cols-1 2xl:grid-cols-[1fr_400px] gap-6 md:gap-8 justify-center">
        <FiltersMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {BIEN_IMMOBILIERS_CARDS.map((card) => (
            <RealEstateCard key={card.bienImmobilierId} {...card} />
          ))}
        </div>
        <Filters className="hidden 2xl:flex" />
      </div>
    </section>
  );
};

export default RealEstate;
