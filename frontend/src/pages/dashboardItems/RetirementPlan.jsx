import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { message } from "antd";

const RetirementPlan = ({ month }) => {
  const { loggedUser } = useAuth();
  const userId = loggedUser?.id;

  const [retirement, setRetirement] = useState({
    retirementSavings: 0,
    pensionPlan: 0,
    expectedRetirementAge: 0,
    currentAge: 0,
    monthlyContribution: 0,
  });

  const handleInputChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0; // Safer parsing, default to 0 if invalid
    setRetirement({ ...retirement, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      message.error("You are not logged in.");
      return;
    }
    if (!userId || !month) {
      message.error("Error saving data: User ID or month is missing.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/data/retirement/${userId}/${month}`,
        { ...retirement },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      message.success("Retirement plan updated successfully!");
      console.log("Retirement plan updated:", response.data);
    } catch (error) {
      console.error("Error updating retirement plan:", error);
      message.error("Failed to update retirement plan. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:w-96 mx-auto bg-gray-800 p-6 rounded shadow-md"
    >
      <h2 className="text-xl font-bold text-gray-200 mb-4">Retirement Plan</h2>

      <div className="mb-2">
        <label className="block text-gray-400 text-sm font-bold mb-1">
          Retirement Savings:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={retirement.retirementSavings}
          onChange={(e) => handleInputChange(e, "retirementSavings")}
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-400 text-sm font-bold mb-1">
          Pension Plan:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={retirement.pensionPlan}
          onChange={(e) => handleInputChange(e, "pensionPlan")}
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-400 text-sm font-bold mb-1">
          Expected Retirement Age:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={retirement.expectedRetirementAge}
          onChange={(e) => handleInputChange(e, "expectedRetirementAge")}
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-400 text-sm font-bold mb-1">
          Current Age:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={retirement.currentAge}
          onChange={(e) => handleInputChange(e, "currentAge")}
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-400 text-sm font-bold mb-1">
          Monthly Contribution:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={retirement.monthlyContribution}
          onChange={(e) => handleInputChange(e, "monthlyContribution")}
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-400 text-sm font-bold mb-1">
          Month
        </label>
        <input
          type="text"
          value={month}
          disabled
          className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 capitalize leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Save Retirement Plan
      </button>
    </form>
  );
};

export default RetirementPlan;
