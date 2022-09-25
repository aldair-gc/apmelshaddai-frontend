import "./style.css";
import { useEffect, useState } from "react";
import axios from "../../services/axios";

export default function Feed() {
  const [groups, setGroups] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const dataGroups = await axios.get('/group');
      setGroups(dataGroups.data);
      const dataPosts = await axios.get('/post');
      setPosts(dataPosts.data);
    }
    getData();
  }, []);

  return (
    <main>
      <div className="bg-blues"></div>

      <div className="posts-container">
        <div className="filter-menu">
          <ul id="filters">
            <li key={String("all")} className="smallbutton active">all</li>
            {groups.map((g: any) => (
              <li key={String(Math.random())} className="groupname smallbutton">{g.group}</li>
            ))}
          </ul>
        </div>

        <div className="post-container">

          {posts.map((post: any) => (
            <div className={"post " + post.group}>
              {post.Links[0]?.url
                ?
                <div className="post-media">
                  <iframe
                    src={"https://www.youtube.com/embed/" + post.Links[0].url.split("/")[3]} title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                </div>
                :
                <img className="post-media" src={post.Media[0]?.url ?? "https://apmelshaddai-server.aldairgc.com/medias/1663702606334_14165.jpg"}></img>
              }
              <div className="post-texts">
                <div className="posts-header">
                  <div className="posts-title">{post.title}</div>
                </div>
                <div className="posts-content">{post.text}</div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </main >

  );
};
