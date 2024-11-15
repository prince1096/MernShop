import React from "react";
import UploadProduct from "../components/UploadProduct";

const Products = () => {
  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Products</h2>
        <button className="border-2 bg-gray-400 border-black hover:bg-black hover:text-white  transition-all py-2 px-4 rounded-full">
          Add Product
        </button>
      </div>

      {/* Upload product component */}
      <UploadProduct />
    </div>
  );
};

export default Products;
