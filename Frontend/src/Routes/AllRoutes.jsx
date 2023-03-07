import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import AdminSignin from "../Admin/AdminSignin";
import { Home } from "../Pages/Main";
import { Products } from "../Pages/Products";
import { ReqAuth } from "../HOC/ReqAuth";
import Cart from "../Pages/Cart";
import { Login } from "../Pages/Login";
import Signup from "../Pages/Signup";
import Payment from "../Pages/payment/Payment";


export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/adminsignin" element={<AdminSignin />}></Route>
      <Route path="/products" element={<Products />} />
      <Route
        path="/cart"
        element={
          <ReqAuth>
            <Cart />
          </ReqAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}
