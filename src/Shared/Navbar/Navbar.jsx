import { NavLink } from "react-router-dom";
import Logo from "../../Component/Logo";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Our Gallery</NavLink>
      </li>
      <li>
        <NavLink
          to="/trainers"
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Our Trainers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Our Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/community"
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Our Community
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar opacity-70 fixed z-10 font-bold py-4 px-4 md:px-12 lg:px-20">
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
      <div className="navbar-center hidden w-2/3 lg:flex lg:justify-end">
        <ul className="uppercase menu menu-horizontal px-1 space-x-2 items-center">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end pr-2">
        <button>get start</button>
      </div>
    </nav>
  );
};

export default Navbar;
