import React, { useEffect, useRef, useState } from "react";
import fetchCategoryWiseProduct from "../helpers/fetchCategoryWiseProduct";
import displayINRCurrrency from "../helpers/displayCurrency";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import addToCart from "../helpers/addToCart";

const HomeCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);
  // console.log(category, typeof category);

  const [scroll, setScroll] = useState(0);
  const scrollElement = useRef();

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setLoading(false);

    setData(categoryProduct?.data);
  };

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };

  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 my-6 relative">
      <h2 className="text-2xl font-semibold py-2 ">{heading}</h2>
      <div
        className="flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all"
        ref={scrollElement}
      >
        <button
          onClick={scrollLeft}
          className="bg-white hidden md:block text-lg shadow-md rounded-full p-1 ml-4 absolute left-0 z-99"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={scrollRight}
          className="bg-white hidden md:block text-lg shadow-md rounded-full p-1 mr-4 absolute right-0 z-99"
        >
          <FaAngleRight />
        </button>

        {loading
          ? // <p>Loading...</p>
            loadingList?.map((product, index) => {
              return (
                <div className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex">
                  <div
                    className="bg-slate-200 h-full p-4
                          min-w-[120px] md:min-w-[145px] animate-pulse"
                  ></div>

                  <div className="px-4 py-2 w-full">
                    <div className="h-5 rounded bg-slate-300 animate-pulse w-3/4 mb-2"></div>

                    <div className="h-4 rounded bg-slate-300 animate-pulse w-1/2 mb-2"></div>

                    <div className="flex gap-2 justify-between text-sm mb-2">
                      <div className="h-4 rounded bg-slate-300 animate-pulse w-1/4"></div>
                      <div className="h-4 rounded bg-slate-300 animate-pulse w-1/4"></div>
                    </div>

                    <div className="h-8 rounded-full bg-slate-300 animate-pulse w-1/2 mt-5"></div>
                  </div>
                </div>
              );
            })
          : data?.map((product, index) => {
              return (
                <Link
                  to={"product/" + product?._id}
                  className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex"
                >
                  <div
                    className="bg-slate-200 h-full p-4
                min-w-[120px] md:min-w-[145px]"
                  >
                    {/* 
              //  hover:scale-110 transition-all
              
              */}
                    <img
                      src={product.productImage[0]}
                      alt="ok"
                      className="object-scale-down h-full"
                    />
                  </div>
                  <div className="px-4 py-2">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                      {product?.productName}
                    </h2>
                    <p className="capitalize text-slate-500">
                      {product?.category}
                    </p>
                    <div className="flex gap-2 justify-between text-sm ">
                      <p className="font-medium">
                        {displayINRCurrrency(product?.sellingPrice)}
                      </p>
                      <p className="text-slate-500 line-through">
                        {displayINRCurrrency(product?.price)}
                      </p>
                    </div>
                    <button
                      className="bg-black text-white hover:bg-gray-600 px-3 py-0.5 mt-7 rounded-full"
                      onClick={(e) => addToCart(e, product?._id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default HomeCardProduct;
