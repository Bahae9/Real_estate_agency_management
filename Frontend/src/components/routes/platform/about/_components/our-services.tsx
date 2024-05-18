import {
  CalendarClock,
  DollarSign,
  Heart,
  Sprout,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const OUR_SERVICES = [
  {
    title: "Location Immobilière",
    Icon: CalendarClock,
    description:
      "Notre service de location immobilière offre une expérience utilisateur exceptionnelle, alliant rapidité, efficacité, et confiance pour trouver les meilleures propriétés adaptées aux besoins de nos clients. Nous assurons un suivi attentif et une communication transparente tout au long du processus.",
  },
  {
    title: "Vente Immobilière",
    Icon: DollarSign,
    description:
      "Nous facilitons le processus de vente immobilière avec une approche personnalisée et professionnelle, garantissant confiance et satisfaction pour maximiser les résultats de nos clients. Nous proposons des solutions de vente innovantes et des conseils avisés.",
  },
  {
    title: "Conseil en Immobilier",
    Icon: Heart,
    description:
      "Nos experts en immobilier offrent des conseils avisés et personnalisés, axés sur la confiance et l'excellence, pour vous accompagner dans vos projets immobiliers. Nous mettons l'accent sur une expérience utilisateur positive et des solutions sur mesure.",
  },
  {
    title: "Amélioration Continue",
    Icon: Sprout,
    description:
      "Nous nous engageons à améliorer constamment notre agence et nos services, en intégrant les dernières technologies et les meilleures pratiques pour offrir à nos clients une expérience de qualité. Cela garantit une satisfaction client élevée et une gestion optimale de vos projets immobiliers.",
  },
  {
    title: "Confiance",
    Icon: ShieldCheck,
    description:
      "Nous accordons une importance primordiale à la confiance dans nos relations avec nos clients. Nous travaillons en toute transparence et honnêteté, garantissant ainsi des transactions sécurisées et fiables.",
  },
  {
    title: "Meilleure Expérience Utilisateur",
    Icon: Rocket,
    description:
      "Nous visons à offrir la meilleure expérience utilisateur possible grâce à des services personnalisés, une assistance attentive et une approche client centrée sur vos besoins. Notre objectif est de garantir votre satisfaction à chaque étape de votre projet immobilier.",
  },
];

const OurServices = () => {
  return (
    <section className="py-20 min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-60px)] flex justify-center items-center bg-muted">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-4xl font-semibold sm:text-5xl">Nos Services</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            Découvrez notre gamme complète de services conçus pour répondre à
            vos besoins spécifiques et vous offrir des solutions sur mesure.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 xl:grid-cols-3">
          {OUR_SERVICES.map(({ description, Icon, title }) => (
            <div
              className="rounded-lg border bg-white p-6 shadow-sm transition-all"
              key={title}
            >
              <div className="flex flex-col gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 mb-2">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p
                  className="text-muted-foreground line-clamp-2"
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

export default OurServices;
