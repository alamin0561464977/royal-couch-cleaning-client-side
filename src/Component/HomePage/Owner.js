import React from "react";
import owner from "../../images/WhatsApp Image 2023-06-04 at 15.02.52.jpg";

const Owner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={owner} className=" rounded-2xl shadow-2xl" />
          <div>
            <small className=" text-sm font-bold">Owner</small>
            <h1 className="text-5xl font-bold">
              FALEH AWADH OWAYED ALRASHEEDI
            </h1>
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

export default Owner;
