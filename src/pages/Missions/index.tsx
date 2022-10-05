import { useState, useEffect } from "react";
import { PostContainer } from "./styles";
import axios from "../../services/axios";
import MakePost, { Post } from "./post";
import { Container } from "../../styles/global";

export default function Missions() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function getData() {
      const dataPosts = await axios.get('/post');
      setPosts(dataPosts.data);
    }
    getData();
  }, []);

  return (
    <main>
      <div className="bg-blues"></div>

      <div className="block-bg-blue">
        <div className="square-container">
          <div className="block-flex-wrap">

            <div className="square">
              <div className="inner-square" id="missions">
                <div className="square-image"></div>
              </div>
            </div>

            <div className="square stretch">
              <div className="rectangle-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>

          </div>
        </div>
      </div>

      <PostContainer>
        {posts.map((post: Post) => (
          post.group === "missions" ? <MakePost key={post.id} {...post} /> : ""
        ))}
      </PostContainer>
    </main>
  );
};
