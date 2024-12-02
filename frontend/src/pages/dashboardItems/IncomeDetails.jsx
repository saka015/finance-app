// src/components/PortfolioManagement/IncomeDetails.js

import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const IncomeDetails = () => {
  const { loggedUser } = useAuth();

  const userId = loggedUser.id;

  

  const [income, setIncome] = useState({
    salary: "",
    businessIncome: "",
    rentalIncome: "",
    dividends: "",
    otherSources: "",
  });

  const handleChange = (field, value) => {
    setIncome((prevIncome) => ({ ...prevIncome, [field]: value }));
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
        `http://localhost:5000/api/data/income/${userId}`,
        income,
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
      className="  flex justify-center flex-col sm:w-96  mx-auto bg-gray-800 p-6 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-200 mb-4">Income Details</h2>
      <div className="mb-4">
        <label
          htmlFor="salary"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Salary:
        </label>
        <input
          type="number"
          id="salary"
          value={income.salary}
          onChange={(e) => handleChange("salary", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="businessIncome"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Business Income:
        </label>
        <input
          type="number"
          id="businessIncome"
          value={income.businessIncome}
          onChange={(e) => handleChange("businessIncome", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="rentalIncome"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Rental Income:
        </label>
        <input
          type="number"
          id="rentalIncome"
          value={income.rentalIncome}
          onChange={(e) => handleChange("rentalIncome", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="dividends"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Dividends:
        </label>
        <input
          type="number"
          id="dividends"
          value={income.dividends}
          onChange={(e) => handleChange("dividends", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="otherSources"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Other Sources:
        </label>
        <input
          type="number"
          id="otherSources"
          value={income.otherSources}
          onChange={(e) => handleChange("otherSources", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Save Income
      </button>
    </form>
  );
};

export default IncomeDetails;
