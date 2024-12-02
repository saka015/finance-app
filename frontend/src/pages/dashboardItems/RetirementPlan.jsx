// src/components/PortfolioManagement/RetirementPlan.js
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const RetirementPlan = () => {
  const { loggedUser } = useAuth();

  const userId = loggedUser.id;
  const [retirement, setRetirement] = useState({
    retirementSavings: "",
    pensionPlan: "",
    expectedRetirementAge: "",
    currentAge: "",
    monthlyContribution: "",
  });

  const handleChange = (field, value) => {
    setRetirement((prevRetirement) => ({ ...prevRetirement, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    if (!token) {
      console.error("No token found. User might not be logged in.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5000/api/data/portfolio/${userId}`,
        retirement,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        }
      );
      console.log("Portfolio saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving portfolio:", error.response?.data || error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex justify-center flex-col sm:w-96 mx-auto bg-gray-800 p-6 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-200 mb-4">Retirement Plan</h2>
      <div className="mb-4">
        <label
          htmlFor="retirementSavings"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Retirement Savings:
        </label>
        <input
          type="number"
          id="retirementSavings"
          value={retirement.retirementSavings}
          onChange={(e) => handleChange("retirementSavings", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="pensionPlan"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Pension Plan:
        </label>
        <input
          type="number"
          id="pensionPlan"
          value={retirement.pensionPlan}
          onChange={(e) => handleChange("pensionPlan", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="expectedRetirementAge"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Expected Retirement Age:
        </label>
        <input
          type="number"
          id="expectedRetirementAge"
          value={retirement.expectedRetirementAge}
          onChange={(e) =>
            handleChange("expectedRetirementAge", e.target.value)
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="currentAge"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Current Age:
        </label>
        <input
          type="number"
          id="currentAge"
          value={retirement.currentAge}
          onChange={(e) => handleChange("currentAge", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="monthlyContribution"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Monthly Contribution:
        </label>
        <input
          type="number"
          id="monthlyContribution"
          value={retirement.monthlyContribution}
          onChange={(e) => handleChange("monthlyContribution", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
