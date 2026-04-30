import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SummaryCard from "../components/SummaryCard";
import Bargraph from "../components/BarGraph";
import Linechart from "../components/LineChartGraph";
import PieChartData from "../components/PieGraph";
import RadialChart from "../components/RadialChart";
import CommentsTable from "../components/CommentsTable";

const Dashboard = () => {
  const [commentLoader, setCommentLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCommentLoader(false);
    }, 1500); // loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 ml-5">
      <Navbar />

      <div className="flex">
        <div className="hidden md:block h-full fixed left-0 top-16 bg-white shadow-md z-10">
          <Sidebar />
        </div>

        <div className="w-full md:ml-40 p-4 sm:p-6 mt-16">
          {commentLoader ? (
            <div className="flex justify-center items-center h-[80vh]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Dashboard Overview
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  Welcome to your analytics dashboard
                </p>
              </div>

              <div className="mb-6">
                <SummaryCard />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full">
                  <Bargraph />
                </div>

                <div className="w-full">
                  <Linechart />
                </div>

                <div className="w-full">
                  <PieChartData />
                </div>

                <div className="w-full">
                  <RadialChart />
                </div>
              </div>

              <div className="mt-6 overflow-x-auto">
                <CommentsTable />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;