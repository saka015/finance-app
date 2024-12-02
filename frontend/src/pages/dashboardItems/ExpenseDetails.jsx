// src/components/PortfolioManagement/ExpenseDetails.js
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const ExpenseDetails = () => {
  const { loggedUser } = useAuth();

  const userId = loggedUser.id;

  const [expenses, setExpenses] = useState({
    housing: "",
    utilities: "",
    groceries: "",
    transportation: "",
    healthcare: "",
    education: "",
    entertainment: "",
    otherExpenses: "",
  });

  const handleChange = (field, value) => {
    setExpenses((prevExpenses) => ({ ...prevExpenses, [field]: value }));
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
        `http://localhost:5000/api/data/expenses/${userId}`,
        expenses,
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
      className=" flex justify-center flex-col flex justify-center flex-col sm:w-96 mx-auto bg-gray-800 p-6 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-200 mb-4">Expense Details</h2>
      <div className="mb-4">
        <label
          htmlFor="housing"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Housing:
        </label>
        <input
          type="number"
          id="housing"
          value={expenses.housing}
          onChange={(e) => handleChange("housing", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="utilities"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Utilities:
        </label>
        <input
          type="number"
          id="utilities"
          value={expenses.utilities}
          onChange={(e) => handleChange("utilities", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {/* Repeat for other expense types */}
      <div className="mb-4">
        <label
          htmlFor="groceries"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Groceries:
        </label>
        <input
          type="number"
          id="groceries"
          value={expenses.groceries}
          onChange={(e) => handleChange("groceries", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="transportation"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Transportation:
        </label>
        <input
          type="number"
          id="transportation"
          value={expenses.transportation}
          onChange={(e) => handleChange("transportation", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="healthcare"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Healthcare:
        </label>
        <input
          type="number"
          id="healthcare"
          value={expenses.healthcare}
          onChange={(e) => handleChange("healthcare", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="education"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Education:
        </label>
        <input
          type="number"
          id="education"
          value={expenses.education}
          onChange={(e) => handleChange("education", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="entertainment"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Entertainment:
        </label>
        <input
          type="number"
          id="entertainment"
          value={expenses.entertainment}
          onChange={(e) => handleChange("entertainment", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="otherExpenses"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Other Expenses:
        </label>
        <input
          type="number"
          id="otherExpenses"
          value={expenses.otherExpenses}
          onChange={(e) => handleChange("otherExpenses", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Save Expenses
      </button>
    </form>
  );
};

export default ExpenseDetails;
