import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ConfirmAtent, Filters, MediaControl, Post, PostContainer, PostContent, PostControl, PostMedia, PostsContainer, PostTexts, PostTitle } from "./styles";
import { FilterMenu } from "../../styles/global";
import axios from "../../services/axios";
import { useAppSelector } from "../../app/hooks";


export default function Feed() {
  const navigate = useNavigate();
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

  const filteredPosts = filter != "0" ? posts.filter((post: any) => post.group == filter) : [];

  async function editMedia(e: any, id: string) {
    const med = e.target.files[0];
    console.log(posts)
    // const medUrl = URL.createObjectURL(med);
    const formData = new FormData();
    formData.append("post_id", id);
    formData.append("media", med);

    try {
      await axios.post("/media", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      toast.success("Media updated");
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [];
      errors.map((error: any) => toast.error(error));
    }
  }

  async function deleteMedia(id: number) {
    try {
      const del = await axios.delete("/media/" + id);
      del.status === 200 ? toast.success("Media deleted from post") : toast.error("Something went wrong");
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ "error": "Unknown error" }];
      errors.map((error: any) => toast.error(error));
    }
  }

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
            <Post key={post.id} className={"group" + post.group}>

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
                {isLoggedIn ?
                  <MediaControl>
                    <form>
                      <label htmlFor={"media-post-id-" + post.id} className="midbutton">
                        <i className="fa-solid fa-upload"></i> upload
                      </label>
                      <input type="file" name="media" id={"media-post-id-" + post.id} onChange={(e) => editMedia(e, post.id)} className="hidden" />
                      <input type="hidden" name="post_id" value={post.id} />
                    </form>
                    {(post.Links[0]?.url || post.Media[0]?.url) ?
                      <a className="midbutton font-red" onClick={() => deleteMedia(post.id)}>
                        <i className="fa-solid fa-eraser"></i> delete
                      </a>
                      : ""
                    }
                  </MediaControl>
                  : ""}
              </PostMedia>

              <PostTexts>
                <PostTitle>{post.title}</PostTitle>
                <PostContent>{post.text}</PostContent>
              </PostTexts>

              {isLoggedIn ?
                <PostControl>
                  <a className="midbutton" onClick={() => navigate("/editpost/" + post.id)}>
                    <i className="fa-solid fa-pen-to-square"></i>edit
                  </a>
                  <a className="midbutton font-red"
                    onClick={() => (document.querySelector("#confirm-atent-id-" + post.id) as HTMLDivElement).style.display = "flex"}>
                    <i className="fa-solid fa-eraser"></i>delete
                  </a>
                </PostControl>
                : ""}

              <ConfirmAtent id={"confirm-atent-id-" + post.id}>
                Confirm deletion?
                <div className="options">
                  <button className="font-red" onClick={() => deleteMedia(post.id)}>Confirm</button>
                  <button onClick={() => (document.querySelector("#confirm-atent-id-" + post.id) as HTMLDivElement).style.display = "none"}>Cancel</button>
                </div>
              </ConfirmAtent>
            </Post>
          ))}

        </PostContainer>
      </PostsContainer>
    </main >

  );
};
