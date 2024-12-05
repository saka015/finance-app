import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { message } from "antd";


const HealthScore = () => {
  const [healthScore, setHealthScore] = useState(null);

  useEffect(() => {
    const savedHealthScore = localStorage.getItem("healthScore");
    if (savedHealthScore) {
      setHealthScore(parseInt(savedHealthScore, 10));
    } else {
      const newHealthScore = Math.floor(Math.random() * (85 - 45 + 1)) + 45;
      setHealthScore(newHealthScore);
      localStorage.setItem("healthScore", newHealthScore);
    }
  }, []);


    const { loggedUser } = useAuth();

    const navigate = useNavigate();

    if (!loggedUser) {
      navigate("/");
      message.error("Please log in to access the dashboard.");
      return;
    }
  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-green-8">
      <div className="bg-main text-purple p-12 rounded-md text-2xl text-center font-semibold shadow-xl">
        <h1>Your Health Score is {healthScore}</h1>
      </div>
    </div>
  );
};

export default HealthScore;
