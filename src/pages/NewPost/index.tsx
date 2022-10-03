import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../services/axios";
import { Container, FilterMenu } from "../../styles/global";
import { NewPostContainer, PostCreate } from "./styles";

export default function NewPost() {
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function getData() {
      const dataGroups = await axios.get('/group');
      setGroups(dataGroups.data);
    }
    getData();
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    let errors = false;
    const inputs = document.querySelectorAll("input[name=group]");
    let group = 0;
    inputs.forEach((input: any) => { if (input.checked === true) group = (input.value) })
    const title = (document.querySelector("input[name=title]") as HTMLInputElement).value;
    const text = (document.querySelector("#text") as HTMLInputElement).value;

    if (group === 0) {
      errors = true;
      toast.error("A group must be selected")
    }

    if (title.length < 1) {
      errors = true;
      toast.error("The title must be fulfilled")
    }

    if (title.length > 250) {
      errors = true;
      toast.error("The title is too long")
    }

    if (!text) {
      errors = true;
      toast.error("The text must not be empty")
    }

    if (!errors) {
      try {
        const response = await axios.post("/post", { group, title, text });
        if (response.status === 200) {
          toast.success("Post created");
          navigate("/feed");
        } else {
          toast.error("Something went wrong");
        }
      } catch (err: any) {
        const errors = err.response?.data?.errors ?? [];
        errors.map((error: any) => toast.error(error));
      }
    }
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main>
      <div className="bg-blues"></div>

      <NewPostContainer>
        <FilterMenu>
          <Link className="midbutton" to="/feed"><i className="fa-solid fa-arrow-left"></i>back</Link>
          <Link className="midbutton" to="/groups"><i className="fa-solid fa-object-group"></i>groups</Link>
        </FilterMenu>

        <PostCreate className="box">
          <h2>Create new post</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="group">Group:</label>
            <div className="radio-list">

              {groups.map((g: any) => (
                <div className="radio-option">
                  <input className="hidden" type="radio" name="group" id={g.group} value={g.id} />
                  <label htmlFor={g.group}>{g.group}</label>
                </div>
              ))}

            </div>

            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" />

            <label htmlFor="text">Text:</label>
            <textarea name="text" id="text" cols={30} rows={14}></textarea>

            <input type="submit" value="Create" />
          </form>
        </PostCreate>
      </NewPostContainer>
    </main>
  );
};
