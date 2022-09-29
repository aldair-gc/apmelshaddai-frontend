import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { Filters } from "./styles";
import { FilterMenu } from "../../styles/global";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function getData() {
      const dataGroups = await axios.get('/group');
      setGroups(dataGroups.data);
    }
    getData();
  }, []);

  return (
    <FilterMenu>
      <Filters>
        <li key="all" className="all smallbutton active">all</li>
        {groups.map((g: any) => (
          <li key={g.group} className="groupname smallbutton">{g.group}</li>
        ))}
      </Filters>
    </FilterMenu>
  );
};
