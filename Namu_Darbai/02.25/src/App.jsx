import { useState, useEffect } from "react";
import "./App.css";
import YoutubeForm from "./YoutubeForm";
import UsersList from "./components/UsersList.jsx";
import { getAllData } from "./services/get.js";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const usersList = await getAllData();
    setUsers(usersList);
  };

  useEffect(() => {
    const getData = async () => {
      await fetchUsers();
    };
    getData();
  }, []);

  return (
    <>
      <YoutubeForm />
      <UsersList users={users} />
    </>
  );
}

export default App;
