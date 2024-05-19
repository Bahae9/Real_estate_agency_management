import { createContext, useContext, useMemo, useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/use-local-storage";

interface AuthContextType {
  token: string | null;
  isAuth: boolean;
  saveToken: (data: string, expiresIn: number) => void;
  clearToken: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = () => {
  const { isAuth } = useLoaderData() as { isAuth: boolean };
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const navigate = useNavigate();

  const saveToken = (data: string) => {
    setToken(data);
    navigate("/");
  };

  const clearToken = () => {
    setToken(null);
    navigate("/login", { replace: true });
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
    if (!isAuth) {
      clearToken();
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
