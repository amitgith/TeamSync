import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
const AppRoutes = () => {
  const router = createBrowserRouter([]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
