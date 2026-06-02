import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Search,
  MapPin,
  Briefcase,
  Users,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const SkillMatching = () => {
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [commentLoading, setLoading] = useState(true);

  const [openAssignModal, setOpenAssignModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [assignedUser, setAssignedUser] = useState("");
  const [assignedData, setAssignedData] = useState({});

  const volunteersList = [
    "Rahul",
    "Aman",
    "Priya",
    "Sneha",
    "Vikas",
    "Nitish",
    "Ankush",
    "Piyush",
    "Anuj Pal",
    "vijay",
  ];

  const eventsData = [

    {
      id: 1,
      event: "Blood Donation Camp oranzation",
      skill: "Health",
      score: 78,
      location: "Panipat City Hall",
      volunteers: 15,
      status: "High Match",
    },
    {
      id: 2,
      event: "Medical Help Camp oranzation",
      skill: "Health",
      score: 84,
      location: "Civil Hospital",
      volunteers: 12,
      status: "Recommended",
    },
    {
      id: 3,
      event: " Foods Distribution Drive volunteer ",
      skill: "Management",
      score: 91,
      location: "Sector 18 Panipat",
      volunteers: 20,
      status: "High Match",
    },
    {
      id: 4,
      event: "Teaching Awareness Camp",
      skill: "Education",
      score: 66,
      location: "Govt School Panipat",
      volunteers: 10,
      status: "Recommended",
    },
    {
      id: 5,
      event: "Volunteer Clean City Mission",
      skill: "General",
      score: 80,
      location: "Model Town",
      volunteers: 25,
      status: "Good Match",
    },
    {
      id: 6,
      event: "Basketball Sporting Events",
      skill: "General",
      score: 88,
      location: "Chandigarh University",
      volunteers: 25,
      status: "Good Match",
    },

  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredData = eventsData.filter((item) => {
    const skillMatch =
      selectedSkill === "All" || item.skill === selectedSkill;

    const searchMatch = item.event
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return skillMatch && searchMatch;
  });

  const handleAssign = () => {
    if (!assignedUser) return;

    setAssignedData((prev) => ({
      ...prev,
      [selectedEvent.id]: assignedUser,
    }));

    setOpenAssignModal(false);
    setAssignedUser("");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">


      <aside className=" fixed left-0 top-0 h-screen w-44  backdrop-blur-xl border-r border-gray-200">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1  ">

        {/* Navbar */}
        <Navbar />


        <section className="p-4 sm:p-6 lg:p-8 mt-[100px] ml-[290px] mb-[300px] mr-[60px]">

           <div className="  relative overflow-hidden rounded-3xl p-8 mb-8 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#7c3aed] shadow-2xl">

            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center">

              <div>
                <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
                 AI Volunteer Skill Matching 🚀
                </h1>

                <p className="text-blue-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                 AI intelligently matches volunteers with events based on
                skills, location, performance and availability.
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
            <div className=" absolute top-5 right-5 bg-green-400 text-black px-4 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
              ● LIVE SYSTEM
            </div>

          </div>


          {/* Loader */}
          {commentLoading ? (
             <div className="flex justify-center items-center h-[70vh]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : (
              <>

          {/* Search + Filter */}
          <section className="grid md:grid-cols-2 gap-5 mb-8">

            <div className="bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-lg border border-white/40 flex items-center gap-3 hover:shadow-2xl transition duration-300">
              <div className="bg-blue-100 p-3 rounded-2xl">
                <Search className="text-blue-600" size={22} />
              </div>

              <input
                type="text"
                placeholder="Search Event..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="outline-none bg-transparent w-full text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-lg border border-white/40 hover:shadow-2xl transition duration-300">
              <select
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                className="w-full outline-none bg-transparent text-gray-700 font-medium"
              >
                <option value="All">All Skills</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
                <option value="Management">Management</option>
                <option value="General">General</option>
              </select>
            </div>
          </section>

        
              {/* Cards */}
              <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {filteredData.map((item) => (
                  <article
                    key={item.id}
                    className="group bg-white/80 backdrop-blur-xl rounded-[30px] p-6 shadow-lg border border-white/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                  >

                    {/* Top */}
                    <div>
                      <div className="flex justify-between items-start gap-3 mb-5">

                        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
                          {item.event}
                        </h2>

                        <span className="bg-green-100 text-green-700 text-xs px-4 py-2 rounded-full font-semibold whitespace-nowrap">
                          {item.status}
                        </span>
                      </div>

                      {/* Score */}
                      <div className="mb-5">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600 font-medium">
                            AI Match Score
                          </span>

                          <span className="font-bold text-blue-700">
                            {item.score}%
                          </span>
                        </div>

                        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-red-600 to-red-400 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-4">

                        <div className="flex items-center gap-3 text-gray-600">
                          <div className="bg-blue-100 p-2 rounded-xl">
                            <Briefcase size={18} className="text-blue-600" />
                          </div>

                          <span className="font-medium">{item.skill}</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600">
                          <div className="bg-pink-100 p-2 rounded-xl">
                            <MapPin size={18} className="text-pink-600" />
                          </div>

                          <span className="font-medium">{item.location}</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600">
                          <div className="bg-green-100 p-2 rounded-xl">
                            <Users size={18} className="text-green-600" />
                          </div>

                          <span className="font-medium">
                            {item.volunteers} Volunteers Needed
                          </span>
                        </div>

                        {assignedData[item.id] && (
                          <div className="bg-green-50 border border-green-200 rounded-2xl p-3 mt-3">
                            <p className="text-green-700 font-semibold text-sm">
                              Assigned To:
                            </p>

                            <p className="text-lg font-bold text-green-600">
                              {assignedData[item.id]}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Button */}
                    <div className="pt-6">
                      <button
                        onClick={() => {
                          setSelectedEvent(item);
                          setOpenAssignModal(true);
                        }}
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-500 text-white py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        <span className="flex justify-center items-center gap-2">
                          <CheckCircle size={20} />
                          Assign Volunteer
                        </span>
                      </button>
                    </div>
                  </article>
                ))}
              </section>

              {/* No Data */}
              {filteredData.length === 0 && (
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 text-center mt-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-gray-700">
                    No Matching Events Found
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Try changing search or filter options.
                  </p>
                </div>
              )}
            </>
          )}
        </section>
        <div>
          <Footer />
        </div>
      </main>

      {/* Modal */}
      {openAssignModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">

          <div className="bg-white rounded-[30px] p-8 w-full max-w-md shadow-2xl animate-scaleIn ">

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Assign Volunteer
            </h2>

            <select
              value={assignedUser}
              onChange={(e) => setAssignedUser(e.target.value)}
              className="w-full border border-gray-200 bg-gray-50 p-4 rounded-2xl mb-6 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Volunteer</option>

              {volunteersList.map((v, i) => (
                <option key={i} value={v}>
                  {v}
                </option>
              ))}
            </select>

            <div className="flex justify-end gap-4">

              <button
                onClick={() => setOpenAssignModal(false)}
                className="px-5 py-3 bg-gray-200 hover:bg-gray-300 rounded-2xl font-semibold transition"
              >
                Cancel
              </button>

              <button
                onClick={handleAssign}
                className="px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillMatching;
