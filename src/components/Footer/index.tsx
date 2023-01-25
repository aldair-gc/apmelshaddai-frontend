import "./style.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <h3>Site's map</h3>
          <Link to="/">Home</Link>
          <Link to="/prayer">Prayer Requests</Link>
          <Link to="/missions">Missions</Link>
          <Link to="/agenda">Agenda</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-col">
          <h3>Recomendations</h3>
          <a href="http://">Website A</a>
          <a href="http://">Website B</a>
          <a href="http://">Website C</a>
          <a href="http://">Website D</a>
          <a href="http://">Website E</a>
        </div>
        <div className="footer-col">
          <h3>Internal</h3>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </footer>
  );
};
