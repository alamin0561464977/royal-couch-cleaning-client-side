import React from "react";
import cleaningBoy from "../../images/clining-boy.png";
import securityServices from "../../images/Security-Services.jpg";
import { FaSlack } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <div className=" text-center text-lg p-10">
        <p className="p-5">
          We offer cleaning services for schools, Masjids, medical facilities,
          office buildings, and more. We customize our services to meet your
          specific needs. We promise quality, reliable cleaning service every
          time so our loyal customers feel special. We work hard to be the best.
          Our services are high-quality and safe. And we focus on the details,
          so you have a clean, orderly office every time.
        </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto">
        <div className=" p-5 border-4">
          <h1 className=" text-center text-2xl">Cleaning Services</h1>
          <img className=" w-full h-[400px] my-4" src={cleaningBoy} alt="" />
          <h1 className=" text-lg font-bold"> Some of our services include:</h1>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Commercial Cleaning</h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Government Office Cleaning</h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Medical cleaning</h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Power washing </h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Bio-hazard cleanup</h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Office Cleaning</h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">School Cleaning</h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Shop Cleaning</h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Building Cleaning</h1>
          </div>
        </div>
        <div className=" p-5 border-4">
          <h1 className=" text-center text-2xl">Cleaning Services</h1>
          <img
            className=" w-full h-[400px] my-4"
            src={securityServices}
            alt=""
          />
          <h1 className=" text-lg font-bold"> Some of our services include:</h1>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Manned Security</h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Manned Access Control</h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Electronic Security</h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Facility Management Service</h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Building Management Service</h1>
          </div>
          <div className=" flex gap-1 items-center">
            <FaSlack></FaSlack>
            <h1 className=" text-lg">Event Security Service</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
