import styled from "styled-components";

export const Container = styled.div.attrs(
  (props: { image: string; color1: string; color2: string; alignX: string; alignY: string; background: string }) => props
)`
  position: relative;
  width: calc(100% - 40px);
  height: 500px;
  max-width: 1200px;
  max-height: 60vh;
  overflow: hidden;
  margin-top: 20px;
  background: url(${(props) => props.image});
  background-size: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 25px;

  a {
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.alignX};
    justify-content: ${(props) => props.alignY};
    text-decoration: none;
    padding: 50px;
    height: 100%;
    widht: 100%;
    background: ${(props) => props.background};
    backdrop-filter: blur(10px);
    transition: all 0.3s linear;
  }

  a:hover {
    background: none;
    backdrop-filter: none;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
    color: ${(props) => props.color1};
    border-radius: 50px;
  }
  p {
    font-family: sans-serif;
    font-size: 30px;
    text-align: ${(props) => props.alignX};
    color: ${(props) => props.color2};
    // text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  }
`;
