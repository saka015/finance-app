import { message } from "antd";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const IncomeDetails = ({ month }) => {
  const { loggedUser } = useAuth();
  const userId = loggedUser?.id;

  const [income, setIncome] = useState({
    salary: 0,
    businessIncome: 0,
    rentalIncome: 0,
    dividends: 0,
    otherSources: 0,
  });

  const handleInputChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0; // Safely parse input value
    setIncome({ ...income, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      message.error("You are not logged in.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/data/income/${userId}/${month}`,
        { ...income },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      message.success("Income Details saved successfully!");
      console.log("Income Details saved:", response.data);
    } catch (error) {
      console.error("Error saving income details:", error);
      message.error("Failed to save income details. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:w-96 mx-auto bg-gray-800 p-6 rounded shadow-md"
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
          onChange={(e) => handleInputChange(e, "salary")}
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
          onChange={(e) => handleInputChange(e, "businessIncome")}
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
          onChange={(e) => handleInputChange(e, "rentalIncome")}
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
          onChange={(e) => handleInputChange(e, "dividends")}
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
          onChange={(e) => handleInputChange(e, "otherSources")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-400 text-sm font-bold mb-1">
          Month
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 capitalize leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={month}
          disabled
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
