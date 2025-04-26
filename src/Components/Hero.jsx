import React from "react";
import img1 from "../assets/Products/product-img-1.jpg";

export default function Hero() {
  return (
    <>
      <div className="bg-gray-100 h-100% pl-25 pr-25">
        <div className="flex justify-between ml-10 mr-10 pt-5">
          <div className="grid grid-rows-1 border-2 rounded-2xl bg-white">
            <img className="h-35 rounded-2xl" src={img1} alt="Product img 1" />
            <p className="text-center bg-amber-300 rounded-2xl m-1">Name</p>
          </div>
          <div className="grid grid-rows-1 border-2 rounded-2xl bg-white">
            <img className="h-35 rounded-2xl" src={img1} alt="Product img 1" />
            <p className="text-center bg-amber-300 rounded-2xl m-1">Name</p>
          </div>
          <div className="grid grid-rows-1 border-2 rounded-2xl bg-white">
            <img className="h-35 rounded-2xl" src={img1} alt="Product img 1" />
            <p className="text-center bg-amber-300 rounded-2xl m-1">Name</p>
          </div>
          <div className="grid grid-rows-1 border-2 rounded-2xl bg-white">
            <img className="h-35 rounded-2xl" src={img1} alt="Product img 1" />
            <p className="text-center bg-amber-300 rounded-2xl m-1">Name</p>
          </div>
          <div className="grid grid-rows-1 border-2 rounded-2xl bg-white">
            <img className="h-35 rounded-2xl" src={img1} alt="Product img 1" />
            <p className="text-center bg-amber-300 rounded-2xl m-1">Name</p>
          </div>
          <div className="grid grid-rows-1 border-2 rounded-2xl bg-white">
            <img className="h-35 rounded-2xl" src={img1} alt="Product img 1" />
            <p className="text-center bg-amber-300 rounded-2xl m-1">Name</p>
          </div>
        </div>
        <div>1 </div>
      </div>
    </>
  );
}
