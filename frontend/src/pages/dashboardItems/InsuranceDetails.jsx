// src/components/PortfolioManagement/InsuranceDetails.js
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const InsuranceDetails = () => {
  const { loggedUser } = useAuth();

  const userId = loggedUser.id;
  const [insurance, setInsurance] = useState({
    healthInsurance: "",
    lifeInsurance: "",
    homeInsurance: "",
    autoInsurance: "",
    otherInsurance: "",
  });

  const handleChange = (field, value) => {
    setInsurance((prevInsurance) => ({ ...prevInsurance, [field]: value }));
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
        insurance,
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
          onChange={(e) => handleChange("healthInsurance", e.target.value)}
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
          onChange={(e) => handleChange("lifeInsurance", e.target.value)}
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
          onChange={(e) => handleChange("homeInsurance", e.target.value)}
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
          onChange={(e) => handleChange("autoInsurance", e.target.value)}
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
          onChange={(e) => handleChange("otherInsurance", e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
