import deleteData from "../services/delete.js";

function User({ user }) {
  return (
    <div className="border m-2">
      <p>User Name: {user.username}</p>
      <p>email: {user.email}</p>
      <p>
        hobbies:{" "}
        {user.hobbies.map((hobby, index) => {
          return <span key={index}>{hobby}</span>;
        })}
      </p>
      <button
        className="bg-red-200 p-2 rounded-md"
        onClick={() => {
          deleteData(user.id);
        }}
      >{`Delete user: ${user.username}`}</button>
    </div>
  );
}

export default User;
