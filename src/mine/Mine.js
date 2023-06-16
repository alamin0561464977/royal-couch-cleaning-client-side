import React, { useState } from "react";
import Navbar from "../Component/HomePage/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/HomePage/Footer";
import NavbarItem from "../Component/HomePage/NavbaeItem";

const Mine = () => {
  const [clos, setClos] = useState(false);
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Mine;
