import { useState } from "react";
import { Link, useLocation, redirect } from "react-router-dom";
import { LoginBox } from "./style";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import { loginRequest } from "../../store/modules/auth/slice";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useLocation();

  function handleSubmit(e: any) {
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
      loginRequest({ email, password });
      redirect(state.prevPath || "/");
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [];
      errors.map((error: any) => toast.error(error));
    }
  }

  return (
    <main>
      <div className="bg-blues"></div>
      <div className="center-center">
        <LoginBox className="form-box box">
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
            <input type="submit" value="Login" />
          </form>
          <div>
            <Link to="/register">Register new user</Link>
            <Link to="/login?msg=it">Forgot the password</Link>
          </div>
        </LoginBox>
      </div>
    </main >
  );
};
