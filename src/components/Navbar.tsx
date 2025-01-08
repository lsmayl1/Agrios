import React, { useState } from "react";
import logo from "../assets/images/navbar/logo.png";
import "../assets/css/index.css";
import { IoIosArrowDown } from "react-icons/io";
import twitterlogo from "../assets/images/navbar/Twitter.svg";
import { MdOutlineMenu } from "react-icons/md";

import instagramlogo from "../assets/images/navbar/Instagram.svg";
import facebooklogo from "../assets/images/navbar/FaceBook.svg";
import pinterestlogo from "../assets/images/navbar/Pinterest.svg";

import phonelogo from "../assets/images/navbar/Phone.svg";
import mailboxlogo from "../assets/images/navbar/mailbox.svg";
import locationpick from "../assets/images/navbar/locationpick.svg";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const DropdownController = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col ">
      <div className="h-[4px] w-full flex">
        <div className="bg-EEC044 w-full h-[4px] "></div>
        <div className="bg-C5CE38 w-full h-[4px] "></div>
        <div className="bg-4BAF47 w-full h-[4px] "></div>
      </div>
      <div className="container mt-[32px] h-auto flex max-xl:flex-col  items-center border border-red-500 border-1">
        <div className="flex justify-center items-center w-[270px] max-xl:py-[20px] ">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="flex justify-center items-center pl-[20px] max-lg:hidden">
          {/* social media  */}
          <div>
            <ul className="flex gap-[10px]">
              <li className="bg-bgMilk w-[40px] h-[40px] rounded-[20px] flex-wrap flex justify-center items-center ">
                <div className="">
                  <a href="#">
                    <img src={twitterlogo} alt="" />
                  </a>
                </div>
              </li>
              <li className="bg-bgMilk w-[40px] h-[40px] rounded-[20px] flex justify-center items-center ">
                <div className="logoback">
                  <a href="#">
                    {" "}
                    <img src={pinterestlogo} alt="" />
                  </a>
                </div>
              </li>
              <li className="bg-bgMilk w-[40px] h-[40px] rounded-[20px] flex justify-center items-center ">
                <div className="logoback">
                  <a href="#">
                    {" "}
                    <img src={facebooklogo} alt="" />
                  </a>
                </div>
              </li>
              <li className="bg-bgMilk w-[40px] h-[40px] rounded-[20px] flex justify-center items-center ">
                <div className="logoback">
                  <a href="#">
                    <img src={instagramlogo} alt="" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* contant Section */}
          <div>
            <div className="flex justify-center items-center ml-[30px]">
              <div className="flex justify-center items-center gap-[20px] w-[217px]">
                <div className="">
                  <img src={phonelogo} className="w-[30px] h-[30px]" alt="" />
                </div>
                <div className="w-[130px]">
                  <h5 className="font-manrope font-semibold  text-878680 text-[12px]">
                    Call anytime
                  </h5>

                  <h4 className="font-manrope font-bold  text-1F1E17 text-[14px]">
                    + 98 (000) - 9630
                  </h4>
                </div>
              </div>

              <div className="mx-[20px]">
                <div className="bg-E4E2D7 h-[70px] w-[1px]"></div>
              </div>

              <div className="flex justify-center items-center w-[235px]">
                <div className="contactlogo">
                  <img src={mailboxlogo} alt="" />
                </div>
                <div className="ml-[20px]">
                  <div className="contacttitle">
                    <h5 className="font-manrope font-semibold  text-878680 text-[12px]">
                      Send email
                    </h5>
                  </div>
                  <div className="number">
                    <h4 className="font-manrope font-bold  text-1F1E17 text-[14px]">
                      ambed@agrios.com
                    </h4>
                  </div>
                </div>
              </div>

              <div className="mx-[20px]">
                <div className="bg-E4E2D7 h-[70px] w-[1px]"></div>
              </div>
              <div className="flex justify-center items-center w-[216px]">
                <div className="contactlogo">
                  <img src={locationpick} alt="" />
                </div>
                <div className="ml-[20px]">
                  <div className="contacttitle">
                    <h5 className="font-manrope font-semibold  text-878680 text-[12px]">
                      380 St Kilda Road
                    </h5>
                  </div>
                  <div className="number">
                    <h4 className="font-manrope font-bold  text-1F1E17 text-[14px]">
                      Melbourne, Australia
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-headerbg w-full  releative h-[79px] bg-cover flex justify-center max-sm:justify-end items-center flex-wrap">
        <div className="max-sm:hidden ">
          <ul className="flex flex-wrap gap-[60px] max-lg:gap-[30px] max-md:gap-[15px] ">
            <li
              className="flex relative group coursor-pointer items-center gap-[10px]  max-lg:gap-[5px]
            font-manrope font-extrabold text-[16px] leading-[36px] text-1F1E17"
            >
              Home
              <div className="">
                <span className="cursor-pointer">
                  <IoIosArrowDown />
                </span>
                <ul className="hidden group-hover:block w-[100px] absolute bg-white shadow-lg rounded-[10px]">
                  <li className="p-2 border-b">
                    <a href="">Option 1</a>
                  </li>
                  <li className="p-2 border-b">
                    <a href="">1</a>
                  </li>
                  <li className="p-2 border-b">
                    <a href="">1</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex relative group coursor-pointer items-center gap-[10px] font-manrope font-extrabold text-[16px] leading-[36px] text-1F1E17">
              <a href="">About</a>
            </li>
            <li className="flex relative group coursor-pointer items-center gap-[10px] font-manrope font-extrabold text-[16px] leading-[36px] text-1F1E17 max-lg:gap-[5px]">
              Services
              <div className="">
                <span className="cursor-pointer">
                  <IoIosArrowDown />
                </span>
                <ul className="hidden group-hover:block w-[100px] absolute bg-white shadow-lg rounded-[10px]">
                  <li className="p-2 border-b">
                    <a href="">Option 1</a>
                  </li>
                  <li className="p-2 border-b">
                    <a href="">1</a>
                  </li>
                  <li className="p-2 border-b">
                    <a href="">1</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex relative group coursor-pointer items-center gap-[10px] font-manrope font-extrabold text-[16px] leading-[36px] text-1F1E17 max-lg:gap-[5px]">
              Projects
              <div className="">
                <span className="cursor-pointer">
                  <IoIosArrowDown />
                </span>
                <ul className="hidden group-hover:block w-[100px] absolute bg-white shadow-lg rounded-[10px]">
                  <li className="p-2 border-b">
                    <a href="">Option 1</a>
                  </li>
                  <li className="p-2 border-b">
                    <a href="">1</a>
                  </li>
                  <li className="p-2 border-b">
                    <a href="">1</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex relative group coursor-pointer items-center gap-[10px] font-manrope font-extrabold text-[16px] leading-[36px] text-1F1E17 max-lg:gap-[5px]">
              <a href="">News</a>

              <div className="">
                <span className="cursor-pointer">
                  <IoIosArrowDown />
                </span>
                <ul className="hidden group-hover:block w-[100px] absolute bg-white shadow-lg rounded-[10px]">
                  <li className="p-2 border-b">
                    <a href="">Option 1</a>
                  </li>
                  <li className="p-2 border-b">
                    <a href="">1</a>
                  </li>
                  <li className="p-2 border-b">
                    <a href="">1</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex relative group coursor-pointer items-center gap-[10px] font-manrope font-extrabold text-[16px] leading-[36px] text-1F1E17 max-lg:gap-[5px]">
              Shop
              <div className="">
                <span className="cursor-pointer">
                  <IoIosArrowDown />
                </span>
                <ul className="hidden group-hover:block w-[100px] absolute bg-white shadow-lg rounded-[10px]">
                  <li className="p-2 border-b">
                    <a href="">Option 1</a>
                  </li>
                  <li className="p-2 border-b">
                    <a href="">1</a>
                  </li>
                  <li className="p-2 border-b">
                    <a href="">1</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex relative group coursor-pointer items-center gap-[10px] font-manrope font-extrabold text-[16px] leading-[36px] text-1F1E17 max-lg:gap-[5px]">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="p-4 absolute">
          <MdOutlineMenu
            className="w-[40px] hidden max-sm:block"
            onClick={DropdownController}
          />
        </div>
        {isOpen ? (
          <div className="w-3/6 bg-white h-screen shadow-lg p-5 hidden max-sm:block">
            <ul className="flex flex-col  w-3/6 gap-[10px] ">
              <li
                className="flex flex-col coursor-pointer items-center
            font-manrope font-extrabold text-[16px] leading-[20px] text-1F1E17"
              >
                Home
                <div className="flex flex-col">
                  <ul className="flex flex-col text-center">
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className="flex flex-col coursor-pointer items-center
            font-manrope font-extrabold text-[16px] leading-[20px] text-1F1E17"
              >
                About
              </li>
              <li
                className="flex flex-col coursor-pointer items-center
            font-manrope font-extrabold text-[16px] leading-[20px] text-1F1E17"
              >
                Services
                <div className="flex flex-col">
                  <ul className="flex flex-col text-center">
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className="flex flex-col coursor-pointer items-center
            font-manrope font-extrabold text-[16px] leading-[20px] text-1F1E17"
              >
                Projects
                <div className="flex flex-col">
                  <ul className="flex flex-col text-center">
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className="flex flex-col coursor-pointer items-center
            font-manrope font-extrabold text-[16px] leading-[20px] text-1F1E17"
              >
                News
                <div className="flex flex-col">
                  <ul className="flex flex-col text-center">
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className="flex flex-col coursor-pointer items-center
            font-manrope font-extrabold text-[16px] leading-[20px] text-1F1E17"
              >
                Shop
                <div className="flex flex-col">
                  <ul className="flex flex-col text-center">
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="font-manrope text-878680">
                        1
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className="flex flex-col coursor-pointer items-center
            font-manrope font-extrabold text-[16px] leading-[20px] text-1F1E17"
              >
                Contact
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
