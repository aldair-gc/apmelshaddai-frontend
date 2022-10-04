import styled from "styled-components"


export const Container = styled.div`
position: absolute;
display: none;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.5);
backdrop-filter: blur(5px);
color: #fff;
font-size: 25px;
text-shadow: 0 0 5px #000;
border-radius: inherit;
gap: 10px;
box-shadow: 0 0 5px #000 inset;
border: none;

.options {
  display: flex;
  gap: 10px;
  padding: 10px;
}

button {
  display: flex;
  background: #fff;
  padding: 10px 20px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  color: #000;
  font-size: 16px;
  box-shadow: 0 0 5px #000;

  :hover {
    background: #ddd;
  }

  :active {
    background: #ccc;
  }
}
`
