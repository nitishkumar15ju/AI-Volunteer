import React, { useState } from "react";
import {
  BrainCircuit,
  Users,
  CalendarDays,
  ClipboardCheck,
  Send,
  Sparkles,
} from "lucide-react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I am your AI Volunteer Assistant 🤖. How can I help you today?",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);
    setMessage("");

    setTimeout(() => {
      const aiReply = {
        id: Date.now() + 1,
        sender: "ai",
        text: "AI Analysis Complete ✅. I found matching volunteers and recommendations for your request.",
      };

      setMessages((prev) => [...prev, aiReply]);
      setLoading(false);
    }, 1500);
  };

  const quickActions = [
    "Assign Volunteers",
    "Generate Report",
    "Analyze Attendance",
    "Event Suggestions",
    "Volunteer Insights",
    "AI Matching",
  ];
 return (
  <div className="flex min-h-screen bg-gray-100">

    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-1 lg:ml-[290px] mr-[60px] mb-[300px] mt-[20px]">

      {/* Navbar */}
      <Navbar />

      <main className="mt-[85px] p-4 md:p-6 lg:p-8">

        {/* HEADER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-violet-700 p-8 md:p-10 text-white shadow-xl mb-8">

          <div className="absolute top-0 left-0 h-72 w-72 bg-cyan-400/10 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-0 h-72 w-72 bg-purple-500/10 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
              AI Assistant 🤖
            </h1>

            <p className="text-blue-100 text-sm md:text-lg">
              Smart Volunteer Intelligence & Automation Platform
            </p>
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition">
            <Users size={35} className="text-blue-600 mb-3" />
            <h2 className="text-3xl font-bold">1250</h2>
            <p className="text-gray-500">Volunteers</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition">
            <CalendarDays size={35} className="text-green-600 mb-3" />
            <h2 className="text-3xl font-bold">42</h2>
            <p className="text-gray-500">Events</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition">
            <ClipboardCheck size={35} className="text-purple-600 mb-3" />
            <h2 className="text-3xl font-bold">96%</h2>
            <p className="text-gray-500">Attendance</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition">
            <BrainCircuit size={35} className="text-red-600 mb-3" />
            <h2 className="text-3xl font-bold">98%</h2>
            <p className="text-gray-500">AI Accuracy</p>
          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">

          <h2 className="text-xl font-bold mb-5">
            Quick AI Actions
          </h2>

          <div className="flex flex-wrap gap-3">

            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => setMessage(action)}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 transition-all"
              >
                {action}
              </button>
            ))}

          </div>

        </div>

        {/* CHAT */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

          {/* Chat Header */}
          <div className="border-b p-5 flex items-center gap-3">

            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white">
              <Sparkles size={22} />
            </div>

            <div>
              <h3 className="font-bold">
                AI Volunteer Assistant
              </h3>

              <p className="text-green-600 text-sm">
                ● Online
              </p>
            </div>

          </div>

          {/* Messages */}
          <div className="h-[500px] overflow-y-auto bg-slate-50 p-5 space-y-4">

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-lg px-5 py-3 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white border shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>

              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-gray-500">

                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>

                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></span>

                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></span>

                <span>AI is analyzing...</span>

              </div>
            )}

          </div>

          {/* Input */}
          <div className="border-t p-4 flex gap-3">

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }
              placeholder="Ask AI anything..."
              className="flex-1 bg-slate-100 px-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleSend}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full hover:scale-105 transition"
            >
              <Send size={20} />
            </button>

          </div>

        </div>

      </main>

      <Footer />

    </div>

  </div>
);
};

export default AIAssistant;       
