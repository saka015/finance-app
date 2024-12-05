import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { loggedUser, isLoading } = useAuth();

  console.log("logged", loggedUser?.id);

  return (
    <div className="bg-main min-h-[90vh] flex flex-col sm:flex-row gap-4 items-center justify-center">
      {!loggedUser && (
        <>
          <Link
            to="/login"
            className="bg-green-8 text-white py-5 px-8 rounded-md transition duration-300 ease-in-out transform hover:bg-green-7 hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-8 text-white py-5 px-8 rounded-md transition duration-300 ease-in-out transform hover:bg-green-7 hover:scale-105"
          >
            Register
          </Link>
        </>
      )}

      {loggedUser && (
      <h1 className="text-6xl font-semibold text-green-4 mb-36">Welcome to Finance Tracker App</h1>
      )}
    </div>
  );
};

export default Home;
