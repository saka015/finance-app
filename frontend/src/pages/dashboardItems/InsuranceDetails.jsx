import React, { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const InsuranceDetails = ({ month }) => {
  const { loggedUser } = useAuth();
  const userId = loggedUser?.id;

  const [insurance, setInsurance] = useState({
    healthInsurance: 0,
    lifeInsurance: 0,
    homeInsurance: 0,
    autoInsurance: 0,
    otherInsurance: 0,
  });

  const handleInputChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0; // Safely parse input value
    setInsurance({ ...insurance, [field]: value });
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
        `http://localhost:5000/api/data/insurance/${userId}/${month}`,
        { ...insurance },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      message.success("Insurance Details saved successfully!");
      console.log("Insurance Details saved:", response.data);
    } catch (error) {
      console.error("Error saving insurance details:", error);
      message.error("Failed to save insurance details. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:w-96 mx-auto bg-gray-800 p-6 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-200 mb-4">
        Insurance Details
      </h2>
      <div className="mb-4">
        <label
          htmlFor="healthInsurance"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Health Insurance:
        </label>
        <input
          type="number"
          id="healthInsurance"
          value={insurance.healthInsurance}
          onChange={(e) => handleInputChange(e, "healthInsurance")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lifeInsurance"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Life Insurance:
        </label>
        <input
          type="number"
          id="lifeInsurance"
          value={insurance.lifeInsurance}
          onChange={(e) => handleInputChange(e, "lifeInsurance")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="homeInsurance"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Home Insurance:
        </label>
        <input
          type="number"
          id="homeInsurance"
          value={insurance.homeInsurance}
          onChange={(e) => handleInputChange(e, "homeInsurance")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="autoInsurance"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Auto Insurance:
        </label>
        <input
          type="number"
          id="autoInsurance"
          value={insurance.autoInsurance}
          onChange={(e) => handleInputChange(e, "autoInsurance")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="otherInsurance"
          className="block text-gray-400 text-sm font-bold mb-1"
        >
          Other Insurance:
        </label>
        <input
          type="number"
          id="otherInsurance"
          value={insurance.otherInsurance}
          onChange={(e) => handleInputChange(e, "otherInsurance")}
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
        Save Insurance Details
      </button>
    </form>
  );
};

export default InsuranceDetails;
