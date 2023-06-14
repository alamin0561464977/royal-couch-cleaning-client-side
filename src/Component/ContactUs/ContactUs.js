import React from "react";
import aboutUs from "../../images/contactUs.png";
import {
  FaEnvelopeOpenText,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhoneSquareAlt,
  FaTwitter,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <img className=" w-[100%] h-[200px] lg:h-[400px]" src={aboutUs} alt="" />
      <div className=" p-4 w-full lg:w-[600px] mx-auto my-5 rounded-lg shadow-xl bg-slate-300">
        <h1 className=" text-center text-3xl font-bold text-sky-700">
          Contact our company
        </h1>
        <div className=" mt-5 lg:mx-20 mx-5">
          <div className=" flex gap-2 item-center content-center">
            <FaEnvelopeOpenText className=" text-2xl text-sky-700"></FaEnvelopeOpenText>
            <h1 className=" text-lg font-bold">Royal.touch.Kuwait@gmail.con</h1>
          </div>
          <div className=" flex gap-2 item-center content-center">
            <FaPhoneSquareAlt className=" text-2xl text-sky-700"></FaPhoneSquareAlt>
            <h1 className=" text-lg font-bold">66522156 & 99650065</h1>
          </div>
          <div className=" flex gap-2 item-center content-center">
            <FaMapMarkedAlt className=" text-4xl text-sky-700"></FaMapMarkedAlt>
            <h1 className=" text-lg font-bold">
              Near McDonald's Dana Nimran Building Mizanin Floor Office NO: 50
            </h1>
          </div>
          <div className="divider"></div>
          <div className=" flex gap-3 text-4xl">
            <FaFacebook className=" m-1 p-1 cursor-pointer hover:border-b-4 border-teal-500"></FaFacebook>
            <FaTwitter className=" m-1 p-1 cursor-pointer hover:border-b-4 border-teal-500"></FaTwitter>
            <FaLinkedin className=" m-1 p-1 cursor-pointer hover:border-b-4 border-teal-500"></FaLinkedin>
            <FaInstagramSquare className=" m-1 p-1 cursor-pointer hover:border-b-4 border-teal-500"></FaInstagramSquare>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
