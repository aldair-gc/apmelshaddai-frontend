import "./style.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import smallLogo from "../../assets/images/logo-png-small.png"

export const Header = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  function hideMenu() {
    const menuCheck = document.querySelector("#menu-check") as HTMLInputElement;
    menuCheck.checked = false;
  };

  // Resize fix for menuIcon
  window.addEventListener("resize", () => {
    const menuCheck = document.querySelector("#menu-check") as HTMLInputElement;
    if (innerWidth > 700) {
      menuCheck.checked = false;
    }
  });

  return (
    <header>
      <Link id="logo" to="/">
        <img src={smallLogo} alt="Logo" />
        Apostolic & Prophetic Ministries El Shaddai
      </Link>

      <input id="menu-check" type="checkbox" name="menu-check" className="hidden" />
      <label id="menu-icon" htmlFor="menu-check">
        <div id="menu-icon-a"></div>
        <div id="menu-icon-b"></div>
        <div id="menu-icon-c"></div>
      </label>

      <ul id="menu" onClick={hideMenu} onMouseLeave={hideMenu}>
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
