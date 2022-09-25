import { Link } from "react-router-dom";
import "./style.css";

export const GroupsEdit = () => {
  return (
    <main>
      <div className="bg-blues"></div>

      <div className="container box">
        <div className="filter-menu">
          <ul>
            <li>
              <a className="midbutton" href="/feed">
                <i className="fa-solid fa-arrow-left"></i>
                back
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className="midbutton" href="/newpost">
                <i className="fa-solid fa-plus"></i>
                new post
              </a>
            </li>
          </ul>
        </div>

        <div className="new-post post">
          <h2>Groups</h2>
          <ul id="groups-list">

            {/* <?php while ($row = mysqli_fetch_array($groups)) { ?>
                <li className="smallbutton no-link"><?php echo $row['groupname']; ?>
                    <a className="minibutton font-red"
                        href="<?php echo '/group_delete.php?groupname=' . $row['groupname']; ?>">
                        <i className="fa-solid fa-circle-xmark"></i>
                    </a>
                </li>
            <? php } ?> */}

          </ul>
          <form action="/php/newgroup.php" method="post">
            <label htmlFor="groupname">New group:</label>
            <input type="text" name="groupname" id="groupname" />

            <input type="submit" value="Create" />
          </form>
        </div>
      </div>
    </main>
  );
};
