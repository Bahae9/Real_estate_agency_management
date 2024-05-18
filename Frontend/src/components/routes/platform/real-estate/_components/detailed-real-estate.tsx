import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BIEN_IMMOBILIER } from "@/data/db";
import { cn } from "@/lib/utils";
import { BienImmobilierFullProps } from "@/types/db";
import { Grid2X2, MapPin } from "lucide-react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function loader({
  params,
}: {
  params: { realEstateId?: string };
}) {
  const realEstate =
    parseInt(params?.realEstateId as string) ===
    BIEN_IMMOBILIER.bienImmobilierId
      ? BIEN_IMMOBILIER
      : null;
  if (!realEstate) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { realEstate };
}

const DetailedRealEstate = () => {
  const [activeImage, setActiveImage] = useState(0);
  const IMAGES = ["/backgrounds/login.jpg", "/backgrounds/hero.jpg"];
  const { realEstate } = useLoaderData() as {
    realEstate: BienImmobilierFullProps;
  };
  const {
    title,
    description,
    price,
    transactionType,
    type,
    updatedAt,
    location,
    size,
    added_by: { fullName, email },
  } = realEstate;
  return (
    <div className="p-6 md:p-8 grid grid-cols-2 gap-6 md:gap-8 text-lg">
      <div className="flex flex-col gap-4">
        <div className="rounded-lg overflow-hidden">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={IMAGES[activeImage]}
          />
        </div>
        <div className="flex h-fit gap-4 flex-shrink-0 flex-wrap">
          {IMAGES.map((el, index) => (
            <div
              key={el}
              className={cn(
                "rounded-lg w-[100px] h-[100px] overflow-hidden cursor-pointer flex-shrink-0",
                activeImage !== index && "opacity-80 grayscale"
              )}
              onClick={() => {
                setActiveImage(index);
              }}
            >
              <img src={el} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div
          className="
        flex items-center justify-between gap-4"
        >
          <div className="flex flex-wrap gap-2">
            <Badge className="px-5 py-2 text-sm">{type}</Badge>
            <Badge
              className="px-5 py-2 text-sm"
              variant={transactionType === "vente" ? "third" : "forth"}
            >
              {transactionType}
            </Badge>
          </div>
          <p className="text-lg">{updatedAt}</p>
        </div>

        <div className="grid gap-4">
          <h1 className="font-bold text-5xl">{title}</h1>
          <div>
            <p>{description}</p>
          </div>
        </div>
        <div className="flex gap-16 items-center">
          <div className="flex gap-[9px] items-center text-lg font-semibold">
            <MapPin size={28} /> <p className="capitalize">{location}</p>
          </div>
          <div className="flex gap-2.5 items-center text-lg font-semibold">
            <Grid2X2 size={28} /> <p className="pt-0.5">{`${size} m²`}</p>
          </div>
        </div>
        <p className="text-4xl font-bold ml-auto">{price}DA</p>
        <div className="text-base">
          <p>
            Article publié par{" "}
            <span className="font-semibold capitalize">{fullName}</span> sur
            notre site web. Si vous souhaitez entrer en contact avec l'auteur,
            veuillez envoyer un e-mail à:
          </p>
          <Button
            asChild
            variant={"link"}
            className="text-base"
            onClick={(e) => {
              window.location.href = `mailto:${email}`;
              e.preventDefault();
            }}
          >
            <Link to={`mailto:${email}`}>{email}</Link>
          </Button>
        </div>

        <Button size={"lg"}>Demander l'achat</Button>
      </div>
    </div>
  );
};

export default DetailedRealEstate;
