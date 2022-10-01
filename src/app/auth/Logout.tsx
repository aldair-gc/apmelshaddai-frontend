import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../services/axios";
import { useAppDispatch } from "../hooks";
import { logout } from "./authSlice";
import { ButtonMid } from "../../styles/global"

export function AuthLogout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logOut = () => {
    try {
      dispatch(logout());
      delete axios.defaults.headers.common["Authorization"];
      toast.success("User logged out");
      navigate("/");
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [];
      errors.map((error: any) => toast.error(error));
    }
  }

  return (
    <ButtonMid onClick={logOut}><i className="fa-solid fa-right-from-bracket"></i>Logout</ButtonMid>
  )
}
