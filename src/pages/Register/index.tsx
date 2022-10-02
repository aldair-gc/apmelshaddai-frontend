import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import axios from "../../services/axios";
import { Container, SmallBox } from "../../styles/global";

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useLocation();

  async function handleSubmit(e: any) {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 100) {
      formErrors = true;
      toast.error("Invalid name");
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error("Invalid email address");
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error("Password must be between 6 and 50 characters");
    }

    if (formErrors) return;

    try {
      const response = await axios.post("/user", { name, email, password });
      if (response.status === 200) {
        toast.success("New user created");
        navigate(state?.prevPath || "/");
      } else {
        toast.error("Something went wrong...")
      }
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [];
      errors.map((error: any) => toast.error(error));
    }
  }

  return (
    <main>
      <div className="bg-blues"></div>

      <Container>
        <div className="center-center">

          <SmallBox>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                id="name"
                value={name}
                placeholder="Your Name"
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
              />
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
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleSubmit}>Register</button>
            </form>
          </SmallBox>

        </div>
      </Container>
    </main>
  );
};
