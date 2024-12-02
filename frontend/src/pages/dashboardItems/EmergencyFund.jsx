import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const EmergencyFund = () => {
  const { loggedUser } = useAuth();

  const userId = loggedUser.id;

  const [fund, setFund] = useState({
    amount: "",
    targetAmount: "",
    monthsOfExpenses: "",
  });

  const handleInputChange = (e, field) => {
    let value = e.target.value;
    //This handles cases where user inputs non numeric values.  Consider more robust handling if needed
    if (value) value = value.replace(/[^\d.]/g, "");

    setFund({ ...fund, [field]: value });
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
        `http://localhost:5000/api/data/emergencyFund/${userId}`,
        fund,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        }
      );
      console.log("EmergencyFund saved successfully:", response.data);
    } catch (error) {
      console.error(
        "Error saving emergencyFund:",
        error.response?.data || error
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex justify-center flex-col sm:w-96 mx-auto bg-gray-800 p-6 rounded shadow-md"
    >
      <h2 className="text-xl font-bold text-gray-200 mb-4">Emergency Fund</h2>
      <div className="mb-2">
        <label
          htmlFor="amount"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Amount Saved:
        </label>
        <input
          type="number"
          id="amount"
          value={fund.amount}
          onChange={(e) => handleInputChange(e, "amount")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="targetAmount"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Target Amount:
        </label>
        <input
          type="number"
          id="targetAmount"
          value={fund.targetAmount}
          onChange={(e) => handleInputChange(e, "targetAmount")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="monthsOfExpenses"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Months of Expenses:
        </label>
        <input
          type="number"
          id="monthsOfExpenses"
          value={fund.monthsOfExpenses}
          onChange={(e) => handleInputChange(e, "monthsOfExpenses")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Save
      </button>
    </form>
  );
};

export default EmergencyFund;
