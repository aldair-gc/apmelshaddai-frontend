import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../services/axios";
import { Container, FilterMenu } from "../../styles/global";
import { PostCreate } from "./styles";


interface Group {
  group: string;
  id: number;
}

export default function EditPost(post: any) {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    async function getData() {
      const dataGroups = await axios.get('/group');
      setGroups(dataGroups.data);
    }
    getData();
  }, []);

  return (
    <main>
      <div className="bg-blues"></div>

      <Container>
        <FilterMenu>
          <ul>
            <li key="back"><Link className="midbutton" to="/feed"><i className="fa-solid fa-arrow-left"></i>back</Link></li>
          </ul>
          <ul>
            <li key="groups"><Link className="midbutton" to="/groups"><i className="fa-solid fa-object-group"></i>groups</Link></li>
          </ul>
        </FilterMenu>

        <PostCreate className="box">
          <h2>Create new post</h2>

          <form action="/post" method="POST">
            <label htmlFor="group">Group:</label>
            <div className="radio-list">

              {groups.map((g: any) => (
                <div className="radio-option">
                  <input className="hidden" type="radio" name="group" id={g.id} value={g.group} />
                  <label htmlFor={g.group}>{g.group}</label>
                </div>
              ))}

            </div>

            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" value={post.title} />

            <label htmlFor="text">Text:</label>
            <textarea name="text" id="text" cols={30} rows={14}>{post.text}</textarea>

            <input type="submit" value="Save changes" />
          </form>
        </PostCreate>
      </Container>
    </main>
  );
};
