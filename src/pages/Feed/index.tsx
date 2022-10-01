import { useNavigate } from "react-router-dom";
import { useState, useEffect, createElement } from "react";
import { toast } from "react-toastify";
import { ConfirmAtent, Filters, MediaControl, Post, PostContainer, PostContent, PostControl, PostMedia, PostsContainer, PostTexts, PostTitle } from "./styles";
import { FilterMenu } from "../../styles/global";
import axios from "../../services/axios";
import { useAppSelector } from "../../app/hooks";

interface Group {
  group: string;
  id: number;
}

interface Post {
  id: number;
  group: string;
  title: string;
  text: string;
  Media: [{
    url: string;
    filename: string;
  }]
  Links: [{
    url: string;
  }]
}

export default function Feed() {
  const navigate = useNavigate();
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

  async function uploadMedia(e: any, id: number) {
    const med = e.target.files[0];
    e.target.value = "";
    const medUrl = URL.createObjectURL(med);
    const formData = new FormData();
    formData.append("post_id", id.toString());
    formData.append("media", med);
    try {
      const edit = await axios.post("/media", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      edit.data?.post_id === id.toString() ? toast.success("Picture uploaded successfully") : toast.error("Something went wrong");

      const newPosts = [...posts];
      newPosts.forEach((post: any) => {
        if (post.id === id) post.Media = [{
          "url": medUrl,
          "filename": edit.data.filename,
        }];
      });
      setPosts(newPosts);

    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ "error": "Unknown error" }];
      errors.map((error: any) => toast.error(error));
    }
  }

  async function uploadLink(e: any, id: number) {
    const lnk = e.target.previousElementSibling.value;
    if (!lnk) toast.error("Paste an YouTube URL firstly");
    try {
      const edit = await axios.post("/link", { "url": lnk, "post_id": id.toString() });
      edit.data?.post_id === id.toString() ? toast.success("Link uploaded successfully") : toast.error("Something went wrong");

      const newPosts = [...posts];
      newPosts.forEach((post: any) => {
        if (post.id === id) post.Link = [{
          "url": lnk,
        }];
      });
      setPosts(newPosts);

      (document.querySelector(".media-post-id-" + id) as HTMLElement).outerHTML = `
        <iframe className=${"media-post-id-" + id}
        src=${"https://www.youtube.com/embed/" + lnk.split("/")[3]} title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      `;

      (document.querySelector(".media-control-post-id-" + id) as HTMLElement).classList.add("hidden");
      (document.querySelector(".control-link-post-id-" + id) as HTMLElement).classList.remove("hidden");

    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ "error": "Unknown error" }];
      errors.map((error: any) => toast.error(error));
    }
  }

  async function deleteMedia(id: number) {
    try {
      const del = await axios.delete("/media/" + id);
      del.data?.mediaDeleted === true ? toast.success("Media deleted from post") : toast.error("Something went wrong");

      const newPosts = [...posts];
      newPosts.forEach((post: any) => {
        if (post.id === id) post.Media = [];
      });
      setPosts(newPosts);

      (document.querySelector(".media-control-post-id-" + id) as HTMLElement).classList.remove("hidden");
      (document.querySelector(".control-media-post-id-" + id) as HTMLElement).classList.add("hidden");

    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ "error": "Unknown error" }];
      errors.map((error: any) => toast.error(error));
    }
  }

  async function deleteLink(id: number) {
    try {
      const del = await axios.delete("/link/" + id);
      del.data?.mediaDeleted === true ? toast.success("Link deleted from post") : toast.error("Something went wrong");

      const newPosts = [...posts];
      newPosts.forEach((post: any) => {
        if (post.id === id) post.Link = [];
      });
      setPosts(newPosts);

      (document.querySelector(".media-post-id-" + id) as HTMLElement).outerHTML = `
        <img className="post-media" src="https://apmelshaddai-server.aldairgc.com/medias/1663702606334_14165.jpg"}></img>
      `;
      (document.querySelector(".media-control-post-id-" + id) as HTMLElement).classList.remove("hidden");
      (document.querySelector(".control-link-post-id-" + id) as HTMLElement).classList.add("hidden");

    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ "error": "Unknown error" }];
      errors.map((error: any) => toast.error(error));
    }
  }

  async function deletePost(id: number) {
    try {
      const del = await axios.delete("/post/" + id);
      del.data?.postDeleted === true ? toast.success("Post deleted successfully") : toast.error("Something went wrong");

      const newPosts = posts.filter((post: any) => (post.id !== id));
      setPosts(newPosts);

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
                  <iframe className={"media-post-id-" + post.id}
                    src={"https://www.youtube.com/embed/" + post.Links[0].url.split("/")[3]} title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                  :
                  <img className={"post-media media-post-id-" + post.id} src={post.Media[0]?.url ?? "https://apmelshaddai-server.aldairgc.com/medias/1663702606334_14165.jpg"}></img>
                }
                {isLoggedIn ?
                  <MediaControl>
                    <form className={((post.Links[0]?.url || post.Media[0]?.url) ? "hidden " : "") + "media-control-post-id-" + post.id}>
                      <label htmlFor={"media-post-id-" + post.id} className="midbutton">
                        <i className="fa-solid fa-upload"></i>upload picture
                      </label>
                      <input type="file" name="media" id={"media-post-id-" + post.id} onInput={(e) => uploadMedia(e, post.id)} className="hidden" />

                      <div className="upload-link midbutton">
                        <input type="text" name="link" id={"link-post-id-" + post.id} placeholder="paste youtube link here" />
                        <label htmlFor={"link-post-id-" + post.id} className="" onClick={(e) => uploadLink(e, post.id)}>
                          <i className="fa-solid fa-upload"></i>upload youtube link
                        </label>
                      </div>
                    </form>

                    <a className={(post.Links[0]?.url ? "" : "hidden ") + "midbutton font-red control-link-post-id-" + post.id} onClick={() => deleteLink(post.id)}>
                      <i className="fa-solid fa-eraser"></i>delete link
                    </a>

                    <a className={(post.Media[0]?.url ? "" : "hidden ") + "midbutton font-red control-media-post-id-" + post.id} onClick={() => deleteMedia(post.id)}>
                      <i className="fa-solid fa-eraser"></i>delete picture
                    </a>
                  </MediaControl>
                  : ""
                }
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
                  <button className="font-red" onClick={() => deletePost(post.id)}>Confirm</button>
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
