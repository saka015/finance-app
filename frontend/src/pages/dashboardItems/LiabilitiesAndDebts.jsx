import React, { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const LiabilitiesAndDebts = ({ month }) => {
  const { loggedUser } = useAuth();
  const userId = loggedUser?.id;

  const [liabilities, setLiabilities] = useState({
    mortgage: 0,
    studentLoans: 0,
    personalLoans: 0,
    creditCardDebt: 0,
    autoLoans: 0,
    otherLiabilities: 0,
  });

  const handleInputChange = (e, field) => {
    const value = e.target.value.trim(); // Trim whitespace
    const numericValue = parseInt(value, 10); //Parse as integer; NaN if not parseable.
    setLiabilities({
      ...liabilities,
      [field]: isNaN(numericValue) ? 0 : numericValue,
    });
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
        `http://localhost:5000/api/data/liabilities/${userId}/${month}`,
        { ...liabilities },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      message.success("Liabilities and Debts updated successfully!");
      console.log("Liabilities and debts updated:", response.data);
    } catch (error) {
      console.error("Error updating liabilities and debts:", error);
      message.error(
        "Failed to update liabilities and debts. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:w-96 mx-auto bg-gray-800 p-6 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-200 mb-4">
        Liabilities and Debts
      </h2>

      <div className="mb-4">
        <label
          htmlFor="mortgage"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Mortgage:
        </label>
        <input
          type="number"
          id="mortgage"
          value={liabilities.mortgage}
          onChange={(e) => handleInputChange(e, "mortgage")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="studentLoans"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Student Loans:
        </label>
        <input
          type="number"
          id="studentLoans"
          value={liabilities.studentLoans}
          onChange={(e) => handleInputChange(e, "studentLoans")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="personalLoans"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Personal Loans:
        </label>
        <input
          type="number"
          id="personalLoans"
          value={liabilities.personalLoans}
          onChange={(e) => handleInputChange(e, "personalLoans")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="creditCardDebt"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Credit Card Debt:
        </label>
        <input
          type="number"
          id="creditCardDebt"
          value={liabilities.creditCardDebt}
          onChange={(e) => handleInputChange(e, "creditCardDebt")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="autoLoans"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Auto Loans:
        </label>
        <input
          type="number"
          id="autoLoans"
          value={liabilities.autoLoans}
          onChange={(e) => handleInputChange(e, "autoLoans")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="otherLiabilities"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Other Liabilities:
        </label>
        <input
          type="number"
          id="otherLiabilities"
          value={liabilities.otherLiabilities}
          onChange={(e) => handleInputChange(e, "otherLiabilities")}
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
        Save Liabilities
      </button>
    </form>
  );
};

export default LiabilitiesAndDebts;
