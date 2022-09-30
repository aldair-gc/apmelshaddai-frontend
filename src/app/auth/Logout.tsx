import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../services/axios";
import { useAppDispatch } from "../hooks";
import { logout } from "./authSlice";

export function AuthLogout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function handleSubmit() {

    try {
      dispatch(logout());
      axios.defaults.headers.common["Authorization"] = ``;
      toast.success("User logged out");
      navigate("/");
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [];
      errors.map((error: any) => toast.error(error));
    }
  }

  return (
    <button onClick={() => handleSubmit}><i className="fa-solid fa-right-from-bracket"></i>Logout</button>
  )
}
