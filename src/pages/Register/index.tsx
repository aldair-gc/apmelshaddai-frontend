import { Link } from "react-router-dom";
import "./style.css";

export const Register = () => {
  return (
    <main>
      <div className="bg-blues"></div>

      <div className="center-center">
        <div className="form-box register box">
          <h1>Register</h1>
          <form action="/php/register.php" method="post">
            <label htmlFor="text">Name</label>
            <input type="text" name="name" id="name" autoComplete="name" placeholder="Your Name" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoComplete="email" placeholder="your@email.com" required />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" autoComplete="new-password" required />
            <input type="submit" value="Register" />
          </form>
          <div>
            <Link to="/login">Already registered</Link>
          </div>
        </div>
      </div>
    </main>
  );
};
