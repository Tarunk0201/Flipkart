import React from "react";
import img1 from "../assets/Products/product-img-1.jpg";

export default function Hero() {
  return (
    <>
      <div className="bg-gray-100 h-100% w-100%">
        <div className="flex justify-between ml-20 mr-20 pt-5">
          <div className="grid grid-rows-1 border-2 rounded-2xl ">
            <img className="h-35 rounded-2xl" src={img1} alt="Product img 1" />
            <p className="text-center bg-amber-200 rounded-2xl relative">
              Name
            </p>
          </div>
          <div className="grid grid-rows-1 border-1">
            <img className="h-35" src={img1} alt="Product img 1" />
            <p className="text-center">Name</p>
          </div>
          <div className="grid grid-rows-1 border-1">
            <img className="h-35" src={img1} alt="Product img 1" />
            <p className="text-center">Name</p>
          </div>
          <div className="grid grid-rows-1 border-1">
            <img className="h-35" src={img1} alt="Product img 1" />
            <p className="text-center">Name</p>
          </div>
          <div className="grid grid-rows-1 border-1">
            <img className="h-35" src={img1} alt="Product img 1" />
            <p className="text-center">Name</p>
          </div>
        </div>
        <div>1 </div>
      </div>
    </>
  );
}
