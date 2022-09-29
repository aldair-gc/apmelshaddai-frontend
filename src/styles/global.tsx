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
    gap: 20px;
  }

  input,
  textarea {
    font-size: 16px;
  }

  .hidden {
    display: none;
  }

  .minibutton {
    display: flex;
    border: 0;
    cursor: pointer;
    color: #000;
    font-size: 20px;
    border-radius: 50%;
    gap: 5px;
    background: #fff;
    height: min-content;
    width: min-content;
    text-decoration: none;
  }

  .smallbutton {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 7px 15px;
    border: 1px solid #027db6;
    border-radius: 8px;
    cursor: pointer;
    color: #000;
    gap: 5px;
  }

  .midbutton {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 10px 20px;
    border: 1px solid #027db6;
    border-radius: 8px;
    cursor: pointer;
    color: #000;
    gap: 5px;
  }

  .no-link {
    cursor: default;
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
    border-radius: 8px;
  }

  .radio-option:has(input:checked) {
    background: #a3d0e5;
  }

  .form-box {
    margin: 20px auto 20px auto;
    width: 1200px;
    padding: 30px;
    max-width: 90%;
  }

  .font-red {
    color: #aa0000 !important;
  }

  .box {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 5px #555;
    border-radius: 15px;
  }

  .shadowed {
    box-shadow: 0 0 5px #555;
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


  @media (max-width: 700px) {
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

  @media (min-width: 700px) {
    #menuicon {
      display: none;
    }

    .menu-opt {
      display: block;
    }
  }


  /* RESPONSIVENESS - SMALL HEIGHT */

  @media (max-height: 700px) {
    .posts-content {
      font-size: 10px;
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


  /* RESPONSIVENESS - END */
`

export const FilterMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
    gap: 5px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
  padding: 20px 0;
  max-width: 1200px;
  width: calc(100% - 40px);
`
