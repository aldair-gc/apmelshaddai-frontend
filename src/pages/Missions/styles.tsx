import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px 0;
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
  width: 100%;
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
  padding: 10px 0;
`

export const PostContent = styled.div`
  font-size: 16px;
  text-indent: 50px;
  text-align: justify;
`

export const OuterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
  }

  :has(.bg-darkblue) { background-color: #027db6; color: #fff }

  :has(.bg-lightblue) { background-color: #a3d0e5 }

  :has(.bg-white) { background-color: #fff }

  .column { flex-direction: column }

  .row { flex-direction: row }

  .half-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 50%;
    min-width: 400px;
  }

  h1,
  i {
    max-width: 80%;
    padding: 30px 0;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-weight: 400;
    width: 100%;
  }

  i {
    font-size: large;
    line-height: 30px;
  }
  p {
    font-size: large;
    padding: 30px;
    text-align: center;
  }

  hr {
    width: 200px;
}
`
