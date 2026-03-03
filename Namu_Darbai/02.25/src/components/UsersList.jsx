import User from "./User";
import { Link } from "react-router";

function UsersList({ users }) {
  return (
    <>
      <h1>Users List</h1>
      <>
        {users.map((user) => {
          return <User user={user} key={user.id}/>;
        })}
      </>
      <Link to="/adduser">"Link to=... test"</Link>
    </>
  );
}

export default UsersList;
