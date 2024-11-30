import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import EditProduct from "./EditProduct";
import displayINRCurrency from "../helpers/displayCurrency";

const ProductCard = ({ data, fetchAllProduct }) => {
  const [editProduct, setEditProduct] = useState(false);

  const shortName = (names) => {
    if (names.length <= 15) {
      return names; // No shortening needed
    }
    return names.slice(0, 15) + "...";
  };

  return (
    <>
      <div className="bg-white p-4 rounded h-[280px] ">
        <div className="w-40 ">
          <img
            src={data?.productImage[0]}
            alt="productImage"
            height={120}
            width={120}
            className="w-fit mx-auto"
          />
          <h1>{shortName(data?.productName)}</h1>

          <div>
            <p className="font-semibold">
              {displayINRCurrency(data?.sellingPrice)}
            </p>
            <div
              className="w-fit ml-auto p-2 bg-green-100 cursor-pointer hover:bg-green-600 rounded-full hover:text-white"
              onClick={() => setEditProduct(true)}
            >
              <MdModeEditOutline />
            </div>
          </div>
        </div>

        {editProduct && (
          <EditProduct
            data={data}
            onClose={() => setEditProduct(false)}
            fetchAllProduct={fetchAllProduct}
          />
        )}
      </div>
    </>
  );
};

export default ProductCard;
