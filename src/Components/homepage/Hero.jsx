import React from "react";
import Carousel from "./Carousel";
import Hero1 from "../../assets/hero-1.jpg";
import Hero2 from "../../assets/hero-2.jpg";
import Hero3 from "../../assets/hero-3.jpg";
import Category from "../../assets/data/Category";

const Hero = () => {
  let slides = [Hero1, Hero2, Hero3];

  return (
    <>
      <div className=" bg-gray-200 h-100% pl-4 pt-2 pr-4">
        <div className="flex justify-around bg-white pl-5 pr-5">
          {Category.map((Products, index) => (
            <div
              key={index}
              className="grid grid-rows-1 w-24 rounded-2xl bg-white"
            >
              <img
                className="h-25 rounded-2xl m-auto"
                src={Products.image}
                alt={Products.name}
              />
              <p className="text-center m-1 text-xs">{Products.name}</p>
            </div>
          ))}
        </div>
        <div className="w-{90%} m-auto pt-3 pb-3">
          <Carousel slides={slides} />
        </div>
      </div>
    </>
  );
};

export default Hero;
