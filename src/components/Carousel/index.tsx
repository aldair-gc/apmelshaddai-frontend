import { useEffect, useState } from "react";
import CarouselItem from "./Item";
import { Container, ControlsContainer } from "./style";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel() {
  const [show, setShow] = useState(0);
  const [timer, setTimer] = useState(3000);
  const imageUrlList = [
    { url: "../../assets/images/family/family03.jpeg", text: "" },
    { url: "../../assets/images/family/family05.jpeg", text: "" },
    { url: "../../assets/images/family/neide02.jpeg", text: "" },
    { url: "../../assets/images/church-jpg-web-wide.jpeg", text: "" },
    { url: "../../assets/images/church_inside-jpg-web-wide.jpg", text: "" },
    { url: "../../assets/images/2021-12-27.jpeg", text: "" },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShow(show === imageUrlList.length - 1 ? 0 : show + 1);
    }, timer);
    return () => clearInterval(intervalId);
  }, [show]);

  return (
    <Container onMouseEnter={() => setTimer(10000)} onMouseOut={() => setTimer(3000)}>
      <ControlsContainer>
        <FaChevronLeft onClick={() => setShow(show === imageUrlList.length - 1 ? 0 : show + 1)} />
        <FaChevronRight onClick={() => setShow(show === 0 ? imageUrlList.length - 1 : show - 1)} />
      </ControlsContainer>
      {imageUrlList.map((item, i) => {
        return <CarouselItem key={i} image={item.url} text={item.text} show={show === i ? 1 : 0} />;
      })}
    </Container>
  );
}
