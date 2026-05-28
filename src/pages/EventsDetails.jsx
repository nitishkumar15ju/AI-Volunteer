import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { CalendarDays, MapPin, Users, Clock, Menu, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { eventsData } from "../constant";
import Footer from "../components/Footer";


export const EventsDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [commentLoader, setCommentLoader] = useState(true);


  const [events, setEvents] = useState(eventsData);

  const [showForm, setShowForm] = useState(false);

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    volunteers: "",
    status: "",
  });
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      setCommentLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = () => {
    const eventData = {
      id: events.length + 1,
      ...newEvent,
    };

    setEvents([...events, eventData]);

    setNewEvent({
      name: "",
      date: "",
      time: "",
      location: "",
      volunteers: "",
      status: "",
    });

    setShowForm(false);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden lg:block fixed left-0 top-0 h-full w-64">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-white shadow-lg">
            <Sidebar />
          </div>

          <div
            className="flex-1 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          ></div>
        </div>
      )}

      <div className="flex-1 lg:ml-64 mt-[100px] mr-20 mb-[300px]">
        <Navbar />

        <div className="lg:hidden px-4 pt-4 ">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 bg-white rounded-lg shadow"
          >
            <Menu size={22} />
          </button>
        </div>

        <div className="relative overflow-hidden rounded-3xl p-8 mb-8 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#7c3aed] shadow-2xl">

          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center">

            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
                AI Volunteer  Events Data 🚀
              </h1>

              <p className="text-blue-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                View and manage all events information.
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


        <div className=" lg: px-4 sm:px-6 lg:px-10 xl:px-16 pb-10">
          {commentLoader ? (
            <div className="flex justify-center items-center h-[70vh]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : (
            <>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  AI Volunteer Events :
                </h1>

                <button
                  onClick={() => setShowForm(true)}
                  className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
                >
                  + Add Event

                </button>
              </div>


              {showForm && (
                <div className="bg-white p-6 rounded-xl shadow-md mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Event Name"
                    value={newEvent.name}
                    onChange={handleChange}
                    className="border p-2 rounded" View Details
                  />

                  <input
                    type="text"
                    name="date"
                    placeholder="Date"
                    value={newEvent.date}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />

                  <input
                    type="text"
                    name="time"
                    placeholder="Time"
                    value={newEvent.time}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />

                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={newEvent.location}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />

                  <input
                    type="number"
                    name="volunteers"
                    placeholder="Volunteers"
                    value={newEvent.volunteers}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />
                  <select
                    name="status"
                    value={newEvent.status}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  >
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Upcomin2g">Upcoming</option>
                    <option value="Completed">Completed</option>
                  </select>

                  <button
                    onClick={handleAddEvent}
                    className="bg-green-600 text-white py-2 rounded"
                  >
                    Save Event
                  </button>

                  <button
                    onClick={() => setShowForm(false)}
                    className="bg-red-500 text-white py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              )}

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-lg border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  >
                    {/* Top Gradient */}
                    <div className="h-2 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-400"></div>

                    <div className="p-6">
                      {/* Event Title */}
                      <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 transition">
                          {event.name}
                        </h2>

                        <div className="bg-red-100 text-red-600 p-2 rounded-xl shadow-sm">
                          <CalendarDays size={20} />
                        </div>
                      </div>

                      {/* Event Info */}
                      Upcoming
                      View Details
                      <div className="mt-6 space-y-4 text-gray-600 text-sm">
                        <div className="flex items-center gap-3">
                          <div className="bg-red-50 p-2 rounded-lg">
                            <CalendarDays size={18} className="text-red-500" />
                          </div>
                          <span>{event.date}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="bg-blue-50 p-2 rounded-lg">
                            <Clock size={18} className="text-blue-500" />
                          </div>
                          <span>{event.time}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="bg-green-50 p-2 rounded-lg">
                            <MapPin size={18} className="text-green-500" />
                          </div>
                          <span>{event.location}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="bg-purple-50 p-2 rounded-lg">
                            <Users size={18} className="text-purple-500" />
                          </div>
                          <span>{event.volunteers} Volunteers</span>
                        </div>
                      </div>

                      {/* Bottom Section */}
                      <div className="mt-8 flex justify-between items-center">
                        <span
                          className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm ${event.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : event.status === "Upcoming"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-200 text-gray-700"
                            }`}
                        >
                          {event.status}
                        </span>

                        <button
                          onClick={() => {
                            navigate(`/blooddonationdetails/${event.id}`);
                          }}
                          className="px-5 py-2 rounded-xl bg-blue-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-100/20 via-transparent to-pink-100/20 pointer-events-none"></div>
                  </div>
                ))}
              </div>

            </>
          )}
        </div>
        <div className="">
          <Footer></Footer>
        </div>
      </div>
    </div>

  );
};

export default EventsDetails;
