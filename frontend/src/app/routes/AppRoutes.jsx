import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import AuthLayout from "../../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import DashboardLayout from "../../layouts/DashboardLayout";
import Home from "../../features/dashboard/ui/pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentLoggedEmployee } from "../../features/auth/state/auth/authAction";
import PublicRoute from "../../protectedRoutes/PublicRoute";
import ProtectedRoute from "../../protectedRoutes/ProtectedRoute";
import { commonRoutes } from "./commonRoutes";
import RoleBaseRoute from "../../protectedRoutes/RoleBaseRoute";
import { adminRoutes } from "./adminRoutes";
import { employeeRoutes } from "./employeeRoutes";
const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (() => {
      dispatch(currentLoggedEmployee());
    })();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            ...commonRoutes,
            {
              element: <RoleBaseRoute allowedRoles={"admin"} />,
              children: adminRoutes,
            },
            {
              element: <RoleBaseRoute allowedRoles={"employee"} />,
              children: employeeRoutes,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
