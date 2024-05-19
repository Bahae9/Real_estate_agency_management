import { createContext, useContext, useEffect, useMemo } from "react";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useLocalStorage } from "../hooks/use-local-storage";

interface AuthContextType {
  token: string | null;
  isAuth: boolean;
  saveToken: (data: string) => void;
  clearToken: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = () => {
  const { isAuth } = useLoaderData() as { isAuth: boolean };
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const saveToken = (data: string) => {
    setToken(data);
    navigate("/");
  };

  const clearToken = (to: string = "/login") => {
    setToken(null);
    navigate(to, { replace: true });
  };

  const value = useMemo(
    () => ({
      token,
      isAuth,
      saveToken,
      clearToken,
    }),
    [token, isAuth]
  );

  useEffect(() => {
    if (!isAuth && ["/login", "/signup"].includes(pathname)) {
      clearToken(pathname);
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider value={value}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
