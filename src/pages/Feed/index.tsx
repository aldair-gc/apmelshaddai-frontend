import { Filters, Post, PostContainer, PostContent, PostControl, PostMedia, PostsContainer, PostTexts, PostTitle } from "./styles";
import { FilterMenu } from "../../styles/global";
import axios from "../../services/axios";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

export default function Feed() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [posts, setPosts] = useState([]);
  const [groups, setGroups] = useState([]);
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

  const filteredPosts = filter != "0"
    ? posts.filter((post: any) => post.group == filter)
    : [];

  return (
    <main>
      <div className="bg-blues"></div>
      <PostsContainer>
        <FilterMenu>
          <Filters>
            <li key="0" id="filter" className={filter}>
              <label htmlFor="0" className="groupname smallbutton">all
                <input type="radio" name="filter" id="0" value="all" className="all hidden" onClick={filterSelect} defaultChecked />
              </label>
            </li>
            {groups.map((g: any) => (
              <li key={g.id}>
                <label htmlFor={g.id} className="groupname smallbutton">{g.group}
                  <input type="radio" name="filter" id={g.id} value={"group" + g.id} className="hidden" onClick={filterSelect} />
                </label>
              </li>
            ))}
          </Filters>
        </FilterMenu>
        <PostContainer>

          {(filteredPosts.length > 0 ? filteredPosts : posts).map((post: any) => (
            <Post className={"group" + post.group}>

              <PostMedia>
                {post.Links[0]?.url
                  ?
                  <iframe
                    src={"https://www.youtube.com/embed/" + post.Links[0].url.split("/")[3]} title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                  :
                  <img className="post-media" src={post.Media[0]?.url ?? "https://apmelshaddai-server.aldairgc.com/medias/1663702606334_14165.jpg"}></img>
                }
              </PostMedia>

              <PostTexts>
                <PostTitle>{post.title}</PostTitle>
                <PostContent>{post.text}</PostContent>
              </PostTexts>

              {isLoggedIn ?
                <PostControl>
                  <a className="midbutton" href={"/post_editor?id=" + post.id}>
                    <i className="fa-solid fa-pen-to-square"></i>edit
                  </a>
                  <a className="midbutton font-red" href={"/post_delete?id=" + post.id}>
                    <i className="fa-solid fa-eraser"></i>delete
                  </a>
                </PostControl>
                : ""}

            </Post>
          ))}

        </PostContainer>
      </PostsContainer>
    </main >

  );
};
