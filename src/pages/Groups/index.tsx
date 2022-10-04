import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import axios from "../../services/axios";
import { ButtonBar } from "../../styles/global";
import { GroupsEdit, GroupsList } from "./styles";

export const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      const dataGroups = await axios.get('/group');
      setGroups(dataGroups.data);
    }
    getData();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main>
      <div className="bg-blues"></div>

      <ButtonBar>
        <Link className="midbutton" to="/feed"><i className="fa-solid fa-arrow-left"></i>back</Link>
      </ButtonBar>

      <GroupsEdit className="box">
        <h2>Groups</h2>
        <form action="/php/newgroup.php" method="post">
          <label htmlFor="groupname">New group:</label>
          <input type="text" name="groupname" id="groupname" placeholder="Group name" />

          <input type="submit" value="Create" />
        </form>
        <p>List of registered groups:</p>
        <GroupsList>
          {groups.map((g: any) => (
            <li key={g.group} className="smallbutton no-link">{g.group}
              <a className="minibutton font-red"
                href={"/group_delete?group=" + g.group}>
                <i className="fa-solid fa-circle-xmark"></i>
              </a>
            </li>
          ))}

        </GroupsList>
      </GroupsEdit>
      {isLoading && <Loading />}
    </main>
  );
};
