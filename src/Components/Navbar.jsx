// Navbar.jsx
import React, { use, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { FaUserCircle } from "react-icons/fa";

import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, LogOutUser } = use(AuthContext);
  // console.log(user.photoURL);

  const [clickIcon, setClickIcon] = useState(false);
  const handleMenuIcon = () => {
    setClickIcon(!clickIcon);
  };

  const handleLogout = () => {
    LogOutUser()
      .then((res) => {})
      .catch((error) => {});
  };

  const menuItem = (
    <>
      {/* Desktop Menu */}

      <NavLink className="text-white font-semibold" to="/">
        Home
      </NavLink>
      <NavLink className="text-white font-semibold" to="/about">
        About
      </NavLink>
      <NavLink className="text-white font-semibold" to="/education">
        Education
      </NavLink>
      <NavLink className="text-white font-semibold" to="/">
        Get in Tuch
      </NavLink>

      <div className="flex items-center justify-center gap-3 cursor-pointer">
        <Link to="/myprofile">
          {user ? (
            <img
              className="w-[50px] h-[50px] rounded-full border-2 border-blue-700 "
              src={user.photoURL && user.photoURL}
              alt=""
            />
          ) : (
            <FaUserCircle size={30} />
          )}
        </Link>

        <Link
          to="/auth/login"
          onClick={handleLogout}
          className=" px-5 py-2 bg-green-500 text-white rounded-xl hover:bg-blue-700 transition"
        >
          {user ? "LogOut" : "Login"}
        </Link>
      </div>
    </>
  );

  return (
    <nav className=" bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 w-full bg-gray-200 mb-4 shadow-md relative">
      <div className="max-w-7xl mx-auto px-5  md:px-12 flex items-center justify-between h-16">
        {/* Logo */}

        <div className="text-2xl font-bold text-white">
          <Link to="/">Job House</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">{menuItem}</div>
        {/* mobile Menu */}
        <div
          className={`w-full z-20 absolute ${
            clickIcon ? "top-15" : "-top-100"
          }   items-center  left-0 md:hidden flex flex-col py-5  gap-3 bg-gray-800 transition-all`}
        >
          {menuItem}
        </div>

        {/* Mobile Hamburger Icon (Optional for mobile toggle) */}
        <div className="md:hidden">
          <button onClick={handleMenuIcon}>
            {clickIcon ? (
              <IoClose className="text-white" size={30} />
            ) : (
              <FaBarsStaggered className="text-white" size={30} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
