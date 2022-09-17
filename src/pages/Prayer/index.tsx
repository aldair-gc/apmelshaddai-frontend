import { Link } from "react-router-dom";
import "./style.css";

export const Prayer = () => {
  return (
    <main>
      <div className="bg-blues"></div>

      <div className="container box">
        <div className="filter-menu">
          <ul>
            <li>
              <Link className="midbutton" to="/">
                <i className="fa-solid fa-arrow-left"></i>
                back
              </Link>
            </li>
          </ul>
        </div>

        <div className="new-post post">
          <h2>Prayer request</h2>

          <form encType="multipart/form-data" action="/php/newmessage.php" method="POST">

            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" />

            <label htmlFor="tel">Tel:</label>
            <input type="tel" name="tel" id="tel" placeholder="Enter your phone number" />

            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" cols={30} rows={10} placeholder="Write your message here"
              autoCorrect="on"></textarea>

            <label htmlFor="file">Picture, video or audio:</label>
            <input type="hidden" name="MAX_FILE_SIZE" value="10000000" />
            <input type="file" name="file" id="file" />

            <input type="text" name="folder" value="prayer" className="hidden" />

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>

    </main>
  );
};
