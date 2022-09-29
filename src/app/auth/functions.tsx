
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import axios, { CommonHeaderProperties } from "../../services/axios";
import { useAppDispatch } from "../hooks";
import { authRequest, authSuccess, authFailure } from "./authSlice";


export async function loginRequest(email: string, password: string, prevPath: string) {
  const dispatch = useAppDispatch();

  try {
    dispatch(authRequest());
    const response = await axios.post("/token", { email, password });
    if (response.data.token) {
      axios.defaults.headers = { Authorization: `Bearer ${response.data.token}` } as CommonHeaderProperties;
      dispatch(authSuccess(response.data));
      toast.success(`Welcome ` + response.data.user.name);
      redirect(prevPath || "/");
    } else {
      dispatch(authFailure());
      toast.error("Something went wrong...")
    }
  } catch (err: any) {
    const errors = err.response?.data?.errors ?? [];
    errors.map((error: any) => toast.error(error.message));
  }
}
