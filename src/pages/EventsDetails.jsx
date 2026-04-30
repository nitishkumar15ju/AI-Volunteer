import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { CalendarDays, MapPin, Users, Clock, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { eventsData } from "../constant";

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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
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

      {/* Main */}
      <div className="flex-1 lg:ml-64">
        <Navbar />

        <div className="lg:hidden px-4 pt-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 bg-white rounded-lg shadow"
          >
            <Menu size={22} />
          </button>
        </div>

        <div className="pt-6 lg:pt-24 px-4 sm:px-6 lg:px-10 xl:px-16 pb-10">
          {commentLoader ? (
            <div className="flex justify-center items-center h-[70vh]">  
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  AI Volunteer Events :
                </h1>

                <button
                  onClick={() => setShowForm(true)}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                  + Add Event

                </button>
              </div>

              {/* Form */}
              {showForm && (
                <div className="bg-white p-6 rounded-xl shadow-md mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Event Name"
                    value={newEvent.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
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
                    <option value="Upcoming">Upcoming</option>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
                  >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                      {event.name}
                    </h2>

                    <div className="space-y-3 text-gray-600 text-sm">
                      <p className="flex items-center gap-2">
                        <CalendarDays size={18} />
                        {event.date}
                      </p>  

                      <p className="flex items-center gap-2">
                        <Clock size={18} />
                        {event.time}
                      </p>

                      <p className="flex items-center gap-2">
                        <MapPin size={18} />
                        {event.location}
                      </p> 

                      <p className="flex items-center gap-2">
                        <Users size={18} />
                        {event.volunteers} Volunteers
                      </p> 
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          event.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : event.status === "Upcoming"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {event.status}
                      </span>

                      <button onClick={()=>{
                        navigate(`/blooddonationdetails/${event.id}`)
                      }} className="text-blue-600 font-semibold hover:underline">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;