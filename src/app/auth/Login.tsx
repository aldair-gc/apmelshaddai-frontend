import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import axios from "../../services/axios";
import { useAppSelector, useAppDispatch } from "../hooks";
import { authRequest, authSuccess, authFailure } from "./authSlice";

export function AuthLogin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  if (auth.isLoggedIn) navigate("/management");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const prevPath = useLocation()?.state?.prevPath ?? "/";

  async function handleSubmit(e: any) {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error("Invalid email address");
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error("Invalid password");
    }

    if (formErrors) return;

    try {
      dispatch(authRequest());
      const response = await axios.post("/token", { email, password });
      if (response.data.token) {
        dispatch(authSuccess(response.data));
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        localStorage.setItem("token", response.data.token);
        navigate(prevPath);
        toast.success(`Welcome ` + response.data.user.name);
      } else {
        dispatch(authFailure());
        toast.error("Something went wrong...")
      }
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ "error": "Unknown error" }];
      errors.map((error: any) => toast.error(error));
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="your@email.com"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="your password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}
