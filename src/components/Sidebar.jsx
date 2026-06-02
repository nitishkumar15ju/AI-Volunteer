import React from "react";
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  BrainCircuit,
  FileText,
  MessageSquare,
  ClipboardCheck,
  Settings,
} from "lucide-react";


const Sidebar = ({ darkMode }) => {

  const location = useLocation();



  const users = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },

    {
      name: "Volunteers",
      path: "/volunteerdata",
      icon: <Users size={20} />,
    },

    {
      name: "Events",
      path: "/eventdetails",
      icon: <CalendarDays size={20} />,
    },

    {
      name: "AssginVolunteer",
      path: "/inforaimatching",
      icon: <BrainCircuit size={20} />,
    },

    {
      name: "Reports",
      path: "/reportsvolunteer",
      icon: <FileText size={20} />,
    },

    {
      name: "Messages",
      path: "/volunteermessage",
      icon: <MessageSquare size={20} />,
    },

    {
      name: "Attendance",
      path: "/attendancevolunteer",
      icon: <ClipboardCheck size={20} />,
    },

    {
      name: "Settings",
      path: "/aisetting",
      icon: <Settings size={20} />,
    },
      {
      name: "AIAssistant",
      path: "/aiassistant",
      icon: <Settings size={20} />,
    },
    
    
  ];


  return (
    <div
      className={`fixed top-0 left-0  overflow-hidden w-[220px] h-[760px] transition-all duration-300 cursor-pointer
  ${darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
        }`}
    >
      <div>
        <img
          src={"/assets/logovoluntrimg.png "}
          alt="logo"
          className="w-17 h-17 rounded-full object-cover"
        />
      </div>

      {users.map((item, index) => {
        const isActive = location.pathname === item.path;
        console.log("isActive", isActive)

        return(
        <Link
          key={index}

          to={item.path}
          className={`flex items-center gap-3 px-3 py-3   transition-all duration-300 hover:scale-[1.02] 
            ${isActive?"bg-gray-400 text-black":""
                    
        
      }`}

        >
          <div
            className={`p-2 rounded-xl transition-all duration-300 ${darkMode
                ? "bg-gray-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black"
                : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-black"
              }`}
          >
            {item.icon}
          </div>
          <p className={`text-sm font-medium whitespace-nowrap ${darkMode
            ? " text-white"
            : "text-black"
            }`}>
            {item.name}
          </p>
        </Link>
      )})}
    </div>
  );
};

export default Sidebar;  