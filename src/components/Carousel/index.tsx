import { useEffect, useState } from "react";
import CarouselItem from "./Item";
import { Container, ControlsContainer } from "./style";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img01 from "../../assets/images/family/family03.jpeg";
import img02 from "../../assets/images/family/family05.jpeg";
import img03 from "../../assets/images/family/neide02.jpeg";
import img04 from "../../assets/images/church-jpg-web-wide.jpeg";
import img05 from "../../assets/images/church_inside-jpg-web-wide.jpg";
import img06 from "../../assets/images/2021-12-27.jpeg";

export default function Carousel() {
  const [show, setShow] = useState(0);
  const [timer, setTimer] = useState(3000);
  const imageUrlList = [
    { url: img01, text: "" },
    { url: img02, text: "" },
    { url: img03, text: "" },
    { url: img04, text: "" },
    { url: img05, text: "" },
    { url: img06, text: "" },
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
