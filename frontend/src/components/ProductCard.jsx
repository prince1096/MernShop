import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import EditProduct from "./EditProduct";

const ProductCard = ({ data, fetchAllProduct }) => {
  const [editProduct, setEditProduct] = useState(false);

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
        <div
          className="w-fit ml-auto p-2 bg-green-100 cursor-pointer hover:bg-green-600 rounded-full hover:text-white"
          onClick={() => setEditProduct(true)}
        >
          <MdModeEditOutline />
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
