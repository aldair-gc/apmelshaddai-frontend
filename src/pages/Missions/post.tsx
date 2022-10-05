import { Component } from "react";
import { Post, PostContent, PostMedia, PostTexts, PostTitle } from "./styles";

export interface Post {
  id: number;
  group: string;
  title: string;
  text: string;
  Media: [{
    url: string;
    filename: string;
  }];
  Links: [{
    url: string;
  }];
};

export default class MakePost extends Component<Post> {
  constructor(props: Post) {
    super(props)
    this.state = {
      isLoading: false
    };
  };

  render() {
    return (
      <Post key={this.props.id} className={"group" + this.props.group + " post-id-" + this.props.id}>

        <PostMedia onMouseLeave={() => {
          const md = (document.querySelectorAll(".mediacontrol"));
          md.forEach((control: any) => control.style.visibility = "visible");
        }}>
          <div className={"med-div media-post-id-" + this.props.id}>
            {this.props.Links[0]?.url
              ?
              <iframe
                src={"https://www.youtube.com/embed/" + this.props.Links[0].url.split("/")[3]} title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              </iframe>
              :
              <img className="post-media" src={this.props.Media[0]?.url ?? "https://apmelshaddai-server.aldairgc.com/medias/1663702606334_14165.jpg"}></img>
            }
          </div>
        </PostMedia>

        <PostTexts>
          <PostTitle>{this.props.title}</PostTitle>
          <PostContent>{this.props.text}</PostContent>
        </PostTexts>

      </Post>

    )
  }
}
