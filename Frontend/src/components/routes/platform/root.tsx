import { Outlet } from "react-router-dom";
import { ScrollArea } from "../../ui/scroll-area";
import { Navbar, Sidebar } from "@/components/navbar";
import { useAuth } from "@/components/contexts/auth-context";
import { jwtDecode } from "jwt-decode";

export default function Root() {
  const { token } = useAuth();
  const isAdmin = token
    ? (jwtDecode(token) as { roles: string })?.roles === "ADMIN"
    : false;
  return (
    <ScrollArea className="w-screen h-screen">
      <div className="grid h-screen w-full lg:grid-cols-[280px_1fr]">
        <Sidebar isAdmin={isAdmin} />
        <div className="flex flex-col">
          <Navbar isAdmin={isAdmin} />
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
