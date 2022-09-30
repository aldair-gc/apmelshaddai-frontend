import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { Filters } from "./styles";
import { FilterMenu } from "../../styles/global";

export default function Groups() {
  const [groups, setGroups] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function getData() {
      const dataGroups = await axios.get('/group');
      setGroups(dataGroups.data);
    }
    getData();
  }, []);

  function filterSelect(e: any) {
    setFilter(e.target.id)
  }

  return (
    <FilterMenu>
      <Filters>
        <li key="0" id="filter" className={filter}>
          <label htmlFor="0" className="groupname smallbutton">all
            <input type="radio" name="filter" id="0" value="all" className="all smallbutton hidden" onClick={filterSelect} defaultChecked />
          </label>
        </li>
        {groups.map((g: any) => (
          <li key={g.id}>
            <label htmlFor={g.id} className="groupname smallbutton">{g.group}
              <input type="radio" name="filter" id={g.id} value={"group" + g.id} className="hidden" onClick={filterSelect} />
            </label>
          </li>
        ))}
      </Filters>
    </FilterMenu>
  );
};
