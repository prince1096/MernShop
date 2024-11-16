import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import productCategory from "../helpers/productCategory";

const AddProduct = ({ onClose }) => {
  const [productData, setProductData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: "",
    description: "",
    price: "",
    selling: "",
  });

  const changeHandler = () => {};

  return (
    <div
      className="fixed w-full h-full bg-slate-200
       bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center"
    >
      <div
        className="
      bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%]"
      >
        <div className="flex justify-between ">
          <h2 className="font-bold text-lg ">Add Product </h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-3xl cursor-pointer"
            onClick={onClose}
          >
            <MdOutlineClose />
          </div>
        </div>

        <form className="grid p-4">
          <label htmlFor="productName" className="mt-1 ml-1">
            Product Name :{" "}
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="enter product name"
            value={productData.productName}
            onChange={changeHandler}
            className="p-2 bg-slate-100 border rounded m-1"
          />

          <label htmlFor="brandName" className="mt-1 ml-1">
            Brand Name :{" "}
          </label>
          <input
            type="text"
            id="brandName"
            name="brandName"
            placeholder="enter brand name"
            value={productData.brandName}
            onChange={changeHandler}
            className="p-2 bg-slate-100 border rounded m-1"
          />

          <label htmlFor="category" className="mt-1 ml-1">
            Category :
          </label>
          <select
            name="category"
            id="category"
            value={productData.category}
            className="m-1 mb-2"
          >
            {productCategory?.map((el, index) => {
              return (
                <option value={el.value} key={el.value + index}>
                  {el.label}
                </option>
              );
            })}
          </select>

          <label htmlFor="category" className="mt-1 ml-1">
            Description :{" "}
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="enter description"
            value={productData.description}
            onChange={changeHandler}
            className="p-2 bg-slate-100 border rounded m-1"
          />

          <label htmlFor="productName" className="mt-1 ml-1">
            Product Name :{" "}
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="enter product name"
            value={productData.productName}
            onChange={changeHandler}
            className="p-2 bg-slate-100 border rounded m-1"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
