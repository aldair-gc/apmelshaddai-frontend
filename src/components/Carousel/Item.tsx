import { Component } from "react";
import { ItemContainer } from "./style";

interface Props {
  image: string;
  text: string;
  show: number;
}

export default class CarouselItem extends Component<Props> {
  render() {
    return (
      <ItemContainer style={{ backgroundImage: `url("${this.props.image}")`, opacity: this.props.show }}>
        <h2>{this.props.text}</h2>
      </ItemContainer>
    );
  }
}
