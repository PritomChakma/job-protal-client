import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import logo from "../../assets/icon/Nav-logo.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        console.log("Signout successfully");
      })
      .catch((error) => {
        console.log("Failed signout", error.message);
      });
  };
  const Links = (
    <>
      <ul className="menu menu-horizontal px-1">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/myApplications">My Application</NavLink>
        </li>
        <li>
          <NavLink to="/addJob">Add Job</NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-10 h-10" src={logo} alt="" />
          <h2 className="font-bold">Job Portal</h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">{Links}</div>
      <div className="navbar-end flex gap-3">
        {user ? (
          <>
            <button onClick={handleSignout}>Logout</button>
          </>
        ) : (
          <>
            <Link className="btn" to="/registration">
              Registration
            </Link>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
