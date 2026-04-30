import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";


const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];


const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

const COLORS1 = ["#8482a0", "#5a7163", "#f0e0c0", "#f2b698"];
const COLORS2 = [
  "#546471",
  "#d1efe9",
  "#23201b",
  "#91827a",
  "rgb(76, 41, 216)",
  "#db96ad",
  "#8bc3df",
  "#83a096",
  "#e2b8a2",
  "#d4a2ed",
  "#fba1a1",
];

const TwoLevelPieChart = () => {
  return (
    <div className="w-full h-[350px] bg-white rounded-xl p-1 ">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
        
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label
          >
            {data01.map((entry, index) => (
              <Cell key={index} fill={COLORS1[index % COLORS1.length]} />
            ))}
          </Pie>

          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={140}
            label
          
          >
            {data02.map((entry, index) => (
              <Cell key={index} fill={COLORS2[index % COLORS2.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TwoLevelPieChart;