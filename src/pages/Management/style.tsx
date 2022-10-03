import styled from "styled-components";


export const MenuBox = styled.div`
  position: relative;
  margin: 20px;
  padding: 30px;

button {
  float: right;
  margin-top: 20px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background: #b60202;
  color: #fff;
  font-size: large;
  margin-top: 30px;

  :hover {
    background: #700000;
  }
}

a {
  display: block;
  text-decoration: none;
  color: #000;
  margin: 10px 0 10px 0;
  text-align: right;
}

h1 {
  margin-bottom: 30px;
}
`
