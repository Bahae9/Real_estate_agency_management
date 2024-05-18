import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/40 border-t h-[70px] flex items-center">
      <div className="flex h-full w-full flex-col md:flex-row gap-1 items-center justify-center md:justify-between px-6 md:px-8">
        <p className="text-center sm:text-start font-semibold">
          © 2024 Akatsuki. Tous droits réservés.
        </p>
        <div className="flex gap-4 pt-0.5">
          <Button asChild variant={"link"}>
            <Link to="/privacy">Politique de confidentialité</Link>
          </Button>
          <Button asChild variant={"link"}>
            <Link to="/terms">Conditions d'utilisation</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
