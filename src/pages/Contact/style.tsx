import styled from "styled-components";

export const MapSquare = styled.div`
  width: 100%;
  height: 600px;
`;

export const SquareContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  padding: 40px 20px;
  margin: 20px;
`;

export const SquareBox = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  overflow: hidden;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px #000;
  border-radius: 10px;
`;

export const SquareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: #fff;
  padding: 5px 15px;
  border: none;
  border-radius: 40px;
  margin: 5px;

  a {
    color: #fff;
  }

  h2 {
    font-size: 18px;
  }
`;
