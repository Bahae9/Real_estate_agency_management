import { useAuth } from "@/components/contexts/auth-context";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  // if (!token) {
  //   navigate("/login");
  //   return <></>;
  // }
  return <Outlet />;
};
