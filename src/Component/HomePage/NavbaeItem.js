import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";

const NavbarItem = ({ clos, setClos }) => {
  return (
    <div>
      <div className=" flex gap-1 items-center border-b-4 pb-3">
        <img className=" w-20 h-20 rounded-full" src={logo} alt="" />
        <h1 className=" lg:text-2xl text-lg font-bold">
          Royal Touch Cleaning Services Company
        </h1>
      </div>
      <div className=" ">
        <Link
          to="/"
          className="text-xl font-bold inline-block my-2 hover:border-b-2 border-y-cyan-800"
        >
          Home
        </Link>
        <hr />
        <Link
          to="/"
          className="text-xl font-bold inline-block my-2 hover:border-b-2 border-y-cyan-800"
        >
          Who we are
        </Link>
        <br />
        <Link
          to="/services"
          className="text-xl font-bold inline-block my-2 hover:border-b-2 border-y-cyan-800"
        >
          Our Services
        </Link>
        <hr />
        <Link
          to="/"
          className="text-xl font-bold inline-block my-2 hover:border-b-2 border-y-cyan-800"
        >
          Our Clients
        </Link>
        <hr />
        <Link
          to="/"
          className="text-xl font-bold inline-block my-2 hover:border-b-2 border-y-cyan-800"
        >
          Gallery
        </Link>
        <hr />
        <Link
          to="/contact-us"
          className="text-xl font-bold inline-block my-2 hover:border-b-2 border-y-cyan-800"
        >
          Contact
        </Link>
        <br />
      </div>
    </div>
  );
};

export default NavbarItem;
