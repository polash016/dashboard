import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Authentication/Login/Login.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./pages/Dashboard/Layout/Layout";
import Search from "./pages/Dashboard/Search/Search";
import AccountDetails from "./pages/Dashboard/AccountDetails/AccountDetails";
import Support from "./pages/Dashboard/Support/Support";
import MyReports from "./pages/Dashboard/MyReports/MyReports";
import Registration from "./pages/Authentication/Registration/Registration";
import ForgetEmail from "./pages/Authentication/ForgetPassword/ForgetEmail";
import ResetPassword from "./pages/Authentication/ForgetPassword/ResetPassword";
import SuccessReset from "./pages/Authentication/ForgetPassword/SuccessReset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Search />,
      },
      {
        path: "account",
        element: <AccountDetails />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "report",
        element: <MyReports />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/forget",
    element: <ForgetEmail />,
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/success",
    element: <SuccessReset />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
