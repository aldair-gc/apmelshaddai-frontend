import "./style.css";

export const Feed = () => {
  return (
    <main>
      <div className="bg-blues"></div>

      <div className="posts-container">
        <div className="filter-menu">
          <ul id="filters">
            <li id="all" className="smallbutton active">all</li>
            {/* <?php while ($row = mysqli_fetch_array($groups)) { ?>
                        <li id="<?php echo $row['groupname']; ?>" className="groupname smallbutton"><?php echo $row['groupname']; ?></li>
                    <?php } ?> */}
          </ul>

          {/* <?php require('php/feed_right_menu.php') ?> */}

        </div>

        <div className="post-container">

          {/* <?php require('php/buildposts.php') ?> */}

        </div>
      </div>
    </main>

  );
};
