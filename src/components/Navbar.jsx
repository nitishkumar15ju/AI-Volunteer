import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Edit2, Save } from "lucide-react";

const Navbar = ({ darkMode }) => {
  const [DarkToggle, setChangeToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  // PROFILE DATA
  const [profileData, setProfileData] = useState({
    name: "AI Volunteer User",
    email: "nitishkumar7707@gmail.com",
    role: "Volunteer Member",
    phone: "+91 9876543210",
    location: "Panipat, Haryana",
  });
  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };
  // SAVE PROFILE
  const handleSave = () => {
    setEditMode(false);
    alert("Profile Updated Successfully");
  };

  // logout 
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-0 lg:left-[220px] left-0 right-0 z-50 px-4 sm:px-6 py-3  transition-all duration-300 ${darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
          }`}
      >
        <div className="flex items-center justify-between gap-4">

          {/* TITLE */}
          <h4 className="font-semibold text-sm sm:text-lg whitespace-nowrap">
            Ai-Volunteer Management
          </h4>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">

            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-1 rounded-md w-56 text-black outline-none"
            />

            <button className="bg-blue-600 text-white px-4 py-1 rounded-md">
              Search
            </button>

            {/* PROFILE */}
            <div className="flex items-center gap-1">

              <div
                onClick={() => setProfileOpen(true)}
                className="cursor-pointer hover:scale-105 transition relative"
              >
                <img
                  src="/assets/profile1.jpeg"
                  alt="profile"
                  className="h-9 w-9 rounded-full object-cover border-2"
                />

                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
              </div>
              <h1 onClick={() => setProfileOpen(true)} className="text-black-lg cursor-pointer"></h1>
            </div>

          </div>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* MOBILE MENU CONTENT */}
        {menuOpen && (
          <div className="lg:hidden mt-4 bg-gray-100 p-4 rounded-xl space-y-3">

            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-2 rounded-md w-full"
            />

            <button className="bg-blue-600 text-white py-2 w-full rounded-md">
              Search
            </button>

            <div
              onClick={() => setProfileOpen(true)}
              className="flex items-center cursor-pointer"
            >
              <img
                src="/assets/profile1.jpeg"
                alt="profile"
                className="h-10 w-10 rounded-full object-cover border-2 border-blue-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* PROFILE MODAL */}
      {profileOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000]"
          onClick={() => setProfileOpen(false)}
        >
          <div
            className={`w-[500px] rounded-3xl shadow-2xl overflow-hidden ${darkMode
              ? "bg-gray-900 text-white"
              : "bg-white text-black"
              }`}
            onClick={(e) => e.stopPropagation({})}
          >
            {/* HEADER */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-5 text-white text-center relative">

              <button
                onClick={() => setProfileOpen(false)}
                className="absolute right-4 top-3 text-xl"
              >
                ✕
              </button>

              {/* PROFILE IMAGE */}
              <div className="relative inline-block">
                <img
                  src="/assets/profile1.jpeg"
                  alt="profile"
                  className="h-24 w-24 rounded-full border-4 border-white object-cover mx-auto"
                />

                <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>
              </div>

              {/* NAME */}
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  className="mt-3 text-center bg-white text-black rounded-lg px-3 py-1 outline-none"
                />
              ) : (
                <h2 className="mt-3 font-bold text-xl">
                  {profileData.name}
                </h2>
              )}

              {/* ROLE */}
              {editMode ? (
                <input
                  type="text"
                  name="role"
                  value={profileData.role}
                  onChange={handleChange}
                  className="mt-2 text-center bg-white text-black rounded-lg px-3 py-1 outline-none"
                />
              ) : (
                <p className="text-sm opacity-80">
                  {profileData.role}
                </p>
              )}
            </div>

            {/* BODY */}
            <div className="p-5 space-y-4">

              {/* EMAIL */}
              <div>
                <label className="text-xl font-semibold">
                  Email :
                </label>

                {editMode ? (
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-3 py-2 outline-none text-black"
                  />
                ) : (
                  <p className="text-gray-500 text-sm">
                    {profileData.email}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <label className="text-xl font-semibold">
                  Phone :
                </label>

                {editMode ? (
                  <input
                    type="text"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-3 py-2 outline-none text-black"
                  />
                ) : (
                  <p className="text-gray-500 text-sm">
                    {profileData.phone}
                  </p>
                )}
              </div>

              {/* LOCATION */}
              <div>
                <label className="text-xl font-semibold">
                  Location :
                </label>

                {editMode ? (
                  <input
                    type="text"
                    name="location"
                    value={profileData.location}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-3 py-2 outline-none text-black"
                  />
                ) : (
                  <p className="text-gray-500 text-sm">
                    {profileData.location}
                  </p>
                )}
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-3 text-center pt-2">

                <div className="bg-gray-100 p-3 rounded-xl">
                  <h3 className="font-bold text-blue-600">
                    24
                  </h3>

                  <p className="text-xs">
                    Tasks
                  </p>
                </div>  

                <div className="bg-gray-100 p-3 rounded-xl">
                  <h3 className="font-bold text-green-600">
                    Active
                  </h3>

                  <p className="text-xs">
                    Status
                  </p>
                </div>

                <div className="bg-gray-100 p-3 rounded-xl">
                  <h3 className="font-bold text-purple-600">
                    NGO
                  </h3>

                  <p className="text-xs">
                    Role
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="space-y-3 pt-4">

                {!editMode ? (
                  <button
                    onClick={() => setEditMode(true)}
                    className="w-full bg-blue-600 text-white py-2 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Edit2 size={18} />
                    Edit Profile
                  </button>
                ) : (
                  <button
                    onClick={handleSave}
                    className="w-full bg-green-600 text-white py-2 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Save size={18} />
                    Save Profile
                  </button>
                )}

                <button
                  className="w-full bg-white text-black border-2 py-2 rounded-xl"
                >
                  +Add account
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-2 rounded-xl"
                >
                  Logout
                </button>

              </div>
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default Navbar;