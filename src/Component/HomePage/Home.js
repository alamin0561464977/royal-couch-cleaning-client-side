import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import PopularServices from "./PopularServices";
import Owner from "./Owner";
import GeneralManager from "./GeneralManager";
import OurExpertise from "./OurExpertise";
import OurInception from "./OurInception";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <PopularServices></PopularServices>
      <Owner></Owner>
      <GeneralManager></GeneralManager>
      <OurExpertise></OurExpertise>
    </div>
  );
};

export default Home;
