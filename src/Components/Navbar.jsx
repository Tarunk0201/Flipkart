import React from "react";
import logo from "../assets/logo.svg";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import search from "../assets/search.svg";

export default function Navbar() {
  return (
    <>
      <section>
        <div className="flex justify-between pt-1  h-13 bg-white">
          <h3 className="basis-64 pl-10 pt-2 h-13 font-bold text-3xl antialiased tracking-wide">
            <img src={logo} />
          </h3>
          <div className="w-7 pt-2 flex rounded-xl h-11 p-2 basis-180 mr-3 bg-sky-100">
            <img className="w-5 pl-1" src={search} />
            <input
              className="w-full h-full"
              type="text"
              placeholder="  Search"
            />
          </div>

          <div className="flex justify-between gap-9 h-11 basis-64 pr-10 text-xl">
            <a className="w-24  color flex justify-around ">
              <div className="pt-2.5">
                <CgProfile />
              </div>
              <span className="pt-1">Log in</span>
            </a>
            <a className="w-24  color flex justify-around ">
              <div className="pt-2.5">
                <MdOutlineShoppingCart />
              </div>
              <span className="pt-1">Cart</span>
            </a>
            <a className="w-45  color flex justify-around ">
              <div className="pt-2.5">
                <AiOutlineShop />
              </div>
              <span className="pt-1">Become a Seller</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
