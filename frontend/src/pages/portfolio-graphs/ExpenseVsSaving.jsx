import {
  LineChart,
  Line,
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
    data.push({ name, expense, savings });
  }
  return data;
};

const fakeData = generateFakeData(10);

const ExpenseVsSaving = () => {
  return (
    <div className="p-4 rounded-md bg-main flex justify-center items-center">
      <LineChart width={500} height={300} data={fakeData}>
        <CartesianGrid strokeDasharray="3 3" /> {/* Added back the grid */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="expense"
          stroke="#8884d8"
          name="Expense"
        />
        <Line
          type="monotone"
          dataKey="savings"
          stroke="#82ca9d"
          name="Savings"
        />
      </LineChart>
    </div>
  );
};

export default ExpenseVsSaving;
