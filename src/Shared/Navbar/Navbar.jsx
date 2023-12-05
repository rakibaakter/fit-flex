import { Link, NavLink } from "react-router-dom";
import Logo from "../../Component/Logo";
import { MdOutlineMenu } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Sign Out Successfully",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/trainers"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Trainers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/community"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Community
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar opacity-70 bg-black fixed z-10 font-bold py-4 px-4 md:px-12 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-4xl lg:hidden">
            <MdOutlineMenu />
          </label>
          <ul
            tabIndex={0}
            className="uppercase  menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-slate-700  rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <div className=" md:pl-12">
          <Logo />
        </div>
      </div>
      <div className="navbar-center hidden mx-12 lg:flex lg:justify-end">
        <ul className="uppercase menu menu-horizontal   items-center">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end pr-2">
        {user ? (
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex flex-col justify-center">
              <img
                className="h-8 w-6 md:h-8 md:w-10 rounded-full mx-auto"
                src={user?.photoURL}
                alt=""
              />
              <span>{user?.displayName}</span>
            </div>
            <button onClick={handleLogOut} className="font-normal">
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
