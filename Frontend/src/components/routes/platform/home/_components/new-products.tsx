import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BienImmobilierProps } from "@/types/db";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const DATA: BienImmobilierProps[] = [
  {
    id: 1,
    type: "maison",
    taille: 150,
    prix: 300000,
    localisation: "paris",
    title: "Belle maison en centre-ville",
    description:
      "Cette belle maison spacieuse est située en plein cœur de Paris, offrant un accès facile aux commerces, aux restaurants et aux transports en commun. Avec ses 150m², elle comprend 3 chambres, 2 salles de bains, un grand salon lumineux et une cuisine entièrement équipée. Le jardin privé est un véritable havre de paix en plein centre-ville.",
    imgUrls: ["url1", "url2"],
    transactionType: "vente",
    status: "active",
    createdAt: "2024-05-10",
    updatedAt: "2024-05-10",
  },
  {
    id: 2,
    type: "appartement",
    taille: 100,
    prix: 200000,
    localisation: "lyon",
    title: "Appartement lumineux avec vue",
    description:
      "Cet appartement lumineux de 100m² offre une vue imprenable sur Lyon. Il dispose de 2 chambres, 1 salle de bain, un salon spacieux et une cuisine moderne. La résidence est sécurisée et bénéficie d'un accès facile aux transports en commun et aux commerces locaux.",
    imgUrls: ["url3", "url4"],
    transactionType: "location",
    status: "active",
    createdAt: "2024-05-10",
    updatedAt: "2024-05-10",
  },
  {
    id: 3,
    type: "terrain",
    taille: 200,
    prix: 50000,
    localisation: "marseille",
    title: "Terrain idéal pour construction",
    description:
      "Ce terrain de 200m² est idéalement situé à Marseille pour la construction d'une nouvelle résidence. Il offre un accès facile aux principales routes et aux commodités locales. La région est connue pour son climat agréable et son environnement paisible, offrant un cadre de vie idéal.",
    imgUrls: ["url5", "url6"],
    transactionType: "vente",
    status: "active",
    createdAt: "2024-05-10",
    updatedAt: "2024-05-10",
  },
  {
    id: 4,
    type: "appartement",
    taille: 80,
    prix: 150000,
    localisation: "Nice",
    title: "Appartement moderne proche de la plage",
    description:
      "Cet appartement moderne de 80m² est idéalement situé à Nice, à seulement quelques pas de la plage. Il dispose de 2 chambres, 1 salle de bain, un salon spacieux et une cuisine équipée. La résidence est sécurisée et bénéficie d'un accès facile aux transports en commun.",
    imgUrls: ["url7", "url8"],
    transactionType: "vente",
    status: "active",
    createdAt: "2024-05-10",
    updatedAt: "2024-05-10",
  },
  {
    id: 5,
    type: "maison",
    taille: 180,
    prix: 400000,
    localisation: "Bordeaux",
    title: "Grande maison familiale avec jardin",
    description:
      "Cette grande maison familiale de 180m² offre un cadre de vie idéal à Bordeaux. Elle comprend 4 chambres, 2 salles de bains, un grand salon lumineux et une cuisine moderne. Le jardin arboré offre un espace extérieur privé pour profiter du climat agréable de la région.",
    imgUrls: ["url9", "url10"],
    transactionType: "vente",
    status: "active",
    createdAt: "2024-05-10",
    updatedAt: "2024-05-10",
  },
  {
    id: 6,
    type: "appartement",
    taille: 85,
    prix: 250000,
    localisation: "Paris",
    title: "Bel appartement moderne au cœur de Paris",
    description:
      "Cet appartement moderne de 85m² est situé en plein cœur de Paris. Il comprend 2 chambres spacieuses, une salle de bain, un salon lumineux et une cuisine ouverte. Proche de toutes commodités, il offre une vue imprenable sur la ville et un accès facile aux transports en commun.",
    imgUrls: ["url11", "url12"],
    transactionType: "vente",
    status: "active",
    createdAt: "2024-05-10",
    updatedAt: "2024-05-10",
  },
];

const NewProducts = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-16 flex flex-col bg-muted">
      <div className="px-6 md:px-8 flex flex-col justify-center items-center gap-16 flex-1">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-4xl font-semibold sm:text-5xl">
            Nouveautés Immobilières
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            Explorez nos dernières propriétés ajoutées pour des options modernes
            et variées.
          </p>
        </div>
        <Carousel
          setApi={setApi}
          className="w-full max-w-sm sm:max-w-xl md:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl"
        >
          <CarouselContent>
            {DATA.map(
              ({
                id,
                title,
                description,
                prix,
                updatedAt,
                transactionType,
              }) => (
                <CarouselItem
                  className="basis-[85%] sm:basis-[70%] md:basis-[65%] xl:basis-[55%] 2xl:basis-[30%]"
                  key={id}
                >
                  <Card className="w-full overflow-hidden">
                    <div className="relative">
                      <img
                        alt="Product Image 1"
                        className="w-full h-60 object-cover"
                        height={400}
                        src="/backgrounds/hero.jpg"
                        width={600}
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            transactionType === "vente" ? "third" : "default"
                          }
                        >
                          {transactionType}
                        </Badge>
                        <p className="text-sm">{updatedAt}</p>
                      </div>
                      <div className="py-6 space-y-1">
                        <h3
                          className="text-xl font-semibold line-clamp-1"
                          title={title}
                        >
                          {title}
                        </h3>
                        <p
                          className="text-muted-foreground line-clamp-2"
                          title={description}
                        >
                          {description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-6">
                        <span className="text-2xl font-bold">{prix}DA</span>
                        <Button size="sm" className="gap-2">
                          Détails <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <div className="relative flex justify-between gap-8 mt-4">
            <div className="flex gap-1">
              <CarouselPrevious className="relative inset-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-y-0" />
            </div>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default NewProducts;
