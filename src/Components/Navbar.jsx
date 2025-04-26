import React from "react";
export default function Navbar() {
  return (
    <>
      <section>
        <div className="flex justify-between pt-1 h-13 bg-amber-200">
          <h3 className="basis-64 pl-10 pt-2 h-13 font-bold text-3xl antialiased tracking-wide">
            Navbar
          </h3>
          <input
            className="border-2 rounded-2xl w-xl h-11 p-2 basis-180 bg-amber-50"
            type="text"
            placeholder=" search"
          />
          <div className="flex justify-between gap-1 h-11 basis-64 pr-10">
            <button className="rounded-2xl w-24 font-bold bg-amber-400 color">
              Log in
            </button>
            <button className="rounded-2xl w-24 font-bold bg-amber-400 color">
              Cart
            </button>
            <button className="rounded-2xl w-37 font-bold bg-amber-400 color">
              Become a Seller
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
