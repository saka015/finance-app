import React from "react";
import AssetsAndInvestments from "./dashboardItems/AssetsAndInvestments";
import EmergencyFund from "./dashboardItems/EmergencyFund";
import ExpenseDetails from "./dashboardItems/ExpenseDetails";
import IncomeDetails from "./dashboardItems/IncomeDetails";
import InsuranceDetails from "./dashboardItems/InsuranceDetails";
import LiabilitiesAndDebts from "./dashboardItems/LiabilitiesAndDebts";
import RetirementPlan from "./dashboardItems/RetirementPlan";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-12 gap-5 bg-green-8 grid grid-cols-3">
      <AssetsAndInvestments />
      <ExpenseDetails />
      <IncomeDetails />
      <InsuranceDetails />
      <LiabilitiesAndDebts />
      <RetirementPlan />
      <EmergencyFund />
    </div>
  );
};

export default Dashboard;
