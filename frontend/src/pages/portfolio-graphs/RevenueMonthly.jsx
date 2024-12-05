import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const generateFakeData = (numMonths = 12) => {
  const data = [];
  for (let i = 0; i < numMonths; i++) {
    const month = `Month ${i + 1}`;
    const revenue = Math.floor(Math.random() * 1000) + 1; // Minimum revenue is 1.
    data.push({ name: month, revenue });
  }
  return data;
};

const fakeData = generateFakeData(); 

const RevenueMonthly = () => {
  return (
    <div className="p-4 rounded-md bg-main flex justify-center items-center">
      {" "}
      {/*Added class bg-main */}
      <BarChart width={500} height={300} data={fakeData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#82ca9d" name="Monthly Revenue" />{" "}

      </BarChart>
    </div>
  );
};

export default RevenueMonthly;
