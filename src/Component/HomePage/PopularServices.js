import React from "react";

const PopularServices = () => {
  return (
    <div className=" container mx-auto">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className=" text-2xl text-slate-500 font-bold border-b-4 border-rose-700 rounded-xl p-3 inline-block">
            Popular Services
          </h2>
        </div>
        <div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-1">
          <a href="/" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                class="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://img.freepik.com/free-photo/full-shot-men-cleaning-office_23-2149345516.jpg?w=2000"
                alt=""
              />
              <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p class="mb-4 text-2xl tracking-wide font-bold text-gray-100">
                  Office Building Cleaning
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                class="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_eVLdV_6Lc5uoTVHZnxKjFf9FiPnj56xmDCeuaH6qNDe-4ERq9Pdho6nYa7sgJwmN5w&usqp=CAU"
                alt=""
              />
              <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p class="mb-4 text-2xl font-bold text-gray-100">
                  Hospital Cleaning
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                class="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://medcofacilities.co.uk/wp-content/uploads/2021/08/school.jpg"
                alt=""
              />
              <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p class="mb-4 text-2xl font-bold text-gray-100">
                  University / School Cleaning
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="text-center">
          <a
            href=""
            aria-label=""
            class="inline-flex items-center font-semibold transition-colors duration-200 text-green-500 hover:text-deep-purple-800"
          >
            View all Service
            <svg
              class="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
