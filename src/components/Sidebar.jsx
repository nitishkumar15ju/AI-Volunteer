import React from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
 
  const users = [
    { name: "DashBoard", path: "/dashboard" , image:"/assets/dashboardicon.jpeg" },
    { name: "Volunteers", path: "/volunteerdata" , image:"/assets/volunteericon.png" },
    { name: "Events", path: "/eventdetails" , image:"/assets/eventicon.png" },
    { name: "AI Matching", path: "/inforaimatching", image:"/assets/matchingicon.png"  },
    
  ];
   
  return (
    <div className="fixed left-0 top-0 w-[200px] min-h-screen bg-white p-3 shadow">
      <div >
        <img
          src={"/assets/logovoluntrimg.png"}
          alt="logo"
          className="w-17 h-17 rounded-full object-cover"
        />
      </div>
  
      {users.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="flex items-center gap-2 mb-2 px-2 py-2 rounded hover:bg-gray-100 curdor-pointer"
        >
          <div className="w-5 h-5  overflow-hidden shrink-0">
            <img
              src={item.image}
              alt="icon"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs whitespace-nowrap text-black">
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;  