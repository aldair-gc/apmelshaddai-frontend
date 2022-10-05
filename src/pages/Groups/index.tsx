import { EventHandler, useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../components/Loading";
import axios from "../../services/axios";
import { ButtonBar } from "../../styles/global";
import { GroupsEdit, GroupsList } from "./styles";

interface Group { id: number, group: string };

export const Groups = () => {
  const [groups, setGroups] = useState<Group[]>([]);
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

  async function handleSubmit(e: any) {
    e.preventDefault();
    const group = e.target[0].value;

    if (!group) {
      toast.error("A name must be informed");
      return;
    }

    if (groups.some(g => g.group === group)) {
      toast.error("There is a group with this name already");
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.post("/group", { group });
      if (res.status === 200) toast.success("New group created");

      const newGroups = [...groups, { group: res.data.group, id: res.data.id }];
      setGroups(newGroups);

      setIsLoading(false);
    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ error: "Unkown error" }];
      errors.map((error: any) => toast.error(error));
      setIsLoading(false);
    }
  }

  async function handleDelete(id: number) {
    try {
      setIsLoading(true);
      const response = await axios.delete("/group/" + id);
      if (response.status === 200) {
        toast.success("Group deleted");
      } else {
        toast.error("Something went wrong");
      }
      setIsLoading(false);

      (document.querySelector(".group-id-" + id) as HTMLLIElement).innerHTML = "";

      const newGroups = groups.filter((g: Group) => g.id !== id);
      setGroups(newGroups);

    } catch (err: any) {
      const errors = err.response?.data?.errors ?? [{ error: "Unkown error" }];
      errors.map((error: any) => toast.error(error));
      setIsLoading(false);
    }
  }

  return (
    <main>
      <div className="bg-blues"></div>

      <ButtonBar>
        <Link className="midbutton" to="/feed"><i className="fa-solid fa-arrow-left"></i>back</Link>
      </ButtonBar>

      <GroupsEdit className="box">
        <h2>Groups</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="groupname">New group:</label>
          <input type="text" name="groupname" id="groupname" placeholder="Group name" />

          <input type="submit" value="Create" />
        </form>
        <p>List of registered groups:</p>
        <GroupsList id="group-list">
          {groups.map((g: Group) => (
            <li key={g.id} className={"smallbutton group-id-" + g.id}>{g.group}
              <a className="minibutton font-red" onClick={() => handleDelete(g.id)}><i className="fa-solid fa-circle-xmark"></i></a>
            </li>
          ))}
        </GroupsList>
      </GroupsEdit>
      {isLoading && <Loading />}
    </main>
  );
};
