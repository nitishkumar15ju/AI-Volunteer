import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import {
  Search,
  Send,
  MoreVertical,
  Sparkles,
  Circle,
 
} from "lucide-react";

const Messages = () => {
  const users = [
    { id: 1, name: "Rahul Sharma", msg: "Need volunteers for tomorrow.", time: "2 min", online: true },
    { id: 2, name: "Ankush Choudhary", msg: "Blood donation event details?", time: "1 min", online: true },
    { id: 3, name: "Aman Gupta", msg: "Can I join the NGO team?", time: "1 hr", online: false },
    { id: 4, name: "Nitish Kumar", msg: "Sports Head organization", time: "5 min", online: true },
    { id: 5, name: "Ramnish", msg: "Medical Help Camp", time: "3 min", online: false },
    { id: 6, name: "Sourav Thakur", msg: "Festival Fusion", time: "1 min", online: true },
  ];

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messagesByUser, setMessagesByUser] = useState({
    1: [{ id: 1, sender: "receiver", text: "Hello Rahul 👋" }],
    
  });

  const currentMessages = messagesByUser[selectedUser.id] || [];

  const handleSendMessage = () => {
    if (!message.trim()) 
      return;
    setLoading(true);

    const newMsg = {
      id: Date.now(),
      sender: "sender",
      text: message,
      time: "now",
    };

    setMessagesByUser((prev) => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), newMsg],
    }));

    setMessage("");

    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        sender: "receiver",
        text: "Message received ✅",
        time: "just now",
      };

      setMessagesByUser((prev) => ({
        ...prev,
        [selectedUser.id]: [...(prev[selectedUser.id] || []), reply],
      }));

      setLoading(false);
    }, 1200);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex flex-col flex-1 lg:ml-[290px] mr-[60px] mt-[20px] ">

        <Navbar />

        <main className="p-4 md:p-6 mt-[80px] mb-[200px]">

          {/* HEADER */}
         
          <div className="relative overflow-hidden rounded-3xl p-8 mb-8 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#7c3aed] shadow-2xl">

            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center">

              <div>
                <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
                  AI Volunteer Chat System 🚀
                </h1>

                <p className="text-blue-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Real-time messaging, collaboration & AI-powered communication                
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

          {/* CHAT BOX */}
          <div className="bg-white/70 backdrop-blur-xl border border-white rounded-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-3 overflow-hidden h-[80vh]">

            {/* USERS */}
            <div className="border-r bg-white/60 flex flex-col">

              {/* SEARCH */}
              <div className="p-4 border-b">
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl">
                  <Search size={18} className="text-gray-500" />
                  <input
                    placeholder="Search volunteers..."
                    className="bg-transparent w-full outline-none text-sm"
                  />
                </div>
              
              </div>

              {/* USER LIST */}
              <div className="flex-1 overflow-y-auto">

                {users.map((user) => (
                  <div
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className={`flex items-center justify-between px-4 py-4 cursor-pointer transition-all duration-200 ${selectedUser.id === user.id
                      ? "bg-gradient-to-r from-blue-100 to-indigo-100 border-l-4 border-blue-600 shadow-sm"
                      : "hover:bg-gray-100"
                      }`}
                  >

                    <div className="flex items-center gap-3">

                      <div className="relative">

                        <img
                          src={`https://ui-avatars.com/api/?name=${user.name}`}
                          className="w-11 h-11 rounded-full shadow"
                          alt=""
                        />

                        {user.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                        )}

                      </div>

                      <div>
                        <h3 className="font-semibold text-sm">
                          {user.name}
                        </h3>
                        <p className="text-xs text-gray-500 truncate w-40">
                          {user.msg}
                        </p>
                      </div>

                    </div>


                    <span className="text-xs text-gray-400">
                      {user.time}
                    </span>

                  </div>
                ))};

              </div>
            </div>

            {/* CHAT AREA */}
            <div className="lg:col-span-2 flex flex-col bg-gradient-to-b from-white/70 to-white overflow-hidden">

              {/* CHAT HEADER */}
              <div className="bg-white/80 backdrop-blur p-4 flex justify-between items-center border-b">

                <div className="flex items-center gap-3">

                  <img
                    src={`https://ui-avatars.com/api/?name=${selectedUser.name}`}
                    className="w-10 h-10 rounded-full shadow"
                    alt=""
                  />

                  <div>
                    <h2 className="font-semibold">
                      {selectedUser.name}
                    </h2>

                    <p className={`text-xs flex items-center gap-1 ${selectedUser.online ? "text-green-600" : "text-gray-400"
                      }`}>
                      <Circle size={8} className={selectedUser.online ? "fill-green-500" : ""} />
                      {selectedUser.online ? "Online" : "Offline"}
                    </p>
                  </div>
                   

                </div>
               
                <MoreVertical className="text-gray-500 " />
              </div>

              {/* MESSAGES */}
              <div className="flex-1  h-[500px] overflow-y-auto p-5 space-y-4 bg-gray-50">

                {currentMessages.length === 0 && (
                  <div className="text-center text-gray-400 mt-10">
                    Start your conversation 🚀
                  </div>
                )}

                {currentMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "sender" ? "justify-end" : "justify-start"
                      }`}
                  >
                    <div
                      className={`px-4 py-2 rounded-2xl text-sm max-w-xs shadow-md ${msg.sender === "sender"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none"
                        : "bg-white border rounded-bl-none"
                        }`}
                    >
                      {msg.text}

                      <div className="text-[10px] mt-1 opacity-60">
                        {msg.time}
                      </div>

                    </div>
                  </div>
                ))}

                {/* TYPING INDICATOR */}
                {loading && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                    </div>
                    is typing...
                  </div>
                )}

              </div>

              {/* INPUT */}
              <div className="p-4 bg-white/90 backdrop-blur border-t flex gap-2 sticky bottom-0">

                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-100 px-4 py-2 rounded-full outline-none text-sm shadow-inner"
                /> 

                <button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white p-3 rounded-full shadow-lg transition"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </main>   

        <Footer />
      </div>
    </div>
  );
};

export default Messages;