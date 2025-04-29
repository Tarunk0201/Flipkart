import React from "react";
import login from "../../assets/login_img.png";

export default function Login() {
  return (
    <>
      <div className="bg-gray-100 mb-10">
        <div className="flex justify-around pl-20 pr-20 m-auto pt-2 pb-2 bg-white shadow-xs">
          <p className="from-neutral-50">Electronics</p>
          <p className="from-neutral-50">TV & Appliances</p>
          <p className="from-neutral-50">Men</p>
          <p className="from-neutral-50">Women</p>
          <p className="from-neutral-50">Baby & kids</p>
          <p className="from-neutral-50">Home & furniture</p>
          <p className="from-neutral-50">Sports, books & more</p>
          <p className="from-neutral-50">Flights</p>
          <p className="from-neutral-50">Offer Zone</p>
        </div>
        <div className="flex align-middle justify-center ">
          <div className="flex mt-5 shadow-xl/20">
            <div className="grid align-top grid-rows-7 gap-5 bg-blue-500 h-130 w-80 p-8 ">
              <h3 className="self-start text-[28px] font-medium text-white">
                Login
              </h3>
              <p className=" text-white text-[18px]">
                Get access to your Orders, Wishlist and Recommendations
              </p>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img className="self-end" src={login} />
            </div>
            <div className="bg-white shadow-xl/20">
              <div className=" h-130 w-140 p-12 grid align-top grid-rows-7">
                <input
                  className="w-full h-10 border-b-1 border-gray-600"
                  type="email"
                  placeholder="Example@email.com"
                />
                <p className="text-[12px] text-gray-400">
                  By continuing, you agree to Flipkart's
                  <a className="text-blue-500 cursor-pointer"> Terms of Use</a>
                  and
                  <a className="text-blue-500 cursor-pointer">Privacy Policy</a>
                  .
                </p>
                <button className="text-center text-white w-full bg-orange-500 h-10 rounded-xs ">
                  Request Otp
                </button>
                <span></span>
                <span></span>
                <span></span>
                <button className="text-center w-full text-blue-500 h-10 rounded-xs mt-3 ">
                  New to Flipkart? Creat an Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
