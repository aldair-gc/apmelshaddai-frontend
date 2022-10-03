import { useEffect, useLayoutEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import axios from "../../services/axios";
import { AllMessagesContainer, Message, MessageContainer, MessageContent, MessageControl, MessageHeaders } from "./styles";

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const dataMessages = await axios.get("/prayer");
      setMessages(dataMessages.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main>
      <div className="bg-blues"></div>

      <AllMessagesContainer>
        <MessageContainer>

          {messages.map((m: any) => (
            <Message key={m.id}>

              <div className="head">
                <MessageControl>
                  <a className="smallbutton" href={"mailto:" + m.email}>
                    <i className="fa-solid fa-pen-to-square"></i>reply
                  </a>
                  <a className="smallbutton font-red" href={"/prayer?id=" + m.id}>
                    <i className="fa-solid fa-eraser"></i>delete
                  </a>
                </MessageControl>

                <MessageHeaders>
                  <div className="name">Name: {m.name}</div>
                  <div className="email">Email: {m.email}</div>
                  <div className="tel">Tel: {m.tel}</div>
                  <div className="date">Date: {m.created_at}</div>
                </MessageHeaders>
              </div>

              <MessageContent>{m.text}</MessageContent>

            </Message>
          ))}

        </MessageContainer>
      </AllMessagesContainer>
      {isLoading && <Loading />}
    </main>
  );
};
