import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import EditProduct from "./EditProduct";

const ProductCard = ({ data }) => {
  const [editProductData, setEditProductData] = useState(false);

  return (
    <>
      <div className="bg-white p-4 rounded">
        <img
          src={data?.productImage[0]}
          alt="productImage"
          height={120}
          width={120}
        />
        <h1>{data?.productName}</h1>
        <div className="w-fit ml-auto p-2 bg-green-100 cursor-pointer hover:bg-green-600 rounded-full hover:text-white">
          <MdModeEditOutline />
        </div>

        <EditProduct />
      </div>
    </>
  );
};

export default ProductCard;
