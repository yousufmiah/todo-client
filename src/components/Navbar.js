import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar mb-10 bg-base-100 w-1/2 md:mx-auto">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Todo-App</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-1">
          <li>
            <NavLink to="/task" className="text-xl font-bold">
              Task
            </NavLink>
          </li>

          <li>
            <NavLink to="/todo" className="text-xl font-bold">
              Todo List
            </NavLink>
          </li>
          <li>
            <NavLink to="/calender" className="text-xl font-bold">
              Calender
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
