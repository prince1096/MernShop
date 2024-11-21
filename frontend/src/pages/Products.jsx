import React, { useEffect, useState } from "react";
import AddProduct from "../components/AddProduct";
import SummaryApi from "../common";
import axios from "axios";

const Products = () => {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    console.log("Hello");
    const responseData = await axios.get(
      "http://localhost:8080/api/v1/admin/get-product",
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    // const responseData = await fetch(SummaryApi.allProduct.url);
    // const allData = await responseData.json();
    setAllProduct(responseData?.data?.data || []);
    console.log(responseData, "responseData");
    // console.log(allData, "responseData");
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

      <div>
        {allProduct?.map((product, index) => {
          return (
            <div>
              <img src={product[0]} alt="productImage" width={100} />
            </div>
          );
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
