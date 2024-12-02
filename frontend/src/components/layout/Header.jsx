import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { logout, loggedUser } = useAuth();

  return (
    <nav className="bg-main p-4 w-full text-green-3 flex justify-between">
      <div>
        <h1>Budgeting & Wellness Tool</h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/user-health-score">
          <button className="p-1 px-3 rounded-md border border-transparent hover:border-green-5">
            Health Score
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="p-1 px-3 rounded-md border border-transparent hover:border-green-5">
            Dashboard
          </button>
        </Link>
        <Link to="/user-portfolio">
          <button className="p-1 px-3 rounded-md border border-transparent hover:border-green-5">
            Portfolio
          </button>
        </Link>
        {loggedUser ? (
          <div className="flex gap-3">
            <Link to="/user-profile">
              <button className="p-1 px-3 rounded-md border border-transparent hover:border-green-5">
                Profile
              </button>
            </Link>
            <button
              onClick={logout}
              className="p-1 px-3 rounded-md border border-transparent hover:border-green-5"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="p-1 px-3 rounded-md border border-transparent hover:border-green-5">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
