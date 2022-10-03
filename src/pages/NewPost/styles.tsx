import styled from "styled-components";

export const NewPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  max-width: 1200px;
  width: calc(100% - 40px);
  min-height: 80vh;
`

export const PostCreate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  width: 100%;
  max-width: 1000px;
  min-width: 300px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input,
  textarea {
    border: 1px solid #027db6;
    border-radius: 8px;
    padding: 5px;
    font-size: 16px;
  }

  label {
    margin-top: 10px;
  }

  input[type=submit] {
    margin: 40px auto 0 auto;
    background: #027db6;
    color: #fff;
    font-size: larger;
    width: 50%;
  }
`
