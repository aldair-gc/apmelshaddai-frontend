import { useState, useEffect } from "react";
import { PostContainer } from "./styles";
import { ButtonBar, Filters } from "../../styles/global";
import axios from "../../services/axios";
import MakePost, { Props as Post } from "./post";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";

interface Group {
  group: string;
  id: number;
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [filter, setFilter] = useState("");
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    async function getData() {
      const dataGroups = await axios.get('/group');
      setGroups(dataGroups.data);
      const dataPosts = await axios.get('/post');
      setPosts(dataPosts.data);
    }
    getData();
  }, []);


  function filterSelect(e: any) {
    setFilter(e.target.id)
  }

  const filteredPosts = filter != "0" ? posts.filter((post: any) => post.group == filter) : [];


  return (
    <main>
      <div className="bg-blues"></div>

      <ButtonBar>
        <Filters>
          <i className="fa-solid fa-filter"></i>
          <label htmlFor="0" className="groupname smallbutton">all
            <input type="radio" name="filter" id="0" value="all" className="all hidden" onClick={filterSelect} defaultChecked />
          </label>
          {groups.map((g: any) => (
            <label key={g.id} htmlFor={g.id} className="groupname smallbutton">{g.group}
              <input type="radio" name="filter" id={g.id} value={"group" + g.id} className="hidden" onClick={filterSelect} />
            </label>
          ))}
        </Filters>
        <Link to="/newpost" className="midbutton"><i className="fa-solid fa-square-plus"></i>New post</Link>
      </ButtonBar>

      <PostContainer>

        {(filteredPosts.length > 0 ? filteredPosts : posts).map((post: Post) => (
          <MakePost key={post.id} {...post} isLoggedIn={isLoggedIn} />
        ))}

      </PostContainer>
      <img alt="none" className="img_temp hidden" />
    </main>
  );
};
