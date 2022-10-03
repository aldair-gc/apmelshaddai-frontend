import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { AuthLogout } from "../../app/auth/Logout";
import { MenuBox } from "./style";

export const Management = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main>
      <div className="bg-blues"></div>

      <div className="center-center">
        <MenuBox className="box">
          <h1>Management</h1>
          <ul id="home-options">
            <li><Link to="/feed"><i className="fa-solid fa-table-list"></i>Feed Manager</Link></li>
            <li><Link to="/messages"><i className="fa-solid fa-envelope-open-text"></i>Messages reader</Link></li>
            <li><Link to="/newpost"><i className="fa-solid fa-square-plus"></i>New post</Link></li>
            <li><Link to="/groups"><i className="fa-solid fa-object-group"></i>Groups manager</Link></li>
          </ul>
          <AuthLogout />
        </MenuBox>
      </div>

    </main>

  );
};
