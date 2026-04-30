import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AIMatching = () => {
  const [commentLoader, setCommentLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCommentLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="ml-60 m-20">
          {commentLoader ? (
            <div className="flex justify-center items-center h-[70vh]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h1 className="text-2xl font-bold text-blue-600">
                AI Volunteer Matching
              </h1>

              <p className="text-gray-600 mt-2">
                AI Matching helps connect volunteers with the best opportunities
                based on their skills, interests, and available time.
              </p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h2 className="font-semibold">Skill Based Match</h2>
                  <p>Find tasks based on volunteer skills.</p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h2 className="font-semibold">Location Based Match</h2>
                  <p>Suggest nearby events and NGOs.</p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h2 className="font-semibold">Availability Match</h2>
                  <p>Match according to free time and schedule.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIMatching;