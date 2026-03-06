import { NavLink } from "react-router";

function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed z-2">
      <NavLink to="/" className="btn btn-ghost text-xl">
        Pagrindinis
      </NavLink>
      <NavLink to="/register" className="btn btn-ghost text-xl">
        Registruoti knygą
      </NavLink>
    </div>
  );
}
export default NavBar;
