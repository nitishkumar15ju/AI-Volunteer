import React from "react";
import { FaUser, FaCalendarAlt, FaClock, FaCheckCircle } from "react-icons/fa";

const SummaryCard = () => {
  const cardData = [
    
    {
      title: "Total Volunteers",
      value: "520",
      icon: <FaUser size={20} />,
      color: "bg-blue-500",
    
    },
    {
      title: "Active Events",
      value: "22",
      icon: <FaCalendarAlt size={20} />,
      color: "bg-green-500",
    },
    {
      title: "Pending Requests",
      value: "89",
      icon: <FaClock size={20} />,
      color: "bg-yellow-500",
    },
    {
      title: "Completed Tasks",
      value: "180",
      icon: <FaCheckCircle size={20} />,
      color: "bg-purple-500",
    },
  
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-6  cursor-pointer ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-5 flex items-center justify-between min-h-[130px] hover:shadow-xl transition"
        >
          <div
            className={`${card.color} text-white p-3 w-12 h-12 rounded-xl flex items-center justify-center`}
          >
            {card.icon}
          </div>

          
          <div className="text-right">
            <p className="text-gray-500 text-sm">{card.title}</p>
            <h2 className="text-3xl font-bold ">{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;