import ExpenseVsSaving from "./portfolio-graphs/ExpenseVsSaving";
import ProfitVsRevenue from "./portfolio-graphs/ProfitVsRevenue";
import RevenueMonthly from "./portfolio-graphs/RevenueMonthly";
import ExpenseCategory from "./portfolio-graphs/ExpenseCategory";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

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

const PortfolioManagment = () => {
  const { loggedUser } = useAuth();

  const navigate = useNavigate();

  if (!loggedUser) {
    navigate("/");
    message.error("Please log in to access the dashboard.");
    return;
  }

  console.log("log", loggedUser);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen p-4 gap-4 bg-green-8">
      <ExpenseVsSaving />
      <ProfitVsRevenue />
      <RevenueMonthly />
      {/* <ExpenseCategory /> */}
      <ExpenseCategory categoryValues={[45, 35, 20]} />
    </div>
  );
};

export default PortfolioManagment;
