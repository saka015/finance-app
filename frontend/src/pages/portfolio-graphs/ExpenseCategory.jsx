import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ExpenseCategory = ({ categoryValues }) => {
  // Define categories and their values.  You can adjust these values
  const categories = [
    { name: "Salaries", value: categoryValues[0] || 50 },
    { name: "Supplies", value: categoryValues[1] || 30 },
    { name: "Services", value: categoryValues[2] || 20 },
  ];

  // Transform the data to fit Recharts format. Make sure your values total 100
  const rechartsData = categories.map((category) => ({
    name: category.name,
    data: [
      { name: category.name, value: category.value, fill: "#34b49e" },
      { name: "Other", value: 100 - category.value, fill: "#2c624d" },
    ],
  }));

  return (
    <div className="p-4 rounded-md bg-main flex space-x-4 justify-center items-center">

      {rechartsData.map((category, index) => (
        <div key={index} className="w-full">
          <ResponsiveContainer width="100%" height={100}>
            <PieChart width={100} height={100}>
              <Pie
                data={category.data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                innerRadius={40}
                outerRadius={50}
                dataKey="value"
              >
                {category.data.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="text-center text-lg mt-2 text-green-5">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseCategory;
