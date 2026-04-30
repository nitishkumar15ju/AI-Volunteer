import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [DarkToggle, setChangeToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const GoDashboard = () => {
    navigate("/dashboard");
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 lg:left-[200px] left-0 right-0 z-50 px-4 sm:px-6 py-3 shadow-md transition-all duration-300 ${
        DarkToggle ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          

          <h4 className="font-semibold text-sm sm:text-lg whitespace-nowrap">
            Ai-Volunteer Management
          </h4>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
          {/* Search */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-1 rounded-l-md outline-none w-56 text-black"
            />
            <button className="bg-blue-500 text-white px-4 py-1 rounded-r-md hover:bg-blue-600">
              Search
            </button>
          </div>

          {/* Buttons */}
          <a href="http://character.ai/" target="_blank" rel="noreferrer">
            <button className="px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white transition">
              Chat with Oli
            </button>
          </a>

          {/* Dark Mode */}
          <div className="flex items-center gap-3">
            <img
              src={
                DarkToggle
                  ? "/assets/darkmood.png"
                  : "/assets/sunriselogo.png"
              }
              alt=""
              className="h-5 rounded-full bg-white"
            />

            <div
              onClick={() => setChangeToggle(!DarkToggle)}
              className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition ${
                DarkToggle
                  ? "bg-gray-200 border-2 border-blue-400"
                  : "bg-gray-400"
              }`}
            >
              <div
                className={`w-3 h-3 bg-white rounded-full transition ${
                  DarkToggle ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </div>

            <CgProfile size={28} />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`lg:hidden mt-4 rounded-xl p-4 space-y-4 shadow-md ${
            DarkToggle ? "bg-gray-900" : "bg-gray-100"
          }`}
        >
          {/* Search */}
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-2 rounded-md text-black"
            />
            <button className="bg-blue-500 text-white py-2 rounded-md">
              Search
            </button>
          </div>

          {/* Buttons */}
          <button
            onClick={GoDashboard}
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white"
          >
            Dashboard
          </button>

          <a href="http://character.ai/" target="_blank" rel="noreferrer">
            <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white">
              Chat with Oli
            </button>
          </a>

          {/* Theme */}
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>

            <div
              onClick={() => setChangeToggle(!DarkToggle)}
              className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
                DarkToggle
                  ? "bg-gray-200 border-2 border-blue-400"
                  : "bg-gray-400"
              }`}
            >
              <div
                className={`w-3 h-3 bg-white rounded-full transition ${
                  DarkToggle ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <CgProfile size={30} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;