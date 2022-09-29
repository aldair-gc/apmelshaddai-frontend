import styled from "styled-components";

export const PostsContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
`

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 150px;
  padding: 20px;
  box-shadow: 0 0 5px #555;
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
  box-shadow: 0 0 5px #444;
  flex: 0 1 0;

  :has(iframe) {
    padding-bottom: 56.25%;
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

  img {
    width: 100%;
    height: 100%;
  }
`

export const PostTexts = styled.div`
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
  justify-content: space-between;
  flex: 0 0 auto;

  a {
    text-decoration: none;
  }
`
export const Filters = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  list-style: none;
  gap: 10px;

  .active {
    background: #a3d0e5;
  }
`
