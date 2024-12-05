import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { message } from "antd";

const ExpenseDetails = ({ month }) => {
  const { loggedUser } = useAuth();
  const userId = loggedUser?.id;
  const [expenses, setExpenses] = useState({
    housing: 0,
    utilities: 0,
    groceries: 0,
    transportation: 0,
    healthcare: 0,
    education: 0,
    entertainment: 0,
    otherExpenses: 0,
  });

  const handleInputChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0; // Safer parsing with a default to 0
    setExpenses({ ...expenses, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      message.error("You are not logged in."); // Improved feedback for user
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:5000/api/data/expenses/${userId}/${month}`, // Correct API endpoint for expenses
        { ...expenses },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Expense details saved successfully:", response.data);
      message.success("Expense Details saved successfully!"); // Consistent message
    } catch (error) {
      console.error("Error saving expense details:", error);
      message.error("Failed to save expense details. Please try again."); // Consistent error message
    }
  };

  return (
    <div className="flex flex-col sm:w-96 mx-auto bg-gray-800 p-6 rounded shadow-md">
      <h2 className="text-xl font-bold text-gray-200 mb-4">Expense Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Render inputs for each expense item */}
        {[
          "housing",
          "utilities",
          "groceries",
          "transportation",
          "healthcare",
          "education",
          "entertainment",
          "otherExpenses",
        ].map((field) => (
          <div className="mb-2" key={field}>
            <label className="block text-gray-400 text-sm font-bold mb-1">
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={expenses[field]}
              onChange={(e) => handleInputChange(e, field)}
            />
          </div>
        ))}
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
          Save Expenses
        </button>
      </form>
    </div>
  );
};

export default ExpenseDetails;
