import React from "react";
import { Link } from "react-router-dom";

const PopularServices = () => {
  return (
    <div className=" container mx-auto">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            Popular Services
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-1">
          <div aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://img.freepik.com/free-photo/full-shot-men-cleaning-office_23-2149345516.jpg?w=2000"
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p className="text-sm font-medium tracking-wide text-white">
                  Office Building Cleaning
                </p>
              </div>
            </div>
          </div>
          <div aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_eVLdV_6Lc5uoTVHZnxKjFf9FiPnj56xmDCeuaH6qNDe-4ERq9Pdho6nYa7sgJwmN5w&usqp=CAU"
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p className="text-sm font-medium tracking-wide text-white">
                  Hospital Cleaning
                </p>
              </div>
            </div>
          </div>
          <div aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://medcofacilities.co.uk/wp-content/uploads/2021/08/school.jpg"
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p className="text-sm font-medium tracking-wide text-white">
                  University / School Cleaning
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            to="/services"
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            See more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
