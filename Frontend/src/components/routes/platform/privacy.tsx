import Footer from "@/components/footer";

const PRIVACY = [
  {
    id: "1",
    title: "Collecte des Informations",
    description:
      "Nous collectons des informations personnelles lorsque vous vous inscrivez sur notre plateforme, remplissez un formulaire, ou utilisez nos services. Ces informations peuvent inclure votre nom, adresse e-mail, numéro de téléphone, et d'autres données nécessaires à la fourniture de nos services.",
  },
  {
    id: "2",
    title: "Utilisation des Informations",
    description:
      "Les informations que nous collectons peuvent être utilisées pour personnaliser votre expérience et répondre à vos besoins individuels, améliorer notre service à la clientèle, traiter les transactions, ou vous envoyer des e-mails périodiques contenant des mises à jour sur nos services, etc.",
  },
  {
    id: "3",
    title: "Protection des Informations",
    description:
      "Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers sans votre consentement, sauf dans les cas prévus par la loi.",
  },
  {
    id: "4",
    title: "Cookies",
    description:
      "Nous utilisons des cookies pour comprendre et sauvegarder vos préférences pour vos prochaines visites, et compiler des données agrégées sur le trafic et les interactions du site afin d'améliorer l'expérience du site et les outils à l'avenir.",
  },
  {
    id: "5",
    title: "Divulgation à des Tiers",
    description:
      "Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles identifiables à des tiers. Cela n'inclut pas les tiers de confiance qui nous aident à exploiter notre site web ou à mener nos affaires, tant que ces parties acceptent de garder ces informations confidentielles.",
  },
  {
    id: "6",
    title: "Consentement",
    description:
      "En utilisant notre site, vous consentez expressément à notre politique de confidentialité rigoureusement appliquée.",
  },
];

const Privacy = () => {
  return (
    <>
      <section className="py-20 min-h-[calc(100vh-126px)] lg:min-h-[calc(100vh-130px)] flex justify-center items-center">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-semibold text-5xl">
              Politique de Confidentialité
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-xl">
              Nous assurons la sécurité de vos données. Découvrez comment dans
              notre politique de confidentialité. Votre confidentialité est
              notre priorité.
            </p>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 xl:grid-cols-3">
            {PRIVACY.map(({ description, title, id }) => (
              <div
                className="rounded-lg border bg-white p-6 shadow-sm transition-all"
                key={id}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p
                    className="text-muted-foreground line-clamp-3"
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
      <Footer />
    </>
  );
};

export default Privacy;
