import { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

interface Props {
  title: string;
  text: string;
  image: string;
  link: string;
  alignX: string;
  alignY: string;
  color1: string;
  color2: string;
  background: string;
}

export default class Block extends Component<Props> {
  render() {
    const imageUrl = new URL(this.props.image, import.meta.url).href;
    return (
      <Container
        image={imageUrl}
        color1={this.props.color1}
        color2={this.props.color2}
        alignX={this.props.alignX}
        alignY={this.props.alignY}
        background={this.props.background}
      >
        <Link to={this.props.link}>
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
        </Link>
      </Container>
    );
  }
}
