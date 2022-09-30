import { PostContainer, Post, PostMedia, PostTexts, PostContent, PostTitle, PostControl } from "./styles";
import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { useAppSelector } from "../../app/hooks";

export default function Posts() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const dataPosts = await axios.get('/post');
      setPosts(dataPosts.data);
    }
    getData();
  }, []);

  return (
    <PostContainer>

      {posts.map((post: any) => (
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
  );
};
