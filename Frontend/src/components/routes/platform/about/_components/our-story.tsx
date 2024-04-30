const COMPANY_HISTORY = [
  {
    year: 2020,
    title: "Adaptation et Résilience",
    description:
      "Réponse rapide aux défis de la pandémie, adaptation des processus de vente et de location pour garantir la sécurité de tous.",
  },
  {
    year: 2022,
    title: "Expansion Régionale",
    description:
      "Ouverture de nouvelles agences dans plusieurs régions clés, augmentant significativement notre portée et notre impact sur le marché immobilier local.",
  },
  {
    year: 2023,
    title: "Expansion et Innovation",
    description:
      "Lancement de nouvelles technologies pour améliorer la gestion immobilière et l'expérience client. Introduction d'une plateforme en ligne interactive.",
  },
  {
    year: 2024,
    title: "Croissance Durable",
    description:
      "Focus sur la durabilité et expansion du portefeuille immobilier avec des projets éco-responsables. Établissement de partenariats stratégiques.",
  },
];

const OurStory = () => {
  return (
    <section>
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-4xl font-semibold sm:text-5xl">
            L'histoire de Notre Agence
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            Découvrez les visages derrière notre succès. Nos experts dévoués
            sont prêts à vous accompagner dans tous vos projets immobiliers.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 lg:gap-8">
          {COMPANY_HISTORY.map(({ description, title, year }) => (
            <div
              className="rounded-lg border p-6 shadow-sm transition-all"
              key={year}
            >
              <div className="space-y-2">
                <div className="text-2xl font-bold">{year}</div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p
                  className="text-muted-foreground line-clamp-4"
                  title={description}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
