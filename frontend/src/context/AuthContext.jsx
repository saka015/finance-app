// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState(null);

  // const fetchUserData = async () => {
  //   const storedToken = localStorage.getItem("token");
  //   if (storedToken) {
  //     setUser({ token: storedToken });
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/user", {
  //         headers: { Authorization: `Bearer ${storedToken}` },
  //       });
  //       setLoggedUser(response.data);
  //     } catch (error) {
  //       console.error(
  //         "Error fetching user data:",
  //         error.response?.data || error
  //       );
  //       logout();
  //     }
  //   }
  //   setIsLoading(false);
  // };
const fetchUserData = async () => {
  const storedToken = localStorage.getItem("token");
  const storedUser = localStorage.getItem("loggedUser");

  if (storedToken && storedUser) {
    setUser({ token: storedToken });
    setLoggedUser(JSON.parse(storedUser)); // Restore user data
  } else if (storedToken) {
    try {
      const response = await axios.get("http://localhost:5000/api/user", {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setLoggedUser(response.data); // Set logged-in user data
    } catch (error) {
      console.error("Error fetching user data:", error.response?.data || error);
      logout(); // Clear token and state if the fetch fails
    }
  }
  setIsLoading(false);
};



  useEffect(() => {
    fetchUserData();
  }, []);

  // const login = (token, userData) => {
  //   localStorage.setItem("token", token);
  //   setUser({ token });
  //   setLoggedUser(userData);
  //   message.success("Logged in successfully!");
  // };

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("loggedUser", JSON.stringify(userData)); // Persist user data
    setUser({ token });
    setLoggedUser(userData);
    message.success("User logged in!");
  };


  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setLoggedUser(null);
    message.info("Logged out!");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{ user, loggedUser, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
