import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import {
  FileText,
  Download,
  Users,
  Calendar,
  HeartHandshake,
  IndianRupee,
  TrendingUp,
  X,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Loader2,
} from "lucide-react";

const Reports = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  // Loader States
  const [pageLoading, setPageLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const navigate = useNavigate();

  // Fake Page Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const reports = [
    {
      id: 1,
      title: "Blood Donation Camp",
      date: "12 May 2026",
      volunteers: 45,
      status: "Completed",

      volunteerDetails: {
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        phone: "+91 9876543210",
        location: "Panipat, Haryana",
      },
    },

    {
      id: 2,
      title: "Food Distribution Drive",
      date: "18 May 2026",
      volunteers: 30,
      status: "Active",

      volunteerDetails: {
        name: "Priya Verma",
        email: "priya@gmail.com",
        phone: "+91 8765432109",
        location: "Delhi, India",
      },
    },

    {
      id: 3,
      title: "Tree Plantation",
      date: "25 May 2026",
      volunteers: 60,
      status: "Upcoming",

      volunteerDetails: {
        name: "Aman Gupta",
        email: "aman@gmail.com",
        phone: "+91 9988776655",
        location: "Noida, India",
      },
    },

    {
      id: 4,
      title: "Medical Help Camp",
      date: "27 May 2026",
      volunteers: 100,
      status: "Upcoming",

      volunteerDetails: {
        name: "Ankita Thakur",
        email: "ankita@gmail.com",
        phone: "+91 9871234567",
        location: "Chandigarh, India",
      },
    },

    {
      id: 5,
      title: "Festival Fusion",
      date: "30 May 2026",
      volunteers: 90,
      status: "Upcoming",

      volunteerDetails: {
        name: "Sourav Thakur",
        email: "sourav@gmail.com",
        phone: "+91 9012345678",
        location: "Chandigarh, India",
      },
    },

    {
      id: 6,
      title: "Food Distribution Drive",
      date: "02 June 2026",
      volunteers: 20,
      status: "Upcoming",

      volunteerDetails: {
        name: "Anshul Thakur",
        email: "anshu@gmail.com",
        phone: "+91 9012345678",
        location: "Chandigarh, India",
      },
    },
  ];

  const handleView = (report) => {
    setSelectedReport(report);
    setOpenModal(true);
  };

  // Download Loader
  const handleDownload = () => {
    setButtonLoading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/reports/my-report.pdf";
      link.download = "report.pdf";
      link.click();

      setButtonLoading(false);
    }, 2000);
  };

  const goToChat = () => {
    navigate("/volunteermessage");
  };


  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex flex-col flex-1 ">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 md:ml-[200px] mb-[200px] mt-[80px]">

          {/* Header */}
          <div className="relative overflow-hidden rounded-3xl p-8 mb-8 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#7c3aed] shadow-2xl">

            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center">

              <div>
                <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
                  AI Volunteer Reports  🚀
                </h1>

                <p className="text-blue-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Monitor volunteer activities, donations, and NGO performance.
                </p>

                {/* <div className="flex gap-3 mt-6 flex-wrap">

                  <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                    View Reports
                  </button>

                  <button className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-5 py-2 rounded-xl hover:bg-white/20 transition">
                    Attendance Analytics
                  </button>

                </div> */}
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



          {/* Animated Loader Icon */}
          {pageLoading ? (
            <div className="flex justify-center items-center h-[70vh]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : (
            <>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Total Events</p>
                      <h2 className="text-3xl font-bold mt-2">24</h2>
                    </div>

                    <div className="bg-blue-100 p-4 rounded-2xl">
                      <Calendar className="text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Volunteers</p>
                      <h2 className="text-3xl font-bold mt-2">320</h2>
                    </div>

                    <div className="bg-green-100 p-4 rounded-2xl">
                      <Users className="text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Donations</p>
                      <h2 className="text-3xl font-bold mt-2">₹85K</h2>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded-2xl">
                      <IndianRupee className="text-yellow-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Success Rate</p>
                      <h2 className="text-3xl font-bold mt-2">92%</h2>
                    </div>

                    <div className="bg-purple-100 p-4 rounded-2xl">
                      <TrendingUp className="text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-3xl shadow-md overflow-hidden">

                {/* Table Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between p-5 border-b gap-4">

                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <FileText className="text-blue-600" />
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        Event Reports
                      </h2>

                      <p className="text-gray-500 text-sm">
                        Recent NGO activities and volunteer reports.
                      </p>
                    </div>
                  </div>

                  {/* Download Button Loader */}
                  <button
                    onClick={handleDownload}
                    disabled={buttonLoading}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
                  >
                    {buttonLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download size={18} />
                        Download Report
                      </>
                    )}
                  </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px]">

                    <thead className="bg-gray-50">
                      <tr className="text-black">
                        <th className="text-left px-6 py-4">Event</th>
                        <th className="text-left px-6 py-4">Date</th>
                        <th className="text-left px-6 py-4">Volunteers</th>
                        <th className="text-left px-6 py-4">Status</th>
                        <th className="text-left px-6 py-4">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {reports.map((report) => (
                        <tr
                          key={report.id}
                          className="border-b hover:bg-gray-50 transition"
                        >
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">

                              <div className="bg-red-100 p-2 rounded-xl">
                                <HeartHandshake className="text-red-500" />
                              </div>

                              <span className="font-medium">
                                {report.title}
                              </span>
                            </div>
                          </td>

                          <td className="px-6 py-5">{report.date}</td>

                          <td className="px-6 py-5">
                            {report.volunteers}
                          </td>

                          <td className="px-6 py-5">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-medium ${report.status === "Completed"
                                ? "bg-green-100 text-green-600"
                                : report.status === "Active"
                                  ? "bg-blue-100 text-blue-600"
                                  : "bg-yellow-100 text-yellow-600"
                                }`}
                            >
                              {report.status}
                            </span>
                          </td>

                          <td className="px-6 py-5">
                            <button
                              onClick={() => handleView(report)}
                              className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-xl transition"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>

                  </table>
                </div>
              </div>
            </>
          )};
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modal */}
      {openModal && selectedReport && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">

          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">

            {/* Header */}
            <div className="bg-blue-600 text-white p-5 flex justify-between items-center">

              <div>
                <h2 className="text-2xl font-bold">
                  Volunteer Details
                </h2>

                <p className="text-sm opacity-90 mt-1">
                  {selectedReport.title}
                </p>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="hover:bg-white/20 p-2 rounded-full transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">

              {/* Avatar */}
              <div className="flex flex-col items-center mb-6">
                <img
                  src={`https://ui-avatars.com/api/?name=${selectedReport.volunteerDetails.name}`}
                  alt=""
                  className="w-24 h-24 rounded-full shadow-lg"
                />

                <h3 className="text-xl font-semibold mt-4">
                  {selectedReport.volunteerDetails.name}
                </h3>

                <p className="text-gray-500">
                  Main Volunteer Coordinator
                </p>
              </div>

              {/* Details */}
              <div className="space-y-4">

                <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-2xl">
                  <Mail className="text-blue-600" />
                  <span>
                    {selectedReport.volunteerDetails.email}
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-2xl">
                  <Phone className="text-green-600" />
                  <span>
                    {selectedReport.volunteerDetails.phone}
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-2xl">
                  <MapPin className="text-red-500" />
                  <span>
                    {selectedReport.volunteerDetails.location}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">

                <button
                  onClick={goToChat}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl transition"
                >
                  Contact
                </button>

                <button
                  onClick={() => setOpenModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-2xl transition"
                >
                  Close
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;