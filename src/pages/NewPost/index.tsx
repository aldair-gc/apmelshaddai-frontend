import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../services/axios";

export default function NewPost() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function getData() {
      const dataGroups = await axios.get('/group');
      setGroups(dataGroups.data);
    }
    getData();
  }, []);

  return (
    <main>
      <div className="bg-blues"></div>

      <div className="container box">
        <div className="filter-menu">
          <ul>
            <li key={Math.random()}>
              <Link className="midbutton" to="/feed">
                <i className="fa-solid fa-arrow-left"></i>
                back
              </Link>
            </li>
          </ul>
          <ul>
            <li key={Math.random()}>
              <Link className="midbutton" to="/groups">
                <i className="fa-solid fa-object-group"></i>
                groups
              </Link>
            </li>
          </ul>
        </div>

        <div className="new-post post">
          <h2>Create new post</h2>

          <form action="/post" method="POST">
            <label htmlFor="group">Group:</label>
            <div className="radio-list">

              {groups.map((g: any) => (
                <div className="radio-option">
                  <input className="hidden" type="radio" name="group" id={g.group} value={g.group} />
                  <label htmlFor={g.group}>{g.group}</label>
                </div>
              ))}

            </div>

            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" />

            <label htmlFor="text">Text:</label>
            <textarea name="text" id="text" cols={30} rows={10}></textarea>

            <input type="submit" value="Create" />
          </form>
        </div>
      </div>
    </main>
  );
};
