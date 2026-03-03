import { useState, useEffect } from "react";
import "./App.css";
import YoutubeForm from "./YoutubeForm";
import UsersList from "./components/UsersList.jsx";
import SearchForm from "./components/SearchForm.jsx";
import FilterForm from "./components/FilterForm.jsx";
import { getAllData } from "./services/get.js";
import { Route, Routes } from "react-router";
import { NavBar } from "./components/NavBar.jsx";
import { ChildComponent } from "./components/ChildComponent.jsx";

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
      <NavBar />
      <Routes>
        <Route path="/" element={<UsersList users={users} />} />
        <Route path="/adduser" element={<YoutubeForm />} />
        <Route path="/filter" element={<FilterForm setUsers={setUsers} />} />
        <Route path="/search" element={<SearchForm setUsers={setUsers} />}>
          <Route path="child" element={<ChildComponent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
