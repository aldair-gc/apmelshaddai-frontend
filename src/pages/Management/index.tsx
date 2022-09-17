import { Link } from "react-router-dom";
import "./style.css";

export const Management = () => {
  return (
    <main>
      <div className="bg-blues"></div>

      <div className="center-center">
        <div className="form-box box">
          <h1>Management</h1>
          <ul id="home-options">
            <li><Link to="/feed"><i className="fa-solid fa-table-list"></i>Feed Manager</Link></li>
            <li><Link to="/messages"><i className="fa-solid fa-envelope-open-text"></i>Messages reader</Link></li>
            <li><Link to="/newpost"><i className="fa-solid fa-square-plus"></i>New post</Link></li>
            <li><Link to="/groups"><i className="fa-solid fa-object-group"></i>Groups manager</Link></li>
            <li><Link className="font-red" to="/php/logout"><i className="fa-solid fa-right-from-bracket"></i>Logout</Link></li>
          </ul>
        </div>
      </div>

    </main>

  );
};
