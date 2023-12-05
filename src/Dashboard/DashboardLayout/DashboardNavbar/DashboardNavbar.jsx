import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const DashboardNavbar = () => {
  const isAdmin = true;

  const mainNavItems = (
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
    </>
  );

  const adminNavItems = (
    <>
      <li>
        <NavLink
          to="/dashboard/all-subscribers"
          className={({ isActive }) => (isActive ? "text-red-300" : "")}
        >
          All Subscriber
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/all-trainers"
          className={({ isActive }) => (isActive ? "text-red-300" : "")}
        >
          All Trainers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/applied-trainers"
          className={({ isActive }) => (isActive ? "text-red-300" : "")}
        >
          Applied Trainers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/balance"
          className={({ isActive }) => (isActive ? "text-red-300" : "")}
        >
          Balance
        </NavLink>
      </li>
    </>
  );

  const memberNavItems = (
    <>
      <li>
        <NavLink
          to="/dashboard/activity-log"
          className={({ isActive }) => (isActive ? "text-red-300" : "")}
        >
          Activity Log
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/profile-setting"
          className={({ isActive }) => (isActive ? "text-red-300" : "")}
        >
          Profile Settings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/recommended-classes"
          className={({ isActive }) => (isActive ? "text-red-300" : "")}
        >
          Recommended Classes
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer z-10 lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <MdDashboard className="text-4xl text-red-400 " />
          </label>
        </div>
        <div className="drawer-side  ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className="menu p-4 md:w-80 min-h-full
           bg-slate-700 text-white md:text-xl font-medium "
          >
            {/* Sidebar content here */}
            {isAdmin ? adminNavItems : memberNavItems}
            <div className="divider"></div>
            {mainNavItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
