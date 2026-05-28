{/* ================= IMPORTS ================= */}
import React, { useRef, useState } from "react";

import {
  CalendarDays,
  Search,
  Download,
  Filter,
  QrCode,
  ScanFace,
} from "lucide-react";

import QRCode from "react-qr-code";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function VolunteerAttendancePage() {

  // ================= ATTENDANCE DATA =================

  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      name: "Nitish Kumar",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      event: "Blood Donation Camp",
      checkIn: "09:00 AM",
      checkOut: "04:00 PM",
      status: "Present",
      hours: "7h",
    },

    {
      id: 2,
      name: "Rahul Sharma",
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
      event: "Tree Plantation Drive",
      checkIn: "10:15 AM",
      checkOut: "--",
      status: "Pending",
      hours: "3h",
    },

    {
      id: 3,
      name: "Priya Verma",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
      event: "Food Distribution",
      checkIn: "--",
      checkOut: "--",
      status: "Absent",
      hours: "0h",
    },
  ]);

  // ================= STATES =================

  const [showCalendar, setShowCalendar] = useState(false);

  const [selectedDate, setSelectedDate] = useState(
    new Date()
  );

  const [showQR, setShowQR] = useState(false);

  const [cameraOpen, setCameraOpen] =
    useState(false);

  const [search, setSearch] = useState("");

  const videoRef = useRef(null);

  // ================= ADD VOLUNTEER FORM =================

  const [formData, setFormData] = useState({
    name: "",
    event: "",
    status: "Present",
  });

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= ADD ATTENDANCE =================

  const addAttendance = () => {

    if (
      formData.name === "" ||
      formData.event === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const newVolunteer = {
      id: attendanceData.length + 1,

      name: formData.name,

      image:
        "https://randomuser.me/api/portraits/men/55.jpg",

      event: formData.event,

      checkIn:
        formData.status === "Present"
          ? "09:00 AM"
          : "--",

      checkOut:
        formData.status === "Present"
          ? "04:00 PM"
          : "--",

      status: formData.status,

      hours:
        formData.status === "Present"
          ? "7h"
          : "0h",
    };

    setAttendanceData([
      ...attendanceData,
      newVolunteer,
    ]);

    setFormData({
      name: "",
      event: "",
      status: "Present",
    });
  };

  // ================= QR =================

  const qrValue =
    "Volunteer Attendance Verification";

  // ================= CAMERA =================

  const startCamera = async () => {

    try {

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
        });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraOpen(true);

    } catch (error) {
      alert("Camera access denied");
    }
  };

  const stopCamera = () => {

    const stream = videoRef.current.srcObject;

    const tracks = stream.getTracks();

    tracks.forEach((track) => track.stop());

    setCameraOpen(false);
  };

  // ================= PDF EXPORT =================

  const exportPDF = () => {

    const doc = new jsPDF();

    doc.text(
      "Volunteer Attendance Report",
      14,
      20
    );

    autoTable(doc, {
      startY: 30,

      head: [
        [
          "Volunteer",
          "Event",
          "Status",
          "Hours",
        ],
      ],

      body: attendanceData.map((item) => [
        item.name,
        item.event,
        item.status,
        item.hours,
      ]),
    });

    doc.save("attendance-report.pdf");
  };

  // ================= SEARCH FILTER =================

  const filteredData = attendanceData.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (

    <div className="flex min-h-screen bg-[#f5f7ff]">

      <Sidebar />

      <div className="flex-1 lg:ml-[220px] mt-[70px] mb-[300px] ">

        <Navbar />

        <main className="p-6 lg:p-10">

          {/* ================= HEADER ================= */}

          <div className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#7c3aed] rounded-3xl p-8 mb-8 text-white shadow-2xl">

            <h1 className="text-4xl font-black mb-3">
              AI Volunteer Attendance 🚀
            </h1>

            <p className="text-blue-100">
              Smart attendance management system
            </p>

          </div>

          {/* ================= SEARCH ================= */}

          <div className="flex flex-col md:flex-row gap-4 mb-8">

            <div className="flex items-center bg-white border rounded-2xl px-4 py-3 w-full md:w-[400px]">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search volunteer..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full px-3 outline-none"
              />

            </div>

            <button
              onClick={() =>
                setShowCalendar(true)
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl flex items-center gap-2"
            >

              <CalendarDays size={18} />

              Today's Attendance

            </button>

          </div>

          {/* ================= ADD FORM ================= */}

          <div className="bg-white rounded-3xl p-6 shadow-sm mb-10">

            <h2 className="text-2xl font-bold mb-6">
              Add Attendance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* NAME */}

              <input
                type="text"
                name="name"
                placeholder="Volunteer Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-blue-500"
              />

              {/* EVENT */}

              <input
                type="text"
                name="event"
                placeholder="Event Name"
                value={formData.event}
                onChange={handleChange}
                className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-blue-500"
              />

              {/* STATUS */}

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-blue-500"
              >

                <option value="Present">
                  Present
                </option>

                <option value="Absent">
                  Absent
                </option>

                <option value="Pending">
                  Pending
                </option>

              </select>

            </div>

            <button
              onClick={addAttendance}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold"
            >

              Add Attendance

            </button>

          </div>

          {/* ================= ACTION CARDS ================= */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

            {/* QR */}

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <QrCode
                className="text-blue-600 mb-4"
                size={40}
              />

              <h2 className="text-xl font-bold mb-2">
                QR Attendance
              </h2>

              {showQR && (
                <div className="flex justify-center my-5">

                  <QRCode
                    value={qrValue}
                    size={180}
                  />

                </div>
              )}

              <button
                onClick={() =>
                  setShowQR(!showQR)
                }
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl w-full"
              >

                {showQR
                  ? "Hide QR"
                  : "Generate QR"}

              </button>

            </div>

            {/* CAMERA */}

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <ScanFace
                className="text-purple-600 mb-4"
                size={40}
              />

              <h2 className="text-xl font-bold mb-4">
                Face Recognition
              </h2>

              {cameraOpen && (
                <video
                  ref={videoRef}
                  autoPlay
                  className="w-full rounded-2xl mb-4"
                ></video>
              )}

              {!cameraOpen ? (
                <button
                  onClick={startCamera}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl w-full"
                >
                  Start Scan
                </button>
              ) : (
                <button
                  onClick={stopCamera}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl w-full"
                >
                  Stop Camera
                </button>
              )}

            </div>

            {/* PDF */}

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <Download
                className="text-green-600 mb-4"
                size={40}
              />

              <h2 className="text-xl font-bold mb-4">
                Export Report
              </h2>

              <button
                onClick={exportPDF}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl w-full"
              >

                Download PDF

              </button>

            </div>

          </div>

          {/* ================= TABLE ================= */}

          <div className="bg-white rounded-3xl p-6 shadow-sm overflow-x-auto">

            <div className="flex justify-between mb-6">

              <h2 className="text-2xl font-bold">
                Attendance Records
              </h2>

              <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl">

                <Filter size={16} />

                Filter

              </button>

            </div>

            <table className="w-full min-w-[800px]">

              <thead>

                <tr className="border-b text-left">

                  <th className="py-3">
                    Volunteer
                  </th>

                  <th>
                    Event
                  </th>

                  <th>
                    Check In
                  </th>

                  <th>
                    Check Out
                  </th>

                  <th>
                    Status
                  </th>

                  <th>
                    Hours
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredData.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="py-4">

                      <div className="flex items-center gap-3">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-full"
                        />

                        <div>

                          <h3 className="font-semibold">
                            {item.name}
                          </h3>

                          <p className="text-sm text-gray-500">
                            ID #{item.id}
                          </p>

                        </div>

                      </div>

                    </td>

                    <td>{item.event}</td>

                    <td>{item.checkIn}</td>

                    <td>{item.checkOut}</td>

                    <td>

                      <span
                        className={`px-4 py-1 rounded-full text-sm font-semibold
                        
                        ${
                          item.status === "Present"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Absent"
                            ? "bg-red-100 text-red-600"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >

                        {item.status}

                      </span>

                    </td>

                    <td>

                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold">

                        {item.hours}

                      </span>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

          {/* ================= DATE MODAL ================= */}

          {showCalendar && (

            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

              <div className="bg-white w-[450px] rounded-3xl p-8">

                <div className="flex justify-between items-center mb-6">

                  <h2 className="text-xl font-bold">
                    Select Date
                  </h2>

                  <button
                    onClick={() =>
                      setShowCalendar(false)
                    }
                  >
                    ✕
                  </button>

                </div>

                <input
                  type="date"
                  value={
                    selectedDate
                      .toISOString()
                      .split("T")[0]
                  }
                  onChange={(e) =>
                    setSelectedDate(
                      new Date(e.target.value)
                    )
                  }
                  className="w-full border p-4 rounded-xl"
                />

                <button
                  onClick={() =>
                    setShowCalendar(false)
                  }
                  className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl"
                >

                  Done

                </button>

              </div>

            </div>
          )}

        </main>

        <Footer />

      </div>

    </div>
  );
}