import React from "react";
import AutoPlay from "./AutoPlay";
import Flight from "../assets/flight.jpg";

export default function Bestof() {
  return (
    <>
      <div className="relative overflow-hidden pl-4 pt-2 pr-4 pb-2 bg-gray-100">
        <h2 className="font-bold text-2xl">Best seller</h2>
        <div className="flex bg-white">
          <div className="w-6/7">
            <AutoPlay />
          </div>
          <div className="w-1/7 ">
            <img className="h-158px" src={Flight} />
          </div>
        </div>
      </div>
    </>
  );
}
