import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <>
      <div className="overflow-hidden relative  rounded-2xl bg-gray-200 shadow-2xl">
        <div
          className="flex transition ease-out duration-400"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s) => {
            return <img src={s} />;
          })}
        </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex px-3 text-3xl ">
          <button className="cursor-pointer" onClick={previousSlide}>
            <IoIosArrowBack />
          </button>
          <button className="cursor-pointer" onClick={nextSlide}>
            <IoIosArrowForward />
          </button>
        </div>

        <div className="absolute bottom-0 py-3 flex justify-center gap-2 w-full">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-3 h-3 cursor-pointer  ${
                  i == current ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
