import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../services/axios";
import { Container, FilterMenu } from "../../styles/global";
import { PostCreate } from "./styles";


interface Group {
  group: string;
  id: number;
}

interface Post {
  id: number;
  group: string;
  title: string;
  text: string;
}

export default function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const [groups, setGroups] = useState<Group[]>([]);
  const [post, setPost] = useState<Post>(Object);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    async function getData() {
      const dataGroups = await axios.get('/group');
      setGroups(dataGroups.data);
      const dataPost = await axios.get("/post/" + id);
      setPost(dataPost.data);
      setTitle(dataPost.data.title);
      setText(dataPost.data.text);
    }
    getData();
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    let errors = false;
    const inputs = document.querySelectorAll("input[name=group]");
    let group = 0;
    inputs.forEach((input: any) => { if (input.checked === true) group = (input.value) })

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
        const response = await axios.put("/post/" + id, { group, title, text });
        if (response.status === 200) {
          toast.success("Post edited");
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

  return (
    <main>
      <div className="bg-blues"></div>

      <Container>
        <FilterMenu>
          <Link className="midbutton" to="/feed"><i className="fa-solid fa-arrow-left"></i>back</Link>
          <Link className="midbutton" to="/groups"><i className="fa-solid fa-object-group"></i>groups</Link>
        </FilterMenu>

        <PostCreate className="box">
          <h2>Edit post</h2>

          <form onSubmit={handleSubmit}>
            Group:
            <div className="radio-list">

              {groups.map((g: any) => (
                <div key={g.id} className="radio-option">
                  {post.group === g.id
                    ? <input className="hidden" type="radio" name="group" id={g.group} value={g.id} defaultChecked />
                    : <input className="hidden" type="radio" name="group" id={g.group} value={g.id} />
                  }
                  <label htmlFor={g.group}>{g.group}</label>
                </div>
              ))}

            </div>

            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="text">Text:</label>
            <textarea name="text" id="text" cols={30} rows={14} value={text} onChange={(e) => setText(e.target.value)}></textarea>

            <input type="submit" value="Save changes" />
          </form>
        </PostCreate>
      </Container>
    </main>
  );
};
