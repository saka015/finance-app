import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { message } from "antd";

const EmergencyFund = ({ month }) => {
  const { loggedUser } = useAuth();
  const userId = loggedUser?.id;
  const [fund, setFund] = useState({
    amount: "",
    targetAmount: "",
    monthsOfExpenses: "",
  });
  //added for fetching existing data:
  useEffect(() => {
    const fetchEmergencyFundData = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          `http://localhost:5000/api/data/emergencyFund/${userId}/${month}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setFund(res.data);
      } catch (e) {
        console.error("Error fetching emergency fund data", e);
      }
    };

    if (userId && month) {
      fetchEmergencyFundData();
    }
  }, [userId, month]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //Safe numeric input handling:
    const numericValue = value.replace(/[^\d.]/g, "");
    setFund({ ...fund, [name]: numericValue });
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
        `http://localhost:5000/api/data/emergencyFund/${userId}/${month}`,
        fund, //no need for spread operator here
        { headers: { Authorization: `Bearer ${token}` } }
      );
      message.success("Emergency fund updated successfully!");
      console.log("Emergency fund updated:", response.data);
    } catch (error) {
      console.error("Error updating emergency fund:", error);
      message.error("Failed to update emergency fund. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:w-96 mx-auto bg-gray-800 p-6 rounded shadow-md"
    >
      <h2 className="text-xl font-bold text-gray-200 mb-4">Emergency Fund</h2>
      {/* Input fields using name attribute for easier handling */}
      <div className="mb-2">
        <label className="block text-gray-400 text-sm font-bold mb-1">
          Amount Saved:
        </label>
        <input
          type="text"
          name="amount"
          value={fund.amount}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {/*Similar changes for other input fields */}
      <div className="mb-2">
        <label className="block text-gray-400 text-sm font-bold mb-1">
          Target Amount:
        </label>
        <input
          type="text"
          name="targetAmount"
          value={fund.targetAmount}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-400 text-sm font-bold mb-1">
          Months of Expenses:
        </label>
        <input
          type="text"
          name="monthsOfExpenses"
          value={fund.monthsOfExpenses}
          onChange={handleInputChange}
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
        Save
      </button>
    </form>
  );
};

export default EmergencyFund;
