import deleteData from "../services/delete.js";
import { getOne } from "../services/get.js";
import updateData from "../services/update.js";
import UserEditForm from "./UserEditForm.jsx";
import { useState } from "react";

function User({ user }) {
  const [formShow, setFormShow] = useState(false);

  const likesHandler = async (id) => {
    const { likes } = await getOne(id); //deconstructinti likes tiesiai is getOne
    // const { likes } = user;

    await updateData(id, { likes: likes + 1 });
  };

  return (
    <>
      {formShow && <UserEditForm user={user} setFormShow={setFormShow} />}
      <div className="border m-2">
        <p>User Name: {user.username}</p>
        <p>email: {user.email}</p>
        <p>likes: {user.likes}</p>
        <p>
          hobbies:{" "}
          {user.hobbies.map((hobby, index) => {
            return <span key={index}>{hobby}</span>;
          })}
        </p>{" "}
        <button
          className="bg-blue-200 p-2 rounded-md"
          onClick={() => {
            likesHandler(user.id);
          }}
        >
          Like
        </button>
        <button
          className="bg-red-200 p-2 rounded-md"
          onClick={() => {
            deleteData(user.id);
          }}
        >{`Delete user: ${user.username}`}</button>
        <button className="bg-blue-300 p-2 rounded-md"
          onClick={() => {
            setFormShow((prev) => !prev);
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
}

export default User;
