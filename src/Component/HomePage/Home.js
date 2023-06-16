import React from "react";
import Navbar from "./Navbar";
import Carousela from "./Carousel";
import PopularServices from "./PopularServices";
import Owner from "./Owner";
import GeneralManager from "./GeneralManager";
import OurExpertise from "./OurExpertise";
import OurInception from "./OurInception";

const Home = () => {
  return (
    <div>
      <Carousela></Carousela>
      <Owner></Owner>
      <GeneralManager></GeneralManager>
      <OurExpertise></OurExpertise>
    </div>
  );
};

export default Home;
