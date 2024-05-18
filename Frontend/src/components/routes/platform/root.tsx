import { Outlet } from "react-router-dom";
import { ScrollArea } from "../../ui/scroll-area";
import { Navbar, Sidebar } from "@/components/navbar";

export default function Root() {
  const isAuth = true;
  const isAdmin = true;
  return (
    <ScrollArea className="w-screen h-screen">
      <div className="grid h-screen w-full lg:grid-cols-[280px_1fr]">
        <Sidebar isAuth={isAuth} isAdmin={isAdmin} />
        <div className="flex flex-col">
          <Navbar isAuth={isAuth} isAdmin={isAdmin} />
          <ScrollArea className="w-full h-[calc(100vh-56px)] lg:h-[calc(100vh-60px)]">
            <main className="flex flex-1 flex-col min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-60px)]">
              <Outlet />
            </main>
          </ScrollArea>
        </div>
      </div>
    </ScrollArea>
  );
}
