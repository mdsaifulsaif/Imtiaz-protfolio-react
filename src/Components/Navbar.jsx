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

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/myprofile">My Profile</NavLink>

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
          className=" px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          {user ? "LogOut" : "Login"}
        </Link>
      </div>
    </>
  );

  return (
    <nav className="w-full bg-gray-200 mb-4 shadow-md relative">
      <div className="max-w-7xl mx-auto px-5  md:px-12 flex items-center justify-between h-16">
        {/* Logo */}

        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">Job House</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">{menuItem}</div>
        {/* mobile Menu */}
        <div
          className={`w-full z-20 absolute ${
            clickIcon ? "top-15" : "-top-100"
          }   items-center left-0 md:hidden flex flex-col py-5  gap-3 bg-gray-200 transition-all`}
        >
          {menuItem}
        </div>

        {/* Mobile Hamburger Icon (Optional for mobile toggle) */}
        <div className="md:hidden">
          <button onClick={handleMenuIcon}>
            {clickIcon ? <IoClose size={30} /> : <FaBarsStaggered size={30} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
