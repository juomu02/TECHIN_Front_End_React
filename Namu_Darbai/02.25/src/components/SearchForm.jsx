import { useState } from "react";
import { useForm } from "react-hook-form";
import { getAllData } from "../services/get";
import { Outlet } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

function SearchForm({ setUsers }) {
  const {
    register, //registruot laukus i hook form
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      query: "",
    },
  });

  const [error, setError] = useState("");

  const formHandler = async ({ query }) => {
    try {
      const allUsers = await getAllData();
      const usersFind = allUsers.filter((user) =>
        user.username.includes(query),
      );
      if (usersFind.length === 0) throw new Error("No users");
      setUsers(usersFind);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="shadow my-2 p-2">
      {error && <p>{error}</p>}
      <h1 className="font-bold">Search User</h1>
      <form onSubmit={handleSubmit(formHandler)} noValidate>
        <div>
          <label htmlFor="query">Search by name:</label>
          <input
            type="text"
            name="query"
            id="query"
            className="border mx-2"
            {...register("query")} //WTF is this??
          />
          <div className="bg-red-300">{errors.username?.message}</div>
        </div>
        <div>
          <input type="submit" value="Search" className="bg-blue-300 p-1" />
        </div>
      </form>
      <Outlet />
    </div>
  );
}

export default SearchForm;
