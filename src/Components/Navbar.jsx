import React from "react";
import logo from "../assets/logo.svg";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import search from "../assets/search.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <section>
        <div className="flex justify-center gap-4 pt-1  h-13 bg-white">
          <h3 className="basis-64 pt-2 h-13 font-bold text-3xl antialiased tracking-wide cursor-pointer">
            <Link to="/">
              <img src={logo} />
            </Link>
          </h3>
          <div className="pt-2 flex rounded-xl h-10 p-2 basis-180 bg-sky-100">
            <img className="w-5 pl-1 border-none" src={search} />
            <input
              className="w-full h-full"
              type="text"
              placeholder="  Search"
            />
          </div>

          <div className="flex justify-between gap-3 h-10 basis-64 pt-1 text-[18px]">
            <div className="w-20 cursor-pointer flex justify-center gap-1">
              <div className="pt-2">
                <CgProfile />
              </div>
              <Link to="/Login">
                <span className="pt-1">Log in</span>
              </Link>
            </div>
            <a className="w-20 cursor-pointer flex justify-center gap-1">
              <div className="pt-2">
                <MdOutlineShoppingCart />
              </div>
              <span className="pt-1">Cart</span>
            </a>
            <a className="w-45 cursor-pointer flex justify-center gap-1 ">
              <div className="pt-2">
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
