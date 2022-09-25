import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);

  return (
    <header>
      <Link id="logo" to="/">
        <img src="./src/images/logo-png-small.png" alt="Logo" />
        Apostolic & Prophetic Ministries El Shaddai
      </Link>

      <input id="menu-check" type="checkbox" name="menu-check" className="hidden" />
      <label id="menu-icon" htmlFor="menu-check">
        <div id="menu-icon-a"></div>
        <div id="menu-icon-b"></div>
        <div id="menu-icon-c"></div>
      </label>

      <ul id="menu">
        <li className="menu-opt"><Link to="/">Home</Link></li>
        <li className="menu-opt"><Link to="/feed">Feed</Link></li>
        <li className="menu-opt"><Link to="/contact">Contact</Link></li>
        {isLoggedIn &&
          <li className="menu-opt"><Link className="font-red" id="management-opt" to="/management">Management</Link></li>
        }
      </ul>
    </header>
  );
};
