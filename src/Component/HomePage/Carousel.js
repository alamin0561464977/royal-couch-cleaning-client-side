import React from "react";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://royaltouchcleaning.net/files/2021/12/logo-v1_1.png"
            className="w-full bg-gray-300 h-[500px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.anitashousekeeping.com/wp-content/uploads/2023/02/woman-in-red-long-sleeve-shirt-and-blue-denim-jeans-standing-beside-gray-couch.jpeg"
            className="w-full h-[500px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <div className=" lg:p-10 text-center font-bold bg-[#96a98d70] rounded-lg">
              <h1 className=" text-4xl mb-4">Royal Touch Cleaning</h1>
              <h2 className=" text-xl">Phone: 66522156 & 99650065</h2>
              <h3 className=" text-lg">Royal.touch.Kuwait@gmail.con</h3>
            </div>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://blog.servicemarket.com/wp-content/uploads/2022/02/deep-cleaning-in-dubai-featured-image-450x250-1.jpg"
            className="w-full h-[500px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <div className=" lg:p-10 text-center font-bold bg-[#96a98d70] rounded-lg">
              <h1 className=" text-4xl mb-4">Royal Touch Cleaning</h1>
              <h2 className=" text-xl">Phone: 66522156 & 99650065</h2>
              <h3 className=" text-lg">Royal.touch.Kuwait@gmail.con</h3>
            </div>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.squarespace-cdn.com/content/v1/60df176e00e2475584806208/1629134995383-PWL63M0TFUHWUZ6PQL2F/carpet+cleaners+lakeville+mn.png"
            className="w-full h-[500px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <div className=" lg:p-10 text-center font-bold bg-[#96a98d70] rounded-lg">
              <h1 className=" text-4xl mb-4">Royal Touch Cleaning</h1>
              <h2 className=" text-xl">Phone: 66522156 & 99650065</h2>
              <h3 className=" text-lg">Royal.touch.Kuwait@gmail.con</h3>
            </div>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
