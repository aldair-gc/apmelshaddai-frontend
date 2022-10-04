import { Component, ReactPropTypes, useState } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "../../app/hooks";
import ConfirmAction from "../../components/ConfirmAction";
import heic2any from "heic2any";
import { MediaControl, Post, PostContent, PostControl, PostMedia, PostTexts, PostTitle } from "./styles";
import axios from "../../services/axios";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { render } from "react-dom";

interface Post {
  id: number;
  group: string;
  title: string;
  text: string;
  Media: [{
    url: string;
    filename: string;
  }],
  Links: [{
    url: string;
  }],
};

interface State {
  isLoggedIn: boolean,
  isLoading: boolean,
}

export default class MakePost extends Component<Post, State> {
  Post: Post;
  state: State;

  constructor(props: any, Post: Post, state: State) {
    super(props);
    this.Post = Post;
    this.state = { isLoggedIn: useAppSelector(state => state.auth.isLoggedIn) };
    this.state = { isLoading: false };
  };

  static navigate = useNavigate();

  uploadMedia = async (e: any, id: number) => {
    this.setState({ isLoading: true });
    if (!e.target.files[0]) {
      e.target.value = "";
      toast.error("Error uploading picture");
      this.setState({ IsLoading: false });
      return;
    };

    let file = e.target.files[0];

    //if image type is heic, convert it to jpg
    if (file.type === "image/heic") {
      const converted: any = await heic2any({ blob: file, toType: "image/jpeg" });
      file = new File([converted], `${file.name}.jpg`, { type: "image/jpeg", lastModified: new Date().getTime() });
    }

    //resize it to w=1200 h=auto
    const url = URL.createObjectURL(file);
    const img = document.querySelector(".img_temp") as HTMLImageElement;
    img.src = url;

    img.onload = async () => {
      const { width, height } = img;
      let newWidth = width;
      let newHeith = height;
      const maxWidth = 1200;
      const maxHeight = 800;

      if (width > maxWidth) {
        newHeith = height * (maxWidth / width);
        newWidth = maxWidth;
      }

      if (height > maxHeight) {
        newWidth = width * (maxHeight / height);
        newHeith = maxHeight;
      }
      const canvas = document.createElement("canvas");
      canvas.width = newWidth;
      canvas.height = newHeith;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0, newWidth, newHeith);

      canvas.toBlob(async (ev: any) => {
        const newFile = new File([ev], `${file.name}.jpg`, { type: "image/jpeg", lastModified: new Date().getTime() });

        const medUrl = URL.createObjectURL(newFile);
        const formData = new FormData();
        formData.append("post_id", id.toString());
        formData.append("media", newFile);

        try {
          const edit = await axios.post("/media", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          edit.data?.post_id === id.toString() ? toast.success("Picture uploaded successfully") : toast.error("Something went wrong");

          (document.querySelector(".media-post-id-" + id) as HTMLElement).innerHTML = `
          <img className="post-media" src=${medUrl}></img>
          `;

          (document.querySelector(".media-control-post-id-" + id) as HTMLElement).classList.add("hidden");
          (document.querySelector(".control-media-post-id-" + id) as HTMLElement).classList.remove("hidden");
          this.setState({ setIsLoading: false });
        } catch (err: any) {
          const errors = err.response?.data?.errors ?? [{ "error": "Unknown error" }];
          errors.map((error: any) => toast.error(error));
          this.setState({ setIsLoading: false });
        }
      }, "image/jpeg");
    }
    e.target.value = "";
    this.setState({ setIsLoading: false });
  };

  uploadLink = async (e: any, id: number) => {
    const lnk = e.target.previousElementSibling.value;

    if (!lnk) {
      toast.error("Paste an YouTube URL firstly");
      return;
    };

    try {
      this.setState({ setIsLoading: true });
      const edit = await axios.post("/link", { "url": lnk, "post_id": id.toString() });
      edit.data?.post_id === id.toString() ? toast.success("Link uploaded successfully") : toast.error("Something went wrong");

      (document.querySelector(".media-post-id-" + id) as HTMLElement).innerHTML = `
        <iframe
          src=${"https://www.youtube.com/embed/" + lnk.split("/")[3]} title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      `;

      (document.querySelector(".media-control-post-id-" + id) as HTMLElement).classList.add("hidden");
      (document.querySelector(".control-link-post-id-" + id) as HTMLElement).classList.remove("hidden");
      this.setState({ setIsLoading: false });
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ "error": "Unknown error" }];
      errors.map((error: any) => toast.error(error));
      this.setState({ setIsLoading: false });
    };
  };

  deleteMedia = async (id: number) => {
    try {
      this.setState({ setIsLoading: true });
      const del = await axios.delete("/media/" + id);
      del.data?.mediaDeleted === true ? toast.success("Media deleted from post") : toast.error("Something went wrong");

      (document.querySelector(".media-post-id-" + id) as HTMLElement).innerHTML = `
        <img className="post-media" src="https://apmelshaddai-server.aldairgc.com/medias/1663702606334_14165.jpg"}></img>
      `;
      (document.querySelector(".media-control-post-id-" + id) as HTMLElement).classList.remove("hidden");
      (document.querySelector(".control-media-post-id-" + id) as HTMLElement).classList.add("hidden");
      this.setState({ setIsLoading: false });
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ "error": "Unknown error" }];
      errors.map((error: any) => toast.error(error));
      this.setState({ setIsLoading: false });
    }
  };

  deleteLink = async (id: number) => {
    try {
      this.setState({ setIsLoading: true });
      const del = await axios.delete("/link/" + id);
      del.data?.mediaDeleted === true ? toast.success("Link deleted from post") : toast.error("Something went wrong");

      (document.querySelector(".media-post-id-" + id) as HTMLElement).innerHTML = `
        <img className="post-media" src="https://apmelshaddai-server.aldairgc.com/medias/1663702606334_14165.jpg"}></img>
      `;
      (document.querySelector(".media-control-post-id-" + id) as HTMLElement).classList.remove("hidden");
      (document.querySelector(".control-link-post-id-" + id) as HTMLElement).classList.add("hidden");
      this.setState({ setIsLoading: false });
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ "error": "Unknown error" }];
      errors.map((error: any) => toast.error(error));
      this.setState({ setIsLoading: false });
    };
  };

  deletePost = async (id: number) => {
    try {
      this.setState({ setIsLoading: true });
      const del = await axios.delete("/post/" + id);
      del.data?.postDeleted === true ? toast.success("Post deleted successfully") : toast.error("Something went wrong");

      (document.querySelector(".post-id-" + id) as HTMLElement).classList.add("hidden");

      // const newPosts = posts.filter((post: any) => (post.id !== id));
      // setPosts(newPosts);
      this.setState({ setIsLoading: false });
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ "error": "Unknown error" }];
      errors.map((error: any) => toast.error(error));
      this.setState({ setIsLoading: false });
    }
  };

  render() {
    return (
      <Post key={this.Post.id} className={"group" + this.Post.group + " post-id-" + this.Post.id}>

        <PostMedia onMouseLeave={() => {
          const md = (document.querySelectorAll(".mediacontrol"));
          md.forEach((control: any) => control.style.visibility = "visible");
        }}>
          <div className={"med-div media-post-id-" + this.Post.id}>
            {this.Post.Links[0]?.url
              ?
              <iframe
                src={"https://www.youtube.com/embed/" + this.Post.Links[0].url.split("/")[3]} title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              </iframe>
              :
              <img className="post-media" src={this.Post.Media[0]?.url ?? "https://apmelshaddai-server.aldairgc.com/medias/1663702606334_14165.jpg"}></img>
            }
          </div>
          {this.state.isLoggedIn ?
            <MediaControl className={"mediacontrol mediacontrol-post-id" + this.Post.id}>

              <a className={"control-close-btn control-close-post-id-" + this.Post.id} onClick={() => {
                const md = document.querySelectorAll(".mediacontrol");
                md.forEach((control: any) => {
                  control.style.visibility = "hidden"
                });
              }}>
                <i className="fa-solid fa-circle-xmark"></i>
              </a>

              <form className={((this.Post.Links[0]?.url || this.Post.Media[0]?.url) ? "hidden " : "") + "media-control-post-id-" + this.Post.id}>
                <label htmlFor={"media-post-id-" + this.Post.id} className="media-control-button">
                  <i className="fa-solid fa-upload"></i>upload picture
                </label>
                <input type="file" name="media" id={"media-post-id-" + this.Post.id} onInput={(e) => this.uploadMedia(e, this.Post.id)} className="hidden" />

                <div className="upload-link media-control-button">
                  <input type="text" name="link" id={"link-post-id-" + this.Post.id} placeholder="paste youtube link here" />
                  <label htmlFor={"link-post-id-" + this.Post.id} className="" onClick={(e) => this.uploadLink(e, this.Post.id)}>
                    <i className="fa-solid fa-upload"></i>upload youtube
                  </label>
                </div>
              </form>

              <a className={(this.Post.Links[0]?.url ? "" : "hidden ") + "media-control-button font-red control-link-post-id-" + this.Post.id} onClick={() => this.deleteLink(this.Post.id)}>
                <i className="fa-solid fa-eraser"></i>delete link
              </a>

              <a className={(this.Post.Media[0]?.url ? "" : "hidden ") + "media-control-button font-red control-media-post-id-" + this.Post.id} onClick={() => this.deleteMedia(this.Post.id)}>
                <i className="fa-solid fa-eraser"></i>delete picture
              </a>

            </MediaControl>
            : ""
          }
        </PostMedia>

        <PostTexts>
          <PostTitle>{this.Post.title}</PostTitle>
          <PostContent>{this.Post.text}</PostContent>
        </PostTexts>

        {this.state.isLoggedIn ?
          <PostControl>
            <a className="button" onClick={() => MakePost.navigate("/editpost/" + this.Post.id)}>
              <i className="fa-solid fa-pen-to-square"></i>edit
            </a>
            <a className="button font-red"
              onClick={() => (document.querySelector("#confirm-action-id-" + this.Post.id) as HTMLDivElement).style.display = "flex"}>
              <i className="fa-solid fa-eraser"></i>delete
            </a>
          </PostControl>
          : ""}

        <ConfirmAction id={this.Post.id} text="Confirm deletion?" action={() => this.deletePost(this.Post.id)} />
        {this.state.isLoading && <Loading />}
      </Post>

    )
  }
};
