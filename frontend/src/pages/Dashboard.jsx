import React, { useState } from "react";
import AssetsAndInvestments from "./dashboardItems/AssetsAndInvestments";
import EmergencyFund from "./dashboardItems/EmergencyFund";
import ExpenseDetails from "./dashboardItems/ExpenseDetails";
import IncomeDetails from "./dashboardItems/IncomeDetails";
import InsuranceDetails from "./dashboardItems/InsuranceDetails";
import LiabilitiesAndDebts from "./dashboardItems/LiabilitiesAndDebts";
import RetirementPlan from "./dashboardItems/RetirementPlan";
import { useAuth } from "../context/AuthContext";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { loggedUser } = useAuth();
  const [selectedMonth, setSelectedMonth] = useState("january");
  const navigate = useNavigate();

  // if (loggedUser?.email === null) {
  //   navigate("/");
  //   message.error("Please log in to access the dashboard.");
  //   return null;
  // }

  // console.log("loggedDash",loggedUser);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const token = localStorage.getItem("token");
  if (!token) {
    return message.error("You must be logged in to perform this action.");
  }

  return (
    <div className="min-h-screen p-12 gap-5 bg-green-8 flex flex-col">
      <div className="w-full flex justify-center items-center">
        <select
          name="months"
          id="months"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="min-w-24 p-4 mx-72 border rounded w-full text-center bg-main text-green-4 cursor-pointer outline-none"
        >
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </div>
      <div className="items-stretch min-h-screen p-12 gap-5 bg-green-8 grid grid-cols-1 sm:grid-cols-3">
        <AssetsAndInvestments month={selectedMonth} />
        <ExpenseDetails month={selectedMonth} />
        <EmergencyFund month={selectedMonth} />
        <IncomeDetails month={selectedMonth} />
        <InsuranceDetails month={selectedMonth} />
        {/* <LiabilitiesAndDebts month={selectedMonth} /> */}
        {/* <RetirementPlan month={selectedMonth} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
