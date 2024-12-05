import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const generateFakeData = (numItems) => {
  const data = [];
  for (let i = 0; i < numItems; i++) {
    const name = `Category ${i + 1}`;
    const expense = Math.floor(Math.random() * 1000);
    const savings = Math.floor(Math.random() * 500);
    const netValue = savings - expense;
    data.push({ name, netValue });
  }
  return data;
};

const fakeData = generateFakeData(10);

const ProfitVsRevenue = () => {
  return (
    <div className="p-4 rounded-md bg-main flex justify-center items-center">
      <BarChart width={500} height={300} data={fakeData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="netValue" fill="#82ca9d" name="Profit Vs Revenue" />
      </BarChart>
    </div>
  );
};

export default ProfitVsRevenue;
