import { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../components/Loading";
import axios from "../../services/axios";
import { ButtonBar, Container, Filters } from "../../styles/global";
import { PostCreate } from "./style";


export const Prayer = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const form = {
      name: (e.target[0].value),
      email: (e.target[1].value),
      tel: (e.target[2].value),
      text: (e.target[3].value),
    }

    try {
      setIsLoading(true);
      const response = await axios.post("/prayer", form);
      if (response.status === 200) {
        toast.success("Message sent");
        navigate("/");
      } else {
        toast.error("Something went wrong");
      }
      setIsLoading(false);
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ "error": "Unknow error" }];
      errors.map((error: any) => toast.error(error));
      setIsLoading(false);
    }
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main>
      <div className="bg-blues"></div>

      <ButtonBar>
        <Link className="midbutton" to="/"><i className="fa-solid fa-arrow-left"></i>back</Link>
      </ButtonBar>

      <PostCreate className="box">
        <h2>Prayer request</h2>

        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" />

          <label htmlFor="tel">Tel:</label>
          <input type="tel" name="tel" id="tel" placeholder="Enter your phone number" />

          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" cols={30} rows={10} placeholder="Write your message here" autoCorrect="on"></textarea>

          <input type="submit" value="Send" />
        </form>
      </PostCreate>

      {isLoading && <Loading />}
    </main>
  );
};
