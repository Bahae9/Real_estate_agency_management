import { Package2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-12 min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-60px)] flex justify-center items-center">
      <div className="container max-w-6xl grid items-center justify-center gap-10 px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <Package2 className="h-20 w-20" />
          <h1 className="text-5xl font-semibold">Akatsuki</h1>
          <div className="space-y-2 mt-4 text-lg">
            <p>
              Bienvenue chez Akatsuki, votre partenaire de confiance dans la
              gestion immobilière. Spécialisée dans la vente et la location de
              propriétés, notre agence s'engage à offrir des services sur mesure
              pour répondre à tous vos besoins immobiliers. Notre équipe
              expérimentée est à votre service pour vous guider à chaque étape
              de votre projet, depuis la recherche de la propriété idéale
              jusqu'à la conclusion de transactions réussies. Nous veillons à
              garantir une expérience client exceptionnelle, axée sur la
              transparence et la communication ouverte.
            </p>
            <p>
              Nous mettons l'accent sur la transparence, la confiance et une
              communication ouverte pour bâtir des relations solides avec nos
              clients. Grâce à notre connaissance approfondie du marché local et
              à notre approche personnalisée, nous sommes en mesure de vous
              offrir des conseils avisés et des stratégies adaptées à vos
              objectifs.
            </p>
            <p>
              Chez Akatsuki, nous investissons dans les dernières technologies
              et méthodes innovantes pour garantir des solutions efficaces et
              une expérience client exceptionnelle. Faites confiance à notre
              expertise pour réaliser vos rêves immobiliers et maximiser votre
              succès. Nous sommes là pour vous accompagner dans vos projets
              immobiliers, qu'il s'agisse de location ou de vente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
