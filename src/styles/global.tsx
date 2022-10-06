import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    padding-top: 60px;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 2;
    padding-bottom: 20px;
  }

  input,
  textarea {
    font-size: 16px;
  }

  .hidden {
    display: none !important;
  }

  .minibutton {
    font-size: 20px;
    border-radius: 50%;
    height: min-content;
    width: min-content;
  }

  .smallbutton {
    padding: 5px 10px;
    border-radius: 5px;
  }

  .midbutton {
    padding: 10px 15px;
    border-radius: 5px;
  }

  .minibutton, .smallbutton, .midbutton {
    display: flex;
    align-items: center;
    background: #fff;
    color: #000;
    text-decoration: none;
    gap: 5px;
    border: 0;
    cursor: pointer;

    :hover {
      background: #ddd;
    }

    :active {
      background: #ccc;
    }

    :has(:checked) {
      background: #027db6;
      color: #fff;
    }
  }

  .radio-list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  .radio-option {
    display: block;
    background: #fff;
    padding: 5px;
    border: 1px solid #027db6;
    border-radius: 5px;
  }

  .radio-option:has(input:checked) {
    background: #a3d0e5;
  }

  .font-red {
    color: #aa0000 !important;
  }

  .box {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 5px #000;
    border-radius: 10px;
  }

  .shadowed {
    box-shadow: 0 0 5px #000;
  }

  .marg20px {
    margin: 20px;
  }

  .text-center {
    text-align: center;
  }

  .bg-blues {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, #027db6, #a3d0e5);
    z-index: -1;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 20px;
    gap: 20px;
    overflow: hidden;
    padding: 20px;
    margin: 20px;
    width: 1200px;
    max-width: 100%;
  }

  .center-center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    max-width: 100%;
  }


  @media (max-width: 768px) {
    /* #logo {
          font-size: 14px;
      } */

    #menu-icon {
      display: flex;
    }

    #menu {
      display: none;
      position: fixed;
      align-items: flex-end;
      top: 60px;
      right: 0;
      left: 0;
      width: 100%;
      flex-direction: column;
      gap: 0;
      flex: 1 0 1;
    }

    .menu-opt {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.9);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
      width: 100%;
      height: 45px;
      border-top: 1px solid #027db6;
    }

    .menu-opt a {
      width: 200px;
    }

    .menu-opt:last-child {
      border-bottom: 1px solid #027db6;
    }

    #home-options a {
      width: 120px;
      height: 120px;
    }

    #home-options i {
      font-size: 40px;
      width: 120px;
      height: 50px;
    }
  }


  /* RESPONSIVENESS - BIG */

  @media (min-width: 768px) {
    #menuicon {
      display: none;
    }

    .menu-opt {
      display: block;
    }
  }


  /* RESPONSIVENESS - SMALL HEIGHT */

  @media (max-height: 768px) {

    #home-options a {
      width: 120px;
      height: 120px;
    }

    #home-options i {
      font-size: 40px;
      width: 120px;
      height: 50px;
    }
  }

  /* RESPONSIVENESS - END */
`

export const ButtonBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  max-width: 1000px;
  width: 100%;
  padding: 20px;
`

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #fff;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 2px #000;
  border-radius: 5px;
  padding: 5px;

  li {
    list-style: none;
  }

  i {
    font-size: 20px;
    padding: 0 5px;
    text-shadow: 0 0 2px #000;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  max-width: 1200px;
  width: calc(100% - 40px);
  min-height: 80vh;
`
export const ButtonMid = styled.button`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px 20px;
  border: 1px solid #027db6;
  border-radius: 5px;
  cursor: pointer;
  color: #000;
  gap: 5px;
`

export const SmallBox = styled.div`
  width: 500px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px #000;
  border-radius: 10px;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }

  input {
    border: 1px solid #027db6;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
  }

  label {
    margin-top: 10px;
  }

  input[type=submit], button {
    text-align: center;
    margin: 30px auto 10px auto;
    background: #027db6;
    color: #fff;
    font-size: 18px;
    width: 200px;
    padding: 5px 15px;
    border: 1px solid #027db6;
    border-radius: 5px;
    cursor: pointer;
    gap: 5px;

    :hover {
      background: #005a83;
    }
  }
`;

export const LoadingContainer = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.5);
display: flex;
align-items: center;
justify-content: center;

i {
  font-size: 30px;
  color: #fff;
  animation: 1s infinite normal spin;
  animation-timing-function: linear;
}

@keyframes spin {
  from {rotate: 0deg;}
  to {rotate: 360deg;}
}

`;
