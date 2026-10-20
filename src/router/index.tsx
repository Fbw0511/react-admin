import { createBrowserRouter, Navigate } from "react-router-dom";
import BasicLayout from "@/layouts/BasicLayout";
import BlankLayout from "@/layouts/BlankLayout";
import Login from "@/pages/login";
import DashBoard from "@/pages/dashboard";
import NotFound from "@/pages/exception/NotFound";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <DashBoard /> }
    ]
  },
  {
    element: <BlankLayout />,
    children: [
      { path: "login", element: <Login /> }
    ]
  },
  { path: '*', element: <NotFound />, }
])