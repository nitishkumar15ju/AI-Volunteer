import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: " Volunteers", sales: 500 },
  { name: "Active Event", sales: 50 },
  { name: "Pending", sales: 300 },
  { name: "Completed", sales: 250 },
];

const graphData = () => {
  return (
    <div className="w-full h-[320px] bg-white  rounded-xl p-4">
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#d1efe9" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default graphData;