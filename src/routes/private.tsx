import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export default function Private() {
  const { pathname } = useLocation();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ prevPath: pathname }} />;
}
