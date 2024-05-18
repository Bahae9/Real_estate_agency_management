import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const NotFound = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-12 text-9xl font-extrabold text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mt-4 font-bold text-4xl">Page non trouvée</p>
          <p className="my-2 text-lg text-muted-foreground">
            Désolé, la page que vous recherchez semble introuvable. Il est
            possible qu'elle ait été déplacée ou supprimée. Veuillez vérifier
            l'URL ou retourner à la page précédente.
          </p>
          <Button asChild>
            <Link to="/" className="gap-2 mt-4">
              Retour à la page d'accueil
              <MoveRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
