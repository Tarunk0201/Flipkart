import React from "react";
import Products from "../assets/data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {Products.map((Products, index) => (
            <div key={index} className="grid grid-cols-1 justify-center">
              <img src={Products.image} alt="..." />
              <p className="text-left text-xs pl-10">{Products.name}</p>
              <h3 className="text-left font-bold pl-10">
                Starting from- {Products.price}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default AutoPlay;
