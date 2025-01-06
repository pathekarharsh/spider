import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHealthAndSafety } from "react-icons/md";
import { FaUserCircle, FaEdit, FaMoon, FaSignOutAlt, FaClipboardCheck } from "react-icons/fa";

const Navbar = ({ screenName }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <MdHealthAndSafety className="text-blue-900 text-3xl" />
        <span className="text-xl font-bold text-blue-900">Healthify</span>
      </div>

      {/* Center: Screen Name */}
      <div className="text-gray-700 font-semibold text-lg">{screenName}</div>

      {/* Right: Profile Dropdown */}
      <div className="relative">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-gray-600 font-medium">Hey, Harsh!</span>
          <FaUserCircle className="text-blue-900 text-2xl" />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40">
            <Link
              to="/myprofile"
              className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700"
            >
              <FaUserCircle className="mr-2" />
              My Profile
            </Link>
            <Link
              to="/updateprofile"
              className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700"
            >
              <FaEdit className="mr-2" />
              Update Profile
            </Link>
            <Link
              to="/monthly-health-test"
              className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700"
            >
              <FaClipboardCheck className="mr-2" />
              Monthly Health Test
            </Link>
            <button
              className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-gray-700"
              onClick={() => alert("Dark mode toggled!")}
            >
              <FaMoon className="mr-2" />
              Dark Mode
            </button>
            <Link
              to="/"
              className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700"
            >
              <FaSignOutAlt className="mr-2" />
              Log Out
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
