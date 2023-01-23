import styled from "styled-components";

export const Container = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 800px;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  list-style: none;
`;

export const ItemContainer = styled.li`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  transition: opacity 1s;
`;

export const ControlsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  svg {
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    height: 50px;
    width: 50px;
    cursor: pointer;
    border-radius: 25px;
  }
`;
