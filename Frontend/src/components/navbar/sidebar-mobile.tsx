import { CircleGauge, Power, Settings, Menu, Package2 } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { SIDEBAR_ITEMS } from "./data";
import { isActiveSideBar } from "@/utils/paths";

const SidebarMobile = ({
  isAuth,
  isAdmin,
}: {
  isAuth: boolean;
  isAdmin: boolean;
}) => {
  const { pathname } = useLocation();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col w-full xs:max-w-sm p-4 lg:hidden"
        overlayClassName="lg:hidden"
      >
        <nav className="grid gap-8 text-lg font-medium">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold px-4"
          >
            <Package2 className="h-6 w-6" />
            <span>Akatsuki</span>
          </Link>
          <div className="flex flex-col gap-1">
            {SIDEBAR_ITEMS.map(({ Icon, label, to }) => (
              <NavLink
                key={label}
                to={to}
                end
                className={cn(
                  buttonVariants({
                    variant: isActiveSideBar(pathname, to)
                      ? "default"
                      : "ghost",
                  }),
                  "justify-start gap-2 items-center",
                  !isActiveSideBar(pathname, to) && "hover:bg-primary/10"
                )}
              >
                <Icon className="h-5 w-5" />
                {label}
              </NavLink>
            ))}
            {isAuth && !isAdmin && (
              <NavLink
                to={"/dashboard"}
                end
                className={cn(
                  buttonVariants({
                    variant: isActiveSideBar(pathname, "/dashboard")
                      ? "default"
                      : "ghost",
                  }),
                  "justify-start gap-2 items-center",
                  !isActiveSideBar(pathname, "/dashboard") &&
                    "hover:bg-primary/10"
                )}
              >
                <CircleGauge className="h-5 w-5" />
                Tableau de bord
              </NavLink>
            )}
            {isAdmin && (
              <NavLink
                to={"/admin"}
                end
                className={cn(
                  buttonVariants({
                    variant: isActiveSideBar(pathname, "/admin")
                      ? "default"
                      : "ghost",
                  }),
                  "justify-start gap-2 items-center",
                  !isActiveSideBar(pathname, "/admin") && "hover:bg-primary/10"
                )}
              >
                <CircleGauge className="h-5 w-5" />
                Administrateur
              </NavLink>
            )}
          </div>
        </nav>
        <div className="mt-auto w-full space-y-1">
          {isAuth ? (
            <>
              <NavLink
                to={"/edit-profile"}
                end
                className={cn(
                  buttonVariants({
                    variant: isActiveSideBar(pathname, "/edit-profile")
                      ? "default"
                      : "ghost",
                  }),
                  "justify-start gap-2 items-center",
                  !isActiveSideBar(pathname, "/edit-profile") &&
                    "hover:bg-primary/10"
                )}
              >
                <Settings className="h-5 w-5" />
                Modifier le profil
              </NavLink>
              <Button
                variant={"ghost"}
                className="justify-start gap-2 items-center w-full hover:bg-destructive hover:text-destructive-foreground"
              >
                <Power className="h-5 w-5" />
                Déconnexion
              </Button>
            </>
          ) : (
            <Button className="w-full" variant={"link"} asChild>
              <Link to={"/signup"}>S'inscrire</Link>
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobile;
