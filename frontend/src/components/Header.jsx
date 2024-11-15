import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [adminDisplay, setAdminDisplay] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const responseData = await axios.get(SummaryApi.logout.url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    if (responseData.data.success) {
      toast.success(responseData.data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (responseData.data.error) {
      toast.error(responseData.data.error);
    }
  };

  return (
    <header className="h-22 md:h-16 shadow-md bg-white">
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
            <div className="relative ">
              {user?._id && (
                <div
                  className="text-xl md:text-2xl lg:text-3xl cursor-pointer"
                  onClick={() => setAdminDisplay((prev) => !prev)}
                >
                  {user?.profilePic ? (
                    <img
                      src={user?.profilePic}
                      alt={user?.name}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <FaRegCircleUser />
                  )}
                </div>
              )}

              {adminDisplay && (
                <div className="absolute bg-white hidden md:block  top-5 md:top-10  -left-10 h-fit p-2 shadow-lg rounded ">
                  <nav>
                    <div className="w-full">
                      <Link
                        to={"/"}
                        className="whitespace-nowrap w-full text-center hover:bg-slate-100 p-2"
                        onClick={() => setAdminDisplay((prev) => !prev)}
                      >
                        Profile
                      </Link>
                    </div>

                    {user?.role === "ADMIN" && (
                      <div className="mt-1">
                        <Link
                          to={"/admin-panel/products"}
                          className="whitespace-nowrap hover:bg-slate-100 p-2"
                          onClick={() => setAdminDisplay((prev) => !prev)}
                        >
                          Admin Panel
                        </Link>
                      </div>
                    )}
                  </nav>
                </div>
              )}
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
              {user?._id ? (
                <button
                  onClick={handleLogout}
                  className="
                px-2 md:px-3 py-0.5 md:py-1 rounded-full text-white bg-black md:font-medium hover:bg-slate-500 hover:font-semibold hover:text-lg
                "
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-white bg-black md:font-medium hover:bg-slate-500 hover:font-semibold hover:text-lg"
                >
                  Login
                </Link>
              )}
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
