import React from "react";
import cartimg from "../../assets/cart.jpg";
import { Link } from "react-router-dom";
import Login from "../Login/login";

import { Routes, Route } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <div className="bg-gray-100 p-5">
        <div className="w-full bg-white flex justify-center pb-5 pt-5 shadow-2xl">
          <div className="grid gap-3">
            <img className="h-50" src={cartimg} />
            <h2 className="w-full text-center text-xl">Missing Cart items?</h2>
            <p className="w-full text-center text-xs">
              login to see items you added previously
            </p>
            <Link to={Login}>
              <button className="text-center cursor-pointer text-white w-full bg-orange-500 h-10 rounded-xs">
                <Routes>
                  <Route exact path="/Login" element={<Login />} />
                </Routes>
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
