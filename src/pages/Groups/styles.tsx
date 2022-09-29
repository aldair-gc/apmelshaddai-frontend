import styled from "styled-components";

export const GroupsEdit = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  width: 100%;
  max-width: 1000px;
  min-width: 300px;

  h2 {
    padding-bottom: 20px;
  }

  p {
    margin-top: 40px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: baseline;
    gap: 10px;
  }

  input {
    border: 1px solid #027db6;
    border-radius: 8px;
    padding: 5px;
    width: 100%;
    max-width: 400px;
  }

  label {
    margin-top: 10px;
    flex-shrink: 0;
    width: 100%;
  }

  input[type=submit] {
    background: #027db6;
    color: #fff;
    width: 100px;
  }
`

export const GroupsList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  list-style: none;
  margin: 20px 0;

  li {
    position: relative;
  }

  a {
    position: absolute;
    right: -5px;
    top: -5px;
  }
`
