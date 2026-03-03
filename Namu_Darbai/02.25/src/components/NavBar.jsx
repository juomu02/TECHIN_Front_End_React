import { NavLink } from "react-router";

export function NavBar() {
  return (
    <nav className="m-5">
      <NavLink className="p-2 bg-amber-200 border-1 m-" to="/">Home</NavLink>
      <NavLink className="p-2 bg-amber-200 border-1 m-2" to="/adduser">Add User</NavLink>
      <NavLink className="p-2 bg-amber-200 border-1 m-2" to="/filter">Filter</NavLink>
      <NavLink className="p-2 bg-amber-200 border-1 m-2" to="/search">Search</NavLink>
    </nav>
  );
}
