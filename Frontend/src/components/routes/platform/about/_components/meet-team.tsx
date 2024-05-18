import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TEAM = [
  {
    fullName: "Djaidri Chouabi",
    role: "Directeur Général",
    description:
      "Djaidri, âgé de 22 ans, est le fondateur et le moteur visionnaire de l'agence. Avec plus de vingt ans d'expérience dans le secteur immobilier, il est passionné par l'innovation et le développement durable. En dehors du travail, il aime la voile et la photographie.",
    imgUrl: "/avatars/djaidri.jpg",
  },
  {
    fullName: "Ferkacha Aymen",
    role: "Directeur Marketing",
    description:
      "Ferkacha, 21 ans, est à la tête de la stratégie marketing de l'agence. Créatif et avant-gardiste, il œuvre à renforcer la présence de l'agence sur le marché. Dans son temps libre, Sébastien est un passionné de cinéma et aime explorer les arts visuels.",
    imgUrl: "/avatars/ferkacha.jpg",
  },
  {
    fullName: "Lmtaii Bahaa",
    role: "Chef de Projet Location",
    description:
      "Lmtaii, 21 ans, gère tous les aspects des locations au sein de l'agence. Précis et organisé, il s'assure que les opérations se déroulent sans accroc. Julien est un grand fan de football et passe son temps libre à entraîner une équipe de jeunes.",
    imgUrl: "/avatars/lmtaii.jpg",
  },
  {
    fullName: "Saadi Zaid",
    role: "Responsable des Ventes",
    description:
      "Saadi, 22 ans, dirige l'équipe de vente avec un dynamisme contagieux. Il possède une expertise en négociation et en relation client, cherchant toujours la meilleure offre pour ses clients. Passionné de montagne, il pratique l'alpinisme et le ski.",
    imgUrl: "/avatars/saadi.jpg",
  },
];

const MeetTeam = () => {
  return (
    <section className="py-20">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-4xl font-semibold sm:text-5xl">
            Rencontrez Notre Équipe
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            Faites connaissance avec les professionnels passionnés qui composent
            notre équipe. Leur expertise et leur engagement sont au cœur de
            notre succès.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2 xl:grid-cols-4 lg:gap-12">
          {TEAM.map(({ description, fullName, role, imgUrl }) => (
            <div
              className="flex flex-col items-center space-y-4"
              key={fullName}
            >
              <Avatar className="h-36 w-36">
                <AvatarImage src={imgUrl} className="object-cover" />
                <AvatarFallback>{fullName.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-semibold">{fullName}</h3>
                <p className="text-muted-foreground">{role}</p>
                <p
                  className="text-sm text-muted-foreground line-clamp-4"
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

export default MeetTeam;
