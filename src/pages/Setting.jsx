import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import {
  Bell,
  Moon,
  User,
  LogOut,
  Globe,
  Menu,
  Shield,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);
  const [notifications, setNotifications] = useState(
    JSON.parse(localStorage.getItem("notifications")) ?? true
  );

  const [profile, setProfile] = useState({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
  });

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );
  const [pageLoading, setPageLoading] = useState(true);

  // Save Settings
  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem("name", profile.name);
    localStorage.setItem("email", profile.email);
  }, [profile]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen flex transition-all duration-300 ${darkMode
        ? "bg-gray-900 text-white"
        : "bg-gray-100 text-gray-900"
        }`}
    >
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen z-40">
        <Sidebar darkMode={darkMode} />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`relative z-50 w-[280px] h-full shadow-2xl ${darkMode
              ? "bg-gray-900 text-white"
              : "bg-white text-black"
              }`}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-xl bg-red-500 text-white"
              >
                <X size={20} />
              </button>
            </div>

            <Sidebar darkMode={darkMode} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-[290px] mr-[60px] w-full mt-[40px] ">
        {/* Navbar */}
        <Navbar darkMode={darkMode} />


        {/* Mobile Menu */}
        <div className="lg:hidden px-4 pt-4 mt-[70px]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-2xl shadow-lg transition"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Header */}
        <div className="px-4 md:px-6 lg:px-8 pt-6">
          <div
            className={` mt-[74px] relative overflow-hidden rounded-3xl p-6 md:p-8 shadow-2xl transition-all duration-300 ${darkMode
              ? "bg-gray-800 border border-gray-700"
              : " bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#7c3aed] shadow-2xl text-white"
              }`}
          >
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center">

              <div>
                <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
                  Settings 🚀
                </h1>

                <p className="text-blue-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Manage your account preferences and security...
                </p>


              </div>

              {/* AI LOADER */}
              <div className="mt-10 lg:mt-0 flex justify-center items-center">

                <div className="  mt-10 h-20 w-20 rounded-full bg-[#0b0b10] relative overflow-hidden flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.4)]">

                  {/* Outer Ring */}
                  <div className="absolute inset-0 border-[6px] border-cyan-400/20 rounded-full"></div>

                  {/* Rotating Ring */}
                  <div className="absolute h-10 w-10 border-[5px] border-t-cyan-400 border-r-purple-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>

                  {/* Glow */}
                  <div className="absolute h-24 w-24 bg-purple-500/20 blur-2xl rounded-full"></div>

                  {/* Core */}
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse shadow-[0_0_30px_#8b5cf6]"></div>

                </div>

              </div>

            </div>

            {/* LIVE BADGE */}
            <div className="absolute top-5 right-5 bg-green-400 text-black px-4 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
              ● LIVE SYSTEM
            </div>

          </div>
        </div>

        {/* Main Settings */}
        <main className="flex-1 px-4 md:px-6 lg:px-8 py-8">
          {pageLoading ? (
            <div className="flex justify-center items-center h-[70vh]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : (
            <>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* LEFT SIDE */}
                <div className="xl:col-span-2 space-y-6">
                  {/* Profile */}
                  <div
                    className={`rounded-3xl p-5 md:p-6 shadow-lg transition hover:shadow-2xl ${darkMode
                      ? "bg-gray-800"
                      : "bg-white"
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-blue-100 p-3 rounded-2xl">
                        <User className="text-blue-600" />
                      </div>

                      <div>
                        <h2 className="text-lg md:text-xl font-bold">
                          Profile Settings
                        </h2>

                        <p className="text-sm opacity-70">
                          Update your personal information
                        </p>

                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={profile.name}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            name: e.target.value,
                          })
                        }
                        className={`p-4 rounded-2xl border outline-none transition focus:ring-2 focus:ring-blue-500 ${darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-gray-50"
                          }`}
                      />

                      {/* Email */}
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={profile.email}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            email: e.target.value,
                          })
                        }
                        className={`p-4 rounded-2xl border outline-none transition focus:ring-2 focus:ring-blue-500 ${darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-gray-50"
                          }`}
                      />
                    </div>

                    <button className="mt-5 w-full md:w-auto px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-2xl transition font-semibold">
                      Save Changes
                    </button>
                  </div>


                  {/* Toggle Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Notifications */}
                    <div
                      className={`rounded-3xl p-6 shadow-lg hover:shadow-2xl transition ${darkMode
                        ? "bg-gray-800"
                        : "bg-white"
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="bg-yellow-100 p-3 rounded-2xl">
                            <Bell className="text-yellow-500" />
                          </div>

                          <div>
                            <h3 className="font-semibold text-lg">
                              Notifications
                            </h3>

                            <p className="text-sm opacity-70">
                              Enable app notifications
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            setNotifications(!notifications)
                          }
                          className={`w-14 h-7 rounded-full flex items-center p-1 transition ${notifications
                            ? "bg-green-500"
                            : "bg-gray-400"
                            }`}
                        >
                          <div
                            className={`bg-white w-5 h-5 rounded-full transition ${notifications
                              ? "translate-x-7"
                              : ""
                              }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Dark Mode */}
                    <div
                      className={`rounded-3xl p-6 shadow-lg hover:shadow-2xl transition ${darkMode
                        ? "bg-gray-800"
                        : "bg-white"
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 bg- black">
                          <div className="bg-indigo-100 p-3 rounded-2xl"> 
                            <Moon className="text-indigo-600" />
                          </div>

                          <div>
                            <h3 className="font-semibold text-lg">
                              Dark Mode
                            </h3>

                            <p className="text-sm opacity-70">
                              Switch app theme
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            setDarkMode(!darkMode)
                          }
                          className={`w-14 h-7 rounded-full flex items-center p-1 transition ${darkMode
                            ? "bg-indigo-600"
                            : "bg-gray-400"
                            }`}
                        >
                          <div
                            className={`bg-white w-5 h-5 rounded-full transition ${darkMode
                              ? "translate-x-7"
                              : ""
                              }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div
                      className={`rounded-3xl p-6 shadow-lg transition mb-[300px] ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                        }`}
                    >
                      {/* Title */}
                      <h2 className="text-xl font-bold mb-4">
                        Change Password
                      </h2>

                      {/* Inputs */}
                      <div className="space-y-4">

                        <input
                          type="password"
                          placeholder="Old Password"
                          className={`w-full p-3 rounded-xl border outline-none transition ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50"
                            }`}
                        />


                        <input
                          type="password"
                          placeholder="New Password"
                          className={`w-full p-3 rounded-xl border outline-none transition ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50"
                            }`}
                        />

                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className={`w-full p-3 rounded-xl border outline-none transition ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50"
                            }`}
                        />

                      </div>

                      {/* Button */}
                      <button className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition">
                        Update Password
                      </button>
                    </div>


                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-6">
                  {/* Language */}
                  <div
                    className={`rounded-3xl p-6 shadow-lg hover:shadow-2xl transition ${darkMode
                      ? "bg-gray-800"
                      : "bg-white"
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="bg-green-100 p-3 rounded-2xl">
                        <Globe className="text-green-600" />
                      </div>
                      <div>
                        <h2 className="font-bold text-lg">
                          Language
                        </h2>

                        <p className="text-sm opacity-70">
                          Choose app language
                        </p>
                      </div>
                    </div>

                    <select
                      value={language}
                      onChange={(e) =>
                        setLanguage(e.target.value)
                      }
                      className={`w-full p-4 rounded-2xl border outline-none ${darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50"
                        }`}
                    >
                      <option>English</option>
                      <option>Hindi</option>
                    </select>
                  </div>

                  {/* Privacy */}
                  <div
                    className={`rounded-3xl pt-5 pl-5 pb-5 shadow-lg hover:shadow-2xl transition ${darkMode
                      ? "bg-gray-800"
                      : "bg-white"
                      }`}
                  >
                    <div className=" flex gap-4 mb-4">
                      <div className="bg-purple-100 p-3 rounded-2xl">
                        <Shield className="text-purple-600" />
                      </div>

                      <div>
                        <h2 className="font-bold text-lg">
                          Privacy & Security
                        </h2>

                        <p className="text-sm opacity-70">
                          Your data is protected
                        </p>
                      </div>
                    </div>

                    <div className=" space-x-2 text-sm opacity-80">
                      <p>✔ Secure Login Enableds</p>
                      <p>✔ Email Verification Active</p>
                      <p>✔ Data Encryption Enabled</p>
                    </div>
                  </div>

                  {/* Logout */}
                  <div
                    className={`rounded-3xl p-6 shadow-lg hover:shadow-2xl transition ${darkMode
                      ? "bg-gray-800"
                      : "bg-white"
                      }`}
                  >
                    <button
                      onClick={handleLogout}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl transition font-semibold flex items-center justify-center gap-2"
                    >
                      <LogOut size={20} />
                      Logout Account
                    </button>
                  </div>
                </div>
              </div>
            </>
          )};
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Settings;