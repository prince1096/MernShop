import React, { useEffect, useState } from "react";
import AddProduct from "../components/AddProduct";
import SummaryApi from "../common";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    const responseData = await axios.get(SummaryApi.allProduct.url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    setAllProduct(responseData?.data?.data || []);
    console.log(responseData.data, "responseData");
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Products</h2>
        <button
          className="border-2 bg-gray-400 border-black hover:bg-black hover:text-white  transition-all py-2 px-4 rounded-full"
          onClick={() => setOpenAddProduct(true)}
        >
          Add Product
        </button>
      </div>

      <div className="flex items-center gap-5 py-4">
        {allProduct?.map((product, index) => {
          return <ProductCard data={product} key={index} />;
        })}
      </div>

      {/* Upload product component */}
      {openAddProduct && (
        <AddProduct onClose={() => setOpenAddProduct(false)} />
      )}
    </div>
  );
};

export default Products;
