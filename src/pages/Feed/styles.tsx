import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding-bottom: 20px;
  `

export const Post = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  min-height: 150px;
  box-shadow: 0 0 5px #000;
  background: #fff;
  max-width: 1000px;
  min-width: 200px;
  overflow: hidden;
`

export const PostMedia = styled.div`
  position: relative;
  max-height: 60vh;
  max-width: 100%;
  margin: auto;
  flex: 0 1 0;

  :has(div iframe) {
    padding-bottom: calc(9 / 16 *  100%);
    width: 100%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #444;
  }

  div, img {
    max-height: inherit;
    max-width: 100%;
  }

  img {
    box-shadow: 0 0 5px #000;
  }

  .med-div {
    min-height: 100%;
  }
`

export const PostTexts = styled.div`
  padding: 20px;
  line-height: 1.4em;
`

export const PostTitle = styled.div`
  font-size: 22px;
  margin-bottom: 10px;
`

export const PostContent = styled.div`
  font-size: 16px;
`

export const PostControl = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
  flex: 0 0 auto;
  padding-bottom: 20px;

  a {
    text-decoration: none;
  }

  .button {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 10px 20px;
    border: 1px solid #888;
    border-radius: 5px;
    cursor: pointer;
    color: #000;
    gap: 5px;
    font-size: 16px;
  }

  .button:hover {
    background: #a3d0e5;
  }

  .button:active {
    background: #027db6;
  }
`

export const MediaControl = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  gap: 10px;
  transition: all .3s;

  :hover {
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px);

    a, label, div, form {
     visibility: visible;
   }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a, label, div {
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    height: 40px;
    padding: 0 15px;
    gap: 5px;
    cursor: pointer;
    margin: 0 auto;
  }

  input[type=text] {
    padding: 0 5px;
  }

  .control-close-btn {
    color: #fff;
    font-size: 30px;
  }

  .media-control-button {
    display: flex;
    background: #fff;
    padding: 10px 20px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    color: #000;
    gap: 5px;
    font-size: 16px;

    label {
      flex: 0 0 auto;
    }
  }
`
