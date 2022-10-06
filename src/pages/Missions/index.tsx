import { useState, useEffect, useLayoutEffect } from "react";
import { OuterBlock, PostContainer } from "./styles";
import axios from "../../services/axios";
import MakePost, { Post } from "./post";
import imgMissions from "../../assets/images/missions-small.jpeg";

export default function Missions() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function getData() {
      const dataPosts = await axios.get('/post');
      setPosts(dataPosts.data);
    }
    getData();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main>
      <div className="bg-blues"></div>

      <OuterBlock>
        <div className="bg-white column">
          <h1>MISSIONS</h1>
          <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit inventore laboriosam omnis in officiis aut, maiores quasi cum hic nam, blanditiis labore adipisci ipsa, ipsum sint nihil. Distinctio, natus?</i>
        </div>
      </OuterBlock>

      <OuterBlock>
        <div className="bg-darkblue row">
          <div className="half-screen">
            <img src={imgMissions} alt="Missions" />
          </div>

          <div className="half-screen">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </OuterBlock>

      <PostContainer>
        {posts.map((post: Post) => (
          Number(post.group) === 12 ? <MakePost key={post.id} {...post} /> : ""
        ))}
      </PostContainer>
    </main>
  );
};
