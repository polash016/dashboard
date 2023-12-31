import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./pages/Dashboard/Layout/Layout";
import Search from "./pages/Dashboard/Search/Search";
import AccountDetails from "./pages/Dashboard/AccountDetails/AccountDetails";
import Support from "./pages/Dashboard/Support/Support";
import MyReports from "./pages/Dashboard/MyReports/MyReports";
import AuthProvider from "./Provider/AuthProvider";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
