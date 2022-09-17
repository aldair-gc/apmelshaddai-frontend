import { Link } from "react-router-dom";
import "./style.css";

export const Login = () => {
  return (
    <main>
      <div className="bg-blues"></div>
      <div className="center-center">
        <div className="form-box login box">
          <h1>Login</h1>
          <form action="/php/login.php" method="post">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoComplete="email" placeholder="your@email.com" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" autoComplete="current-password" />
            <input type="submit" value="Login" />
          </form>
          <div>
            <Link to="/register">Register new user</Link>
            <Link to="/login?msg=it">Forgot the password</Link>
          </div>
        </div>
      </div>
    </main>
  );
};
