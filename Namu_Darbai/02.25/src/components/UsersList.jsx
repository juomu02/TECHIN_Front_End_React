import User from "./User";

function UsersList({ users }) {
  return (
    <>
      <h1>Users List</h1>
      <>
        {users.map((user) => {
          return <User user={user} key={user.id}/>;
        })}
      </>
    </>
  );
}

export default UsersList;
