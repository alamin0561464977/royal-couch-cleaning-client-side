import React from "react";
import { Carousel } from "react-carousel-minimal";

const Carousela = () => {
  const data = [
    {
      image:
        "https://www.anitashousekeeping.com/wp-content/uploads/2023/02/woman-in-red-long-sleeve-shirt-and-blue-denim-jeans-standing-beside-gray-couch.jpeg",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/60df176e00e2475584806208/1629134995383-PWL63M0TFUHWUZ6PQL2F/carpet+cleaners+lakeville+mn.png",
    },
    {
      image:
        "https://content.jdmagicbox.com/comp/jaipur/p1/0141px141.x141.230116161810.k2p1/catalogue/divyanshi-enterprises-housekeeping-service-pratap-nagar-jaipur-housekeeping-services-b7rzcd6j1b.jpg",
    },
    {
      image:
        "https://scrubnbubbles.com/wp-content/uploads/2022/05/cleaning-service.jpeg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJu62Upv78OiLsqgMTauEP6ZMEUen7EbEJb4lQaQxzcZssYFWFmVer08fZj47j-Dqi9l4&usqp=CAU",
    },
    // {
    //   image:
    //     "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    //   caption: "San Francisco",
    // },
    // {
    //   image:
    //     "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    //   caption: "ROYAL TOUCH CLEANING SERVICE COMPANY",
    // },
    // {
    //   image:
    //     "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    //   caption: "ROYAL TOUCH CLEANING SERVICE COMPANY",
    // },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div>
      <div className=" w-full" style={{ textAlign: "center" }}>
        <div
          className=" w-full"
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            className=" w-full"
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousela;
