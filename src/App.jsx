import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const Error404 = React.lazy(() => import("./pages/Error404"));
const Users = React.lazy(() => import("./pages/Users"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const Loading = React.lazy(() => import("./components/Loading"));
const ErrorLayout = React.lazy(() => import("./layouts/ErrorLayout"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail"))
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Guest from "./pages/Guest";

function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>    
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/user" element={<Users />} />
          <Route path="/products" element={<Products  />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
        </Route>
        <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
        <Route element={<MainLayout/>}>
        <Route path="/error/400" element={<Error400 />} />
          <Route path="/error/401" element={<Error401 />} />
          <Route path="/error/403" element={<Error403 />} />
          <Route path="/error/404" element={<Error404 />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Guest />} />
        </Route>
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
