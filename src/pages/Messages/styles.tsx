import styled from "styled-components";

export const AllMessagesContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  align-items: center;
`

export const Message = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 150px;
  box-shadow: 0 0 5px #000;
  background: #fff;
  max-width: 1000px;
  min-width: 200px;
  overflow: hidden;
  padding: 20px;
  line-height: 1.4em;
  width: 100%;
  border-radius: 15px;

  .head {
    display: flex;
    gap: 20px;
  }
`

export const MessageHeaders = styled.div`
  font-size: 14px;
  color: #333;
`

export const MessageContent = styled.div`
  font-size: 16px;
  width: 100%;
  margin-top: 20px;
`

export const MessageControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    text-decoration: none;
  }
`

export const ConfirmAtent = styled.div`
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

  .options {
    display: flex;
    gap: 10px;
    padding: 10px;
  }

  button {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 10px 20px;
    border: 1px solid #027db6;
    border-radius: 8px;
    cursor: pointer;
    color: #000;
    gap: 5px;
    font-size: 15px;
  }
`
