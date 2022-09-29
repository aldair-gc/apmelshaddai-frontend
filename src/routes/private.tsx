import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function Private() {
  const { pathname } = useLocation();
  const isLoggedIn = true;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ prevPath: pathname }} />;
}
