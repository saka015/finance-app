import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { loggedUser, isLoading } = useAuth();

  console.log("logged", loggedUser?.id);

  return (
    <div>
      <Link to="/user-health-score">Health</Link>
      <Link to="/user-health-score">Health</Link>
      <Link to="/user-health-score">Health</Link>
    </div>
  );
};

export default Home;
