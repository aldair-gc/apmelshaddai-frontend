import { useState, useEffect } from "react";
import { PostContainer } from "./styles";
import { ButtonBar, Filters } from "../../styles/global";
import axios from "../../services/axios";
import MakePost, { Post } from "./post";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

interface Group {
  group: string;
  id: number;
}

export interface PostChange {
  id?: number;
  group?: string;
  title?: string;
  text?: string;
  Media?: [{
    url?: string;
    filename?: string;
  }]
  Links?: [{
    url?: string;
  }]
  delete: boolean;
}

export default function Feed() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [posts, setPosts] = useState<Post[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [filter, setFilter] = useState("");

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

  function onPostChange(changes: PostChange) {
    const newPosts = changes.delete ? posts.filter((post: Post) => (post.id !== changes.id)) : [...posts];

    // handle postDelet
    if (changes.delete === true) {
      setPosts(newPosts);
      return;
    };

    // handle changes
    newPosts.forEach((post: Post) => {
      if (post.id === changes.id) {
        if (changes.id !== undefined) post.id = changes.id;
        if (changes.group !== undefined) post.group = changes.group;
        if (changes.title !== undefined) post.title = changes.title;
        if (changes.text !== undefined) post.text = changes.text;
        if (changes.Media !== undefined) post.Media = [{ url: changes.Media[0].url as string, filename: changes.Media[0].filename as string }];
        if (changes.Links !== undefined) post.Links = [{ url: changes.Links[0].url as string }];
      };
    });
    setPosts(newPosts);
  }

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
        {isLoggedIn && <Link to="/newpost" className="midbutton"><i className="fa-solid fa-square-plus"></i>New post</Link>}
      </ButtonBar>

      <PostContainer>

        {(filteredPosts.length > 0 ? filteredPosts : posts).map((post: Post) => (
          <MakePost key={post.id} {...post} isLoggedIn={isLoggedIn} onPostChange={onPostChange} />
        ))}

      </PostContainer>
      <img alt="none" className="img_temp hidden" />
    </main>
  );
};
