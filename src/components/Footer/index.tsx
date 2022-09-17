import "./style.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <h3>Site's map</h3>
          <Link to="/">Home</Link>
          <Link to="/thechurch">The Church</Link>
          <Link to="/ourfamily">Our Family</Link>
          <Link to="/feed">Feed</Link>
          <Link to="/prayer">Prayer Requests</Link>
          <Link to="/missions">Missions</Link>
          <Link to="/agenda">Agenda</Link>
          <Link to="/pictures">Pictures</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-col">
          <h3>Recomendations</h3>
          <a href="http://">Website A</a>
          <a href="http://">Website B</a>
          <a href="http://">Website C</a>
          <a href="http://">Website D</a>
          <a href="http://">Website E</a>
          <a href="http://">Website F</a>
          <a href="http://">Website G</a>
          <a href="http://">Website H</a>
        </div>
        <div className="footer-col">
          <h3>Internal</h3>
          <Link to="/login">Login</Link>
          <Link to="/">Optional 1</Link>
          <Link to="/">Optional 2</Link>
          <Link to="/">Optional 3</Link>
          <Link to="/">Optional 4</Link>
          <Link to="/">Optional 5</Link>
        </div>
      </div>
    </footer>
  );
};
