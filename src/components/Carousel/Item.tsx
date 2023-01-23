import { Component } from "react";
import { ItemContainer } from "./style";

interface Props {
  image: string;
  text: string;
  show: number;
}

export default class CarouselItem extends Component<Props> {
  render() {
    const imageUrl = new URL(this.props.image, import.meta.url).href;
    return (
      <ItemContainer style={{ backgroundImage: `url("${imageUrl}")`, opacity: this.props.show }}>
        <h2>{this.props.text}</h2>
      </ItemContainer>
    );
  }
}
