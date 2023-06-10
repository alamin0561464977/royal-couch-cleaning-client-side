import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import PopularServices from "./PopularServices";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <PopularServices></PopularServices>
    </div>
  );
};

export default Home;
