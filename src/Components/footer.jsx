import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { GiFallingStar } from "react-icons/gi";
import { PiGiftBold } from "react-icons/pi";
import { BsQuestionCircle } from "react-icons/bs";
import {
  PiFacebookLogoBold,
  PiYoutubeLogo,
  PiInstagramLogo,
} from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import payment from "../assets/payment-method.svg";

export default function Footer() {
  return (
    <>
      <div className=" bg-zinc-800 text-white">
        <div className="flex justify-around bg-zinc-800 text-white pt-15 pb-8">
          <div>
            <li className="list-none">
              <ul>
                <a className="text-[14px] text-zinc-500  pb-3">ABOUT US</a>
              </ul>
              <ul>
                <a className="text-[12px]">Contect Us</a>
              </ul>
              <ul>
                <a className="text-[12px]">About Us</a>
              </ul>
              <ul>
                <a className="text-[12px]">Careers</a>
              </ul>
              <ul>
                <a className="text-[12px]">Flipkart Store</a>
              </ul>
              <ul>
                <a className="text-[12px]">Press</a>
              </ul>
              <ul>
                <a className="text-[12px]">Corporate Information</a>
              </ul>
            </li>
          </div>
          <div>
            <li className="list-none">
              <ul>
                <a className="text-[14px] text-zinc-500  pb-3">
                  GROUP COMPANIES
                </a>
              </ul>
              <ul>
                <a className="text-[12px]">Myntra</a>
              </ul>
              <ul>
                <a className="text-[12px]">Cleartrip</a>
              </ul>
              <ul>
                <a className="text-[12px]">Shopsy</a>
              </ul>
            </li>
          </div>
          <div>
            <li className="list-none">
              <ul>
                <a className="text-[14px] text-zinc-500  pb-3">HELP</a>
              </ul>
              <ul>
                <a className="text-[12px]">Payments</a>
              </ul>
              <ul>
                <a className="text-[12px]">Shipping</a>
              </ul>
              <ul>
                <a className="text-[12px]">Cancellation & Return</a>
              </ul>
              <ul>
                <a className="text-[12px]">F & Q</a>
              </ul>
            </li>
          </div>
          <div>
            <li className="list-none">
              <ul>
                <a className="text-[14px] text-zinc-500  pb-3">
                  COMPANEY POLICY
                </a>
              </ul>
              <ul>
                <a className="text-[12px]">Cancelletion & Return</a>
              </ul>
              <ul>
                <a className="text-[12px]">Terms of Us</a>
              </ul>
              <ul>
                <a className="text-[12px]">Security</a>
              </ul>
              <ul>
                <a className="text-[12px]">Privacy</a>
              </ul>
              <ul>
                <a className="text-[12px]">Sitemap</a>
              </ul>
              <ul>
                <a className="text-[12px]">Grievance Redressal</a>
              </ul>
              <ul>
                <a className="text-[12px]">EPR Compliance</a>
              </ul>
            </li>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="border-l-1 pl-10">
              <li className="list-none">
                <ul>
                  <a className="text-[14px] text-zinc-500 ">MAIL US</a>
                </ul>
                <ul>
                  <p className="text-[12px]">
                    Flipkart Internet Privet Limited,
                  </p>
                </ul>
                <ul>
                  <p className="text-[12px]">Building Alyssa, Begonia &</p>
                </ul>
                <ul>
                  <p className="text-[12px]">Clove Embassy Texh Village,</p>
                </ul>
                <ul>
                  <p className="text-[12px]">
                    Outer Ring Road, Devarabisanhill Village,
                  </p>
                </ul>
                <ul>
                  <p className="text-[12px]">Bengaluru, 560103,</p>
                </ul>
                <ul>
                  <p className="text-[12px]">Karnataka, India</p>
                </ul>
              </li>
            </div>

            <div>
              <li className="list-none">
                <ul>
                  <a className="text-[14px] text-zinc-500  pb-3">
                    Registered Office Address:
                  </a>
                </ul>
                <ul>
                  <p className="text-[12px]">
                    Flipkart Internet Private Limited,{" "}
                  </p>
                </ul>
                <ul>
                  <p className="text-[12px]">Buildings Alyssa, Begonia &</p>
                </ul>
                <ul>
                  <p className="text-[12px]"> Clove Embassy Tech Village,</p>
                </ul>
                <ul>
                  <p className="text-[12px]">
                    Outer Ring Road, Devarabeesanahalli Village,
                  </p>
                </ul>
                <ul>
                  <p className="text-[12px]">Bengaluru, 560103,</p>
                </ul>
                <ul>
                  <p className="text-[12px]">Karnataka, India</p>
                </ul>
                <ul>
                  <p className="text-[12px]">CIN : U51109KA2012PTC066107 </p>
                </ul>
                <ul>
                  <p className="text-[12px]">
                    Telephone:
                    <a className="text-blue-500 cursor-pointer">
                      {" "}
                      044-45614700{" "}
                    </a>
                    /
                    <a className="text-blue-500 cursor-pointer">
                      {" "}
                      044-67415800
                    </a>
                  </p>
                </ul>
              </li>
            </div>

            <div className="pl-10">
              <ul className="text-[14px] text-zinc-500  pb-3">Social:</ul>
              <li className="list-none flex gap-2">
                <ul className="text-3xl">
                  <PiFacebookLogoBold />
                </ul>
                <ul className="text-3xl">
                  <RiTwitterXFill />
                </ul>
                <ul className="text-3xl">
                  <PiYoutubeLogo />
                </ul>
                <ul className="text-3xl">
                  <PiInstagramLogo />
                </ul>
              </li>
            </div>
          </div>
        </div>
        <div className="flex justify-around pb-3 border-t-1 pt-3">
          <div className="flex gap-2">
            <div className="pt-1 text-yellow-300">
              <AiOutlineShop />
            </div>
            <p>Become A Seller</p>
          </div>
          <div className="flex gap-2">
            <div className="pt-1 text-yellow-300">
              <GiFallingStar />
            </div>
            <p>Advertise</p>
          </div>
          <div className="flex gap-2">
            <div className="pt-1 text-yellow-300">
              <PiGiftBold />
            </div>
            <p>Gift Card</p>
          </div>
          <div className="flex gap-2">
            <div className="pt-1 text-yellow-300">
              <BsQuestionCircle />
            </div>
            <p>Help Center</p>
          </div>
          <div>
            <p>© 2007-2025 Flipkart.com</p>
          </div>
          <div>
            <img src={payment} />
          </div>
        </div>
      </div>
    </>
  );
}
