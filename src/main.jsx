import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main.jsx";
import Home from "./components/Home.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import CreateShop from "./components/CreateShop.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AllShops from "./components/DashboardItems/AllShops.jsx";
import ShopDetails from "./components/DashboardItems/ShopDetails.jsx";
import AllProducts from "./components/DashboardItems/AllProducts.jsx";
import AllUsers from "./components/DashboardItems/AllUsers.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddProduct from "./components/DashboardItems/AddProduct.jsx";
import Cart from "./components/Cart.jsx";
import Payment from "./components/Payment/Payment.jsx";
import Paymenthistory from "./components/DashboardItems/Paymenthistory.jsx";
import UpdateProduct from "./components/DashboardItems/UpdateProduct.jsx";
import AdminStats from "./components/DashboardItems/AdminStats.jsx";
import SalesSummery from "./components/DashboardItems/SalesSummery.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/createShop",
        element: <PrivateRoute><CreateShop></CreateShop></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [

      {
        path:'adminStats',
        element:<AdminRoute><AdminStats></AdminStats></AdminRoute>
      },

      {
        path: "allShops",
        element: <AllShops></AllShops>,
      },
      {
        path: "shopDetails",
        element: <ShopDetails></ShopDetails>,
      },
      {
        path: "allProducts",
        element: <AllProducts></AllProducts>,
      },

      {
        path: "allCustomers",
        element: <AllUsers></AllUsers>,
      },
      {
        path:'addProduct',
        element:<AddProduct></AddProduct>,
      },
      {
        path:'createshop',
        element:<CreateShop></CreateShop>
      },
      {
        path:'allProducts',
        element:<AllProducts></AllProducts>
      },
      {
        path:'updateProduct/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'salesCollection',
        element:<SalesSummery></SalesSummery>
      },
      {
        path:'paymentHistory',
        element:<Paymenthistory></Paymenthistory>
      }

    ],
  },
]);

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
