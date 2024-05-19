import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { generateBreadcrumbPaths } from "@/utils/paths";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import SidebarMobile from "./sidebar-mobile";
import { useAuth } from "../contexts/auth-context";

const Navbar = ({ isAdmin }: { isAdmin: boolean }) => {
  const { pathname } = useLocation();
  const breadcrumbItems = generateBreadcrumbPaths(pathname);
  const { isAuth } = useAuth();
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6 md:px-8">
      <SidebarMobile isAdmin={isAdmin} />
      <div className="w-full flex-1">
        <Breadcrumb className="hidden lg:flex">
          <BreadcrumbList>
            {breadcrumbItems.length > 0 ? (
              <>
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {item.isLast ? (
                        <BreadcrumbPage>{item.name}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={item.path}>{item.name}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {!item.isLast && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
              </>
            ) : (
              <>
                <BreadcrumbItem>
                  <BreadcrumbPage>Accueil</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {!isAuth && (
        <Button asChild>
          <Link to={"/login"}>Connexion</Link>
        </Button>
      )}
    </header>
  );
};

export default Navbar;
