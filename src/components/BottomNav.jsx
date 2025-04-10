import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow md:hidden z-50">
      <div className="flex justify-around py-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-blue-600" : "text-gray-500"
            }`
          }
        >
          <AiFillHome size={24} />
          <span>Home</span>
        </NavLink>

        <NavLink
          // to="/timeline/young-adult"
          to="#"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-blue-600" : "text-gray-500"
            }`
          }
        >
          <BsGlobe2 size={24} />
          {/* <AiOutlineCalendar size={24} /> */}
          <span>Language</span>
        </NavLink>

        <NavLink
          // to="/scenario/sara"
          to="#"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-blue-600" : "text-gray-500"
            }`
          }
        >
          <AiOutlineUser size={24} />
          <span>Login</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
