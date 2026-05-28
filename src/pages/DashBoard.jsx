import React, { useState, useEffect } from "react";

import {
  Users,
  MessageSquare,
  CalendarDays,
  Activity,
  CheckCircle,
  Clock3,
  TrendingUp,
  UserCheck,
  Brain,
  Sparkles,
  X,
  AlertCircle,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Bargraph from "../components/BarGraph";
import Linechart from "../components/LineChartGraph";
import PieChartData from "../components/PieGraph";
import RadialChart from "../components/RadialChart";
import CommentsTable from "../components/CommentsTable";
import Footer from "../components/Footer";

const Dashboard = ({darkMode}) => {

  const [commentLoader, setCommentLoader] = useState(true);

  const [openAnalytics, setOpenAnalytics] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCommentLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  // DASHBOARD STATS
  const statsData = [
    {
      title: "Total Volunteers",
      value: "1,245",
      icon: <Users size={26} />,
      color: "from-blue-500 to-cyan-500",
      bg: darkMode ? "bg-gray-800" : "bg-blue-50",
    },

    {
      title: "Attendance Today",
      value: "932",
      icon: <CheckCircle size={26} />,
      color: "from-green-500 to-emerald-500",
      bg: darkMode ? "bg-gray-800" : "bg-green-50",
    },

    {
      title: "Pending Check-In",
      value: "84",
      icon: <Clock3 size={26} />,
      color: "from-yellow-500 to-orange-500",
      bg: darkMode ? "bg-gray-800" : "bg-yellow-50",
    },

    {
      title: "Messages",
      value: "8,320",
      icon: <MessageSquare size={26} />,
      color: "from-pink-500 to-rose-500",
      bg: darkMode ? "bg-gray-800" : "bg-pink-50",
    },

    {
      title: "Active Events",
      value: "45",
      icon: <CalendarDays size={26} />,
      color: "from-purple-500 to-indigo-500",
      bg: darkMode ? "bg-gray-800" : "bg-purple-50",
    },

    {
      title: "Volunteer Growth",
      value: "+18%",
      icon: <TrendingUp size={26} />,
      color: "from-cyan-500 to-sky-500",
      bg: darkMode ? "bg-gray-800" : "bg-cyan-50",
    },

    {
      title: "Attendance Rate",
      value: "92%",
      icon: <Activity size={26} />,
      color: "from-red-500 to-pink-500",
      bg: darkMode ? "bg-gray-800" : "bg-red-50",
    },

    {
      title: "Verified Users",
      value: "1,020",
      icon: <UserCheck size={26} />,
      color: "from-indigo-500 to-blue-500",
      bg: darkMode ? "bg-gray-800" : "bg-indigo-50",
    },
  ];

  // AI ANALYTICS
  const analyticsData = [
    {
      title: "Late Volunteers",
      value: "18",
      growth: "+12%",
      icon: <Clock3 size={24} />,
      bg: "bg-yellow-100",
      color: "text-yellow-600",
    },

    {
      title: "Absent Volunteers",
      value: "12",
      growth: "-5%",
      icon: <AlertCircle size={24} />,
      bg: "bg-red-100",
      color: "text-red-600",
    },

    {
      title: "Top Attendance",
      value: "96%",
      growth: "+18%",
      icon: <TrendingUp size={24} />,
      bg: "bg-green-100",
      color: "text-green-600",
    },

    {
      title: "AI Predictions",
      value: "Strong",
      growth: "+22%",
      icon: <Brain size={24} />,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
  ];

  return (
    <div
      className={`min-h-screen overflow-hidden transition-all duration-300 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 text-black"
      }`}
    >

      {/* NAVBAR */}
      <Navbar darkMode = {darkMode} />

      <div className="flex">

        {/* SIDEBAR */}
        <div className="fixed z-40 h-screen">
          <Sidebar darkMode ={darkMode} />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 lg:ml-[220px] p-4 sm:p-6 mt-20 w-full mb-[100px]">

          {/* HERO SECTION */}
          <div
            className={`relative overflow-hidden rounded-3xl p-5 sm:p-8 mb-8 shadow-2xl ${
              darkMode
                ? "bg-gradient-to-r from-gray-900 via-gray-800 to-black"
                : "bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#7c3aed]"
            }`}
          >

            {/* Glow */}
            <div className="absolute top-0 left-0 w-40 sm:w-72 h-40 sm:h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-40 sm:w-72 h-40 sm:h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">

              {/* LEFT */}
              <div className="w-full lg:w-[70%] text-center lg:text-left">

                <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
                  AI Volunteer Dashboard 🚀
                </h1>

                <p className="text-gray-200 max-w-2xl leading-relaxed">
                  Monitor volunteer attendance, AI analytics,      th
                  reports, growth tracking and engagement.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">

                  <button className="bg-white text-black px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition-all">
                    View Reports
                  </button>

                  <button
                    onClick={() => setOpenAnalytics(true)}
                    className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white px-5 py-3 rounded-2xl hover:bg-white/20 transition-all hover:scale-105"
                  >
                    <Brain size={20} />
                    Attendance Analytics
                  </button>

                </div>
              </div>

              {/* AI LOADER */}
              <div className="flex justify-center items-center">

                <div className="h-20 w-20 rounded-full bg-[#0b0b10] relative overflow-hidden flex items-center justify-center">

                  <div className="absolute inset-0 border-[5px] border-cyan-400/20 rounded-full"></div>

                  <div className="absolute h-20 w-20 border-[4px] border-t-cyan-400 border-r-purple-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>

                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></div>

                </div>

              </div>

            </div>

            {/* LIVE */}
            <div className="absolute top-5 right-5 bg-green-400 text-black px-4 py-1 rounded-full text-xs font-bold animate-pulse">
              ● LIVE SYSTEM
            </div>

          </div>

          {/* AI MODAL */}
          {openAnalytics && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4">

              <div
                className={`w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl ${
                  darkMode
                    ? "bg-gray-900 text-white"
                    : "bg-white text-black"
                }`}
              >

                {/* HEADER */}
                <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-purple-700 p-6 flex justify-between items-center">

                  <div>

                    <h1 className="text-3xl font-black text-white flex items-center gap-3">
                      <Sparkles className="text-yellow-300" />
                      AI Attendance Analytics
                    </h1>

                    <p className="text-blue-100 mt-2">
                      Smart attendance monitoring
                    </p>

                  </div>

                  <button
                    onClick={() => setOpenAnalytics(false)}
                    className="bg-white/20 p-2 rounded-full text-white"
                  >
                    <X />
                  </button>

                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

                  {analyticsData.map((item, index) => (
                    <div
                      key={index}
                      className={`rounded-3xl p-5 shadow-lg transition-all hover:shadow-2xl ${
                        darkMode
                          ? "bg-gray-800"
                          : "bg-white border border-gray-100"
                      }`}
                    >

                      <div className="flex justify-between items-center mb-5">

                        <div className={`${item.bg} p-3 rounded-2xl`}>
                          <div className={item.color}>
                            {item.icon}
                          </div>
                        </div>

                        <span className="text-green-500 font-bold text-sm">
                          {item.growth}
                        </span>

                      </div>

                      <h2 className="text-sm text-gray-400">
                        {item.title}
                      </h2>

                      <h1 className="text-3xl font-black mt-2">
                        {item.value}
                      </h1>

                    </div>
                  ))}

                </div>

              </div>

            </div>
          )}

          {/* STATS */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 p-6 rounded-3xl ${
              darkMode
                ? "bg-gray-900"
                : "bg-white/40"
            }`}
          >

            {statsData.map((item, index) => (
              <div
                key={index}
                className={`rounded-3xl p-5 shadow-lg transition-all hover:-translate-y-2 ${
                  item.bg
                }`}
              >

                <div
                  className={`h-14 w-14 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center mb-5`}
                >
                  {item.icon}
                </div>

                <h2 className="text-gray-400 text-sm">
                  {item.title}
                </h2>

                <h1
                  className={`text-3xl font-black mt-2 ${
                    darkMode
                      ? "text-white"
                      : "text-gray-800"
                  }`}
                >
                  {item.value}
                </h1>

              </div>
            ))}

          </div>

          {/* CHARTS */}
          {!commentLoader && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div
                  className={`rounded-3xl shadow-lg p-5 ${
                    darkMode
                      ? "bg-gray-900"
                      : "bg-white"
                  }`}
                >
                  <h2 className="font-bold text-xl mb-4">
                    Monthly Attendance
                  </h2>

                  <Bargraph />
                </div>

                <div
                  className={`rounded-3xl shadow-lg p-5 ${
                    darkMode
                      ? "bg-gray-900"
                      : "bg-white"
                  }`}
                >
                  <h2 className="font-bold text-xl mb-4">
                    Volunteer Growth
                  </h2>

                  <Linechart />
                </div>

                <div
                  className={`rounded-3xl shadow-lg p-5 ${
                    darkMode
                      ? "bg-gray-900"
                      : "bg-white"
                  }`}
                >
                  <h2 className="font-bold text-xl mb-4">
                    Event Participation
                  </h2>

                  <PieChartData />
                </div>

                <div
                  className={`rounded-3xl shadow-lg p-5 ${
                    darkMode
                      ? "bg-gray-900"
                      : "bg-white"
                  }`}
                >
                  <h2 className="font-bold text-xl mb-4">
                    Attendance Ratio
                  </h2>

                  <RadialChart />
                </div>

              </div>

              {/* TABLE */}
              <div
                className={`mt-8 rounded-3xl shadow-lg p-5 overflow-x-auto mb-24 ${
                  darkMode
                    ? "bg-gray-900"
                    : "bg-white"
                }`}
              >
                <CommentsTable />
              </div>
            </>
          )}

        </div>
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};



export default Dashboard;