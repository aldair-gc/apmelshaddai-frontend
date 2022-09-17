import { Link } from "react-router-dom";
import "./style.css";

export const NewPost = () => {
  return (
    <main>
      <div className="bg-blues"></div>

      <div className="container box">
        <div className="filter-menu">
          <ul>
            <li>
              <Link className="midbutton" to="/feed">
                <i className="fa-solid fa-arrow-left"></i>
                back
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="midbutton" to="/groups">
                <i className="fa-solid fa-object-group"></i>
                groups
              </Link>
            </li>
          </ul>
        </div>

        <div className="new-post post">
          <h2>Create new post</h2>

          <form encType="multipart/form-data" action="/php/newpost.php" method="POST">
            <label htmlFor="groupname">Group:</label>
            <div className="radio-list">

              {/* <?php while ($row = mysqli_fetch_array($groups)) { ?> */}
              <div className="radio-option">
                <input className="hidden" type="radio" name="groupname" id="<?php echo $row['groupname']; ?>" value="<?php echo $row['groupname']; ?>" />
                <label htmlFor="groupname">groupname</label>
              </div>
              {/* <?php } ?> */}

            </div>

            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" />

            <label htmlFor="content">Text:</label>
            <textarea name="content" id="content" cols={30} rows={10}></textarea>

            <label htmlFor="file">Picture, video or audio:</label>
            <input type="hidden" name="MAX_FILE_SIZE" value="100000000" />
            <input type="file" name="file" id="file" />

            <label htmlFor="youtubeurl">YouTube url:</label>
            <input type="text" name="youtubeurl" id="youtubeurl" />

            <input type="submit" value="Save" />
          </form>
        </div>
      </div>
    </main>
  );
};
