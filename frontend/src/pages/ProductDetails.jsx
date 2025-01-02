import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SummaryApi from "../common";

const ProductDetails = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);

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
      console.log(response.data);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // console.log(params.id);
  // console.log(data);

  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <div className="min-h-[200px]">
        <div>
          <div className="h-96">
            {loading ? (
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {productImageListLoading.map((el, index) => {
                  return (
                    <div
                      className="h-20 w-20 bg-sky-200 rounded"
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
                        className="w-full h-full object-scale-down mix-blend-multiply"
                      />{" "}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;
