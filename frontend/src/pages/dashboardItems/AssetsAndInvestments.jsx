import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { message } from "antd";

const AssetsAndInvestments = ({ month }) => {
  const { loggedUser } = useAuth();
  const userId = loggedUser?.id;
  const [assets, setAssets] = useState({
    realEstate: 0,
    stocksBonds: 0,
    retirementAccounts: 0,
    businessOwnership: 0,
    savingsAccount: 0,
    otherInvestments: 0,
  });

  const handleInputChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0; // Simple and safer parsing. Defaults to 0 if invalid.
    setAssets({ ...assets, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      message.error("You are not logged in."); // Improved feedback to the user.
      return;
    }
    try {
      const response = await axios.put(
        // Changed to PUT to update existing records
        `http://localhost:5000/api/data/portfolio/${userId}/${month}`,
        { ...assets },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Portfolio saved successfully:", response.data);
      message.success("Assets And Investments saved successfully!");
    } catch (error) {
      console.error("Error saving portfolio:", error);
      message.error("Failed to save portfolio. Please try again."); //Improved feedback.
    }
  };

  return (
    <div className="flex flex-col sm:w-96 mx-auto bg-gray-800 p-6 rounded shadow-md">
      <h2 className="text-xl font-bold text-gray-200 mb-4">
        Assets and Investments
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-gray-400 text-sm font-bold mb-1">
            Real Estate:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={assets.realEstate}
            onChange={(e) => handleInputChange(e, "realEstate")}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-400 text-sm font-bold mb-1">
            Stocks/Bonds:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={assets.stocksBonds}
            onChange={(e) => handleInputChange(e, "stocksBonds")}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-400 text-sm font-bold mb-1">
            Retirement:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={assets.retirementAccounts}
            onChange={(e) => handleInputChange(e, "retirementAccounts")}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-400 text-sm font-bold mb-1">
            Business:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={assets.businessOwnership}
            onChange={(e) => handleInputChange(e, "businessOwnership")}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-400 text-sm font-bold mb-1">
            Savings:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={assets.savingsAccount}
            onChange={(e) => handleInputChange(e, "savingsAccount")}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-400 text-sm font-bold mb-1">
            Other:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={assets.otherInvestments}
            onChange={(e) => handleInputChange(e, "otherInvestments")}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-400 text-sm font-bold mb-1">
            Month
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-5 capitalize leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={month}
            disabled
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Save Portfolio
        </button>
      </form>
    </div>
  );
};

export default AssetsAndInvestments;
