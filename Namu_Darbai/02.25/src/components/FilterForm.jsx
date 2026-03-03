import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function FilterForm({ setUsers }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      likes: "",
    },
  });
  const [error, setError] = useState("");

  const filterUsers = async (formData) => {
    try {
      const { email, likes } = formData;
      const filterQuery = { email, likes_gte: likes };

      const response = await axios.get(API_URL, { params: filterQuery });
      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="shadow my-2 p-2">
      {error && <p>{error}</p>}
      <h1 className="font-bold">Users filter</h1>
      <form onSubmit={handleSubmit(filterUsers)} noValidate>
        <div>
          <label htmlFor="email">User email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border mx-2"
            {...register("email", {
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g,
                message: "Invalid email address",
              },
              validate: {
                notBlackListed: (fieldValue) => {
                  if (fieldValue.endsWith("bademail.com"))
                    return "This email not allowed";
                },
              },
            })}
          />
          <div className="bg-red-300">{errors.email?.message}</div>
        </div>

        <div>
          <label htmlFor="posts">Likes</label>
          <input
            type="nuber"
            name="likes"
            id="likes"
            className="border mx-2"
            {...register("likes")}
          />
          <div className="bg-red-300">{errors.posts?.message}</div>
        </div>
        <div>
          <input
            type="submit"
            value="Filter Users"
            className="bg-blue-300 p-1"
          />
          <input
            type="reset"
            value="Reset"
            onClick={() => {
              filterUsers({ email: "", posts: "" });
              reset();
            }}
            className="bg-blue-300 p-1 mx-2"
          />
        </div>
      </form>
    </div>
  );
}

export default FilterForm;
