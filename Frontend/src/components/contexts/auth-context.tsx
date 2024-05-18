import { createContext, useContext, useMemo, useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/use-local-storage";

interface AuthContextType {
  token: string | null;
  saveToken: (data: string, expiresIn: number) => void;
  clearToken: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = () => {
  // const { isAuth } = useLoaderData() as { isAuth: boolean };

  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const navigate = useNavigate();

  const saveToken = (data: string, expiresIn: number) => {
    const expirationTime = new Date().getTime() + expiresIn;
    localStorage.setItem("tokenExpiration", expirationTime.toString());
    setToken(data);
    navigate("/");
  };

  const clearToken = () => {
    setToken(null);
    localStorage.removeItem("tokenExpiration");
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      token,
      saveToken,
      clearToken,
    }),
    [token]
  );

  // useEffect(() => {
  //   if (!isAuth) {
  //     clearToken();
  //   }
  // }, [isAuth]);

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
