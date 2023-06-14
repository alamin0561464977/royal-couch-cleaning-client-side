import React from "react";
import generalManager from "../../images/WhatsApp Image 2023-06-04 at 15.02.51.jpg";

const GeneralManager = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={generalManager} className=" rounded-2xl shadow-2xl" />
          <div>
            <small className=" text-sm font-bold">General Manager</small>
            <h1 className="text-5xl font-bold">Sahadat Hossin Redoy</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralManager;
