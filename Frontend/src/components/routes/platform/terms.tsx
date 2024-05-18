import Footer from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TERMS = [
  {
    id: "1",
    title: "Acceptation des Conditions",
    description:
      "En accédant ou en utilisant notre site web, notre application mobile ou l'un de nos services, vous acceptez de vous conformer à ces Conditions d'Utilisation. Si vous n'êtes pas d'accord avec une partie de ces termes, vous ne pouvez pas accéder à nos services.",
  },
  {
    id: "2",
    title: "Service Description",
    description:
      "Akatsuki propose une gamme étendue de services de gestion immobilière, comprenant la publication d'annonces de biens, la gestion des locataires avec suivi des paiements et des réparations, ainsi que la coordination des services de maintenance, le tout accessible via notre plateforme en ligne sécurisée ainsi que d'autres canaux de communication.",
  },
  {
    id: "3",
    title: "Account Registration",
    description:
      "Pour bénéficier de l'ensemble des fonctionnalités de nos services, vous devrez créer un compte personnel. Vous êtes tenu de garder confidentielles vos informations de compte et vous engagez à assumer la responsabilité de toutes les activités effectuées sous votre compte.",
  },
  {
    id: "4",
    title: "User Conduct",
    description:
      "En utilisant nos services, vous vous engagez à les utiliser uniquement à des fins légales et conformément aux présentes Conditions d'Utilisation. Vous vous interdisez toute conduite contraire aux lois ou réglementations applicables ainsi que toute utilisation abusive de nos services.",
  },
  {
    id: "5",
    title: "Property Listings",
    description:
      "Akatsuki affiche des annonces immobilières provenant de propriétaires ou de tiers. Bien que nous nous efforcions de garantir l'exactitude et la complétude de ces annonces, nous ne pouvons garantir qu'elles sont toujours à jour ou exemptes d'erreurs.",
  },
  {
    id: "6",
    title: "Fees and Payments",
    description:
      "Certains services proposés par Akatsuki peuvent être soumis à des frais. En utilisant ces services, vous acceptez de régler les frais applicables selon les modalités indiquées sur notre plateforme ou communiquées de toute autre manière.",
  },
  {
    id: "7",
    title: "Intellectual Property",
    description:
      "Tous les contenus présents sur notre plateforme, tels que les textes, les graphiques, les logos, les images et les logiciels, sont la propriété d'Akatsuki ou de ses concédants de licence et sont protégés par le droit d'auteur ainsi que d'autres lois applicables en matière de propriété intellectuelle.",
  },
  {
    id: "8",
    title: "Privacy Policy",
    description:
      "Votre utilisation de nos services est également soumise à notre Politique de Confidentialité, qui précise comment nous collectons, utilisons et protégeons vos informations personnelles. En utilisant nos services, vous consentez à ce que vos informations personnelles soient traitées conformément à cette Politique de Confidentialité.",
  },
  {
    id: "9",
    title: "Termination",
    description:
      "Akatsuki se réserve le droit de résilier ou de suspendre votre accès à nos services à tout moment, sans préavis ni responsabilité, si vous violez ces Conditions d'Utilisation ou pour toute autre raison jugée nécessaire par Akatsuki.",
  },
  {
    id: "10",
    title: "Changes to Terms",
    description:
      "Akatsuki se réserve le droit de modifier ou de mettre à jour ces Conditions d'Utilisation à tout moment. Nous vous informerons de tout changement en publiant les nouveaux termes sur notre plateforme. Votre utilisation continue de nos services après de telles modifications constitue votre acceptation des nouvelles conditions.",
  },
];

const Terms = () => {
  return (
    <>
      <section className="py-20 min-h-[calc(100vh-126px)] lg:min-h-[calc(100vh-130px)] flex justify-center items-center">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="max-w-[1000px] font-semibold text-5xl">
              Conditions d'utilisation
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-xl">
              Bienvenue aux Conditions d'Utilisation d'Akatsuki. En utilisant
              nos services, vous acceptez ces conditions.
            </p>
          </div>
          <div className="mt-8 grid gap-0 md:gap-8 md:grid-cols-2 px-4">
            <Accordion type="multiple" className="w-full">
              {TERMS.slice(0, 5).map(({ id, title, description }) => (
                <AccordionItem value={id}>
                  <AccordionTrigger className="gap-2 text-start text-xl font-medium">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="text-start text-base text-muted-foreground">
                    {description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="multiple" className="w-full">
              {TERMS.slice(5).map(({ id, title, description }) => (
                <AccordionItem value={id}>
                  <AccordionTrigger className="gap-2 text-start text-xl font-medium">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="text-start text-base text-muted-foreground">
                    {description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Terms;
