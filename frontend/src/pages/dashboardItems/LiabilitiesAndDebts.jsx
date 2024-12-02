// src/components/PortfolioManagement/LiabilitiesAndDebts.js
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const LiabilitiesAndDebts = () => {
  const { loggedUser } = useAuth();

  const userId = loggedUser.id;
  const [liabilities, setLiabilities] = useState({
    mortgage: "",
    studentLoans: "",
    personalLoans: "",
    creditCardDebt: "",
    autoLoans: "",
    otherLiabilities: "",
  });

  const handleChange = (field, value) => {
    setLiabilities((prevLiabilities) => ({
      ...prevLiabilities,
      [field]: value,
    }));
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
        liabilities,
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
          onChange={(e) => handleChange("mortgage", e.target.value)}
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
          onChange={(e) => handleChange("studentLoans", e.target.value)}
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
          onChange={(e) => handleChange("personalLoans", e.target.value)}
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
          onChange={(e) => handleChange("creditCardDebt", e.target.value)}
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
          onChange={(e) => handleChange("autoLoans", e.target.value)}
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
          onChange={(e) => handleChange("otherLiabilities", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
