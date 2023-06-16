import React, { useState } from "react";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbaeItem";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="  border-b-4 p-2 flex justify-between items-center h-28">
      <div className=" flex gap-1 items-center">
        <img className=" w-20 h-20 rounded-full" src={logo} alt="" />
        <h1 className=" lg:text-2xl text-lg font-bold">
          Royal Touch Cleaning Services Company
        </h1>
      </div>
      <label htmlFor="my-drawer" className=" lg:hidden my-5">
        <FaBars className=" text-4xl"></FaBars>
      </label>
      <div className=" gap-4 hidden lg:flex">
        <Link
          to="/"
          className="text-xl font-bold my-4 hover:border-b-2 border-y-cyan-800"
        >
          Home
        </Link>
        <Link
          to="/"
          className="text-xl font-bold my-4 hover:border-b-2 border-y-cyan-800"
        >
          Who we are
        </Link>
        <Link
          to="/services"
          className="text-xl font-bold my-4 hover:border-b-2 border-y-cyan-800"
        >
          Our Services
        </Link>
        <Link
          to="/"
          className="text-xl font-bold my-4 hover:border-b-2 border-y-cyan-800"
        >
          Our Clients
        </Link>
        <Link
          to="/"
          className="text-xl font-bold my-4 hover:border-b-2 border-y-cyan-800"
        >
          Gallery
        </Link>
        <Link
          to="/contact-us"
          className="text-xl font-bold my-4 hover:border-b-2 border-y-cyan-800"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
