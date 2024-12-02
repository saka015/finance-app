import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PortfolioManagment from "./pages/PortfolioManagment";
import HealthScore from "./pages/HealthScore";
import UserProfile from "./pages/UserProfile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/user-portfolio",
          element: <PortfolioManagment />,
        },
        {
          path: "/user-health-score",
          element: <HealthScore />,
        },
        {
          path: "/user-profile",
          element: <UserProfile />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
