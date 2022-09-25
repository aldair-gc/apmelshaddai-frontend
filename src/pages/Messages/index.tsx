import { useEffect, useState } from "react";
import axios from "../../services/axios";

export const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getData() {
      const dataMessages = await axios.get("/prayer");
      setMessages(dataMessages.data);
    }
    getData();
  }, [])

  return (
    <main>
      <div className="bg-blues"></div>

      <div className="posts-container">
        <div className="filter-menu">
          <ul id="filters">
            <li id="prayer" className="smallbutton">prayer</li>
          </ul>
        </div>

        <div className="post-container">

          {messages.map((m: any) => (
            <div className="post prayers">

              <div className="post-control">
                <a className="midbutton" href={"mailto:" + m.email}>
                  <i className="fa-solid fa-pen-to-square"></i>reply
                </a>
                <a className="midbutton font-red" href={"/prayer?id=" + m.id}>
                  <i className="fa-solid fa-eraser"></i>delete
                </a>
              </div>

              <div className="message-text">
                <div className="message-header">
                  <div className="name">Name: {m.name}</div>
                  <div className="email">Email: {m.email}</div>
                  <div className="tel">Tel: {m.tel}</div>
                  <div className="date">Date: {m.created_at}</div>
                </div>
                <hr />
                <div className="posts-content">{m.text}</div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
};
