import { Navigate, Outlet, Route, useLocation, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../store/modules/auth/slice";
import { useSelector } from "react-redux";

export default function Private() {
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ prevPath: pathname }} />;
}
