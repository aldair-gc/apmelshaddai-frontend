import { useEffect, useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";
import ConfirmAction from "../../components/ConfirmAction";
import { Loading } from "../../components/Loading";
import axios from "../../services/axios";
import { AllMessagesContainer, Message as MessageSquare, MessageContainer, MessageContent, MessageControl, MessageHeaders } from "./styles";

interface Message { id: number; email: string; name: string; tel: string; created_at: string; text: string };

export const Messages = () => {
  const [messages, setMessages] = useState(Array<Message>);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      const dataMessages = await axios.get("/prayer");
      setMessages(dataMessages.data);
    }
    getData();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  async function deleteMessage(id: number) {
    try {
      setIsLoading(true);
      const del = await axios.delete("/prayer/" + id);
      del.data?.prayerDeleted === true ? toast.success("Message deleted") : toast.error("Error. Contact support.");

      const newMessages: Array<Message> = [];
      messages.forEach((msg) => { msg.id !== id && newMessages.push(msg) });
      setMessages(newMessages);

      setIsLoading(false);
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ "error": "Unknown error" }];
      errors.map((error: any) => toast.error(error));
      setIsLoading(false);
    };
  }

  function Message(props: Message) {
    return (
      <MessageSquare className={"message-id-" + props.id}>

        <div className="head">
          <MessageControl>
            <a className="smallbutton" href={"mailto:" + props.email}><i className="fa-solid fa-reply"></i>reply</a>
            <a className="smallbutton" onClick={
              () => (document.querySelector("#confirm-action-id-" + props.id) as HTMLDivElement).style.display = "flex"
            }><i className="fa-solid fa-eraser"></i>delete</a>
          </MessageControl>

          <MessageHeaders>
            <div className="name">Name: {props.name}</div>
            <div className="email">Email: {props.email}</div>
            <div className="tel">Tel: {props.tel}</div>
            <div className="date">Date: {props.created_at}</div>
          </MessageHeaders>
        </div>

        <MessageContent>{props.text}</MessageContent>

        <ConfirmAction id={props.id} text="Confirm deletion?" action={() => deleteMessage(props.id)} />
      </MessageSquare>
    )
  }

  return (
    <main>
      <div className="bg-blues"></div>

      <AllMessagesContainer>
        <MessageContainer>

          {messages.map((msg: Message) => (
            <Message key={msg.id} id={msg.id} email={msg.email} name={msg.name} tel={msg.tel} created_at={msg.created_at} text={msg.text} />
          ))}

        </MessageContainer>
      </AllMessagesContainer>
      {isLoading && <Loading />}
    </main>
  );
};
