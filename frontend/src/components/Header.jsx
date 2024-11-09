import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 md:h-16 shadow-md bg-white">
      {/* Main Header */}
      <div className="p-2 md:p-4 ">
        {/* Top part consist logo, search and user profile */}
        <div className=" h-full container mx-auto flex items-center gap-2 sm:gap-4 px-4 justify-between mb-1 md:mb-0">
          <div className="">
            <Link to="/">Logo</Link>
          </div>

          <div className="hidden md:flex items-center border-2 border-black rounded-full px-2 py-0.5 w-[60%] sm:w-1/2 md:w-1/3 lg:w-1/4 focus-within:shadow-md ">
            <input
              type="text"
              placeholder="search product here..."
              className="w-full focus:outline-none"
            />
            <div className=" flex text-lg w-13  items-center justify-center">
              <IoIosSearch />
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 md:gap-4">
            <div className="text-lg md:text-xl lg:text-2xl cursor-pointer">
              <FaRegCircleUser />
            </div>
            <div className="text-lg md:text-xl lg:text-2xl relative">
              <span>
                <FaShoppingCart />
              </span>
              <div className="bg-black text-white w-5 h-5 rounded-full p-2 flex  items-center justify-center absolute -top-2 -right-3 ">
                <p className="text-sm  md:text-md font-semibold">0</p>
              </div>
            </div>

            <div className="ml-2">
              <Link
                to="/login"
                className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-white bg-black md:font-medium hover:bg-slate-500 hover:font-semibold hover:text-lg"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        {/* second part of header which consist only search btn which is only visible on mobile and hidden on large screens Remember to make one component of it later */}
        <div className="flex md:hidden items-center border-2 border-black rounded-full px-2 py-0.5 w-[60%] sm:w-1/2 md:w-1/3 lg:w-1/4 focus-within:shadow-md mx-auto gap-2 ">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full focus:outline-none"
          />
          <div className=" flex text-lg w-13  items-center justify-center">
            <IoIosSearch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
