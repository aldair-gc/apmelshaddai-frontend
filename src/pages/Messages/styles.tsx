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
  width: 100%;
  align-items: center;
  gap: 20px;
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
  line-height: 1.4em;
  width: 100%;
  border-radius: 10px;

  .head {
    display: flex;
    gap: 20px;
    margin: 20px;
  }
`

export const MessageHeaders = styled.div`
  font-size: 14px;
  color: #333;
`

export const MessageControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    text-decoration: none;
  }
  `

export const MessageContent = styled.div`
    font-size: 16px;
    margin: 0 20px 20px 20px;
  `
