import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SummaryApi from "../common";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import displayINRCurrency from "../helpers/displayCurrency";

const ProductDetails = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPirce: "",
  });

  const productImageListLoading = new Array(4).fill(null);

  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        SummaryApi.productDetails.url,
        {
          productId: params.id,
        },
        {
          headers: {
            "Content-Type": "application/json", // Consistent capitalization
          },
        }
      );
      // console.log(response.data);
      setData(response.data.data);
      setActiveImage(response.data.data.productImage[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // console.log(params.id);
  // console.log(data);

  const handleMouseEnterProduct = (imageURL) => {
    setActiveImage(imageURL);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <div className="min-h-[200px] flex flex-col lg:flex-row ">
        <div className="h-96 flex  flex-col lg:flex-row-reverse gap-4">
          <div className=" h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200">
            <img
              src={activeImage}
              alt="img"
              className="h-full w-full object-scale-down mix-blend-multiply cursor-pointer"
            />
          </div>
          <div className="h-full">
            {loading ? (
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {productImageListLoading.map((el, index) => {
                  return (
                    <div
                      className="h-20 w-20 bg-sky-200 rounded animate-pulse"
                      key={"laoding" + index}
                    >
                      {" "}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {data?.productImage.map((imgURL) => {
                  return (
                    <div
                      className="h-20 w-20 bg-sky-200 rounded p-1"
                      key={imgURL}
                    >
                      <img
                        src={imgURL}
                        alt="images"
                        className="w-full h-full object-scale-down mix-blend-multiply cursor-pointer"
                        onMouseEnter={() => handleMouseEnterProduct(imgURL)}
                        onClick={() => handleMouseEnterProduct(imgURL)}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="bg-gray-200 text-gray-800 px-2 rounded-full  inline-block w-fit">
            {data?.brandName}
          </p>
          <h2 className="text-2xl lg:text-2xl font-medium">
            {data?.productName}
          </h2>
          <p className="capitalize text-slate-400">{data?.category}</p>

          <div className="text-black flex items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>

          <div className="flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1">
            <p className="text-black">
              {displayINRCurrency(data.sellingPirce)}
            </p>
            <p className="text-slate-400 line-through">
              {displayINRCurrency(data.price)}
            </p>
          </div>

          <div className="flex items-center gap-3 my-2">
            <button className="border-2 border-black  rounded px-3 py-1 min-w-[120px] text-black font-medium hover:bg-black hover:text-white">
              Buy
            </button>
            <button className="border-2 border-black  rounded px-3 py-1 min-w-[120px] text-white bg-black font-medium hover:bg-white hover:text-black">
              Add To Cart
            </button>
          </div>

          <div>
            <p className="">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
