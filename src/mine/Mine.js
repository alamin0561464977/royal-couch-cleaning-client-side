import React from "react";
import Navbar from "../Component/HomePage/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/HomePage/Footer";

const mine = () => {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default mine;
