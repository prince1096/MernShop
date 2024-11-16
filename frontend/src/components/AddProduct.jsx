import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import productCategory from "../helpers/productCategory";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddProduct = ({ onClose }) => {
  const [productData, setProductData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    selling: "",
  });

  const [addImage, setAddImage] = useState("");

  const changeHandler = () => {};
  const addImageHandler = (e) => {
    const file = e.target.files[0];
    setAddImage(file.name);
  };

  return (
    <div
      className="fixed w-full h-full bg-slate-200
       bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center"
    >
      <div
        className="
      bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden"
      >
        <div className="flex justify-between pb-3 ">
          <h2 className="font-bold text-lg ">Add Product </h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-3xl cursor-pointer"
            onClick={onClose}
          >
            <MdOutlineClose />
          </div>
        </div>

        <form className="grid p-4 gap-2 overflow-y-scroll h-full pb-5 ">
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

          <div className="flex justify-between items-center">
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
              className="p-2 bg-slate-100 border rounded m-1"
            >
              {productCategory?.map((el, index) => {
                return (
                  <option value={el.value} key={el.value + index}>
                    {el.label}
                  </option>
                );
              })}
            </select>
          </div>

          <label htmlFor="productImage" className="mt-1 ml-1">
            Product Image
          </label>
          <label htmlFor="uploadImageInput">
            <div className="p-2 bg-slate-100 border rounded h-48 w-full flex justify-center items-center cursor-pointer">
              <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                <FaCloudUploadAlt className="text-3xl" />
                <p className="text-sm">Upload Product Image</p>
                <input
                  type="file"
                  id="uploadImageInput"
                  className="hidden"
                  onChange={addImageHandler}
                />
              </div>
            </div>
          </label>

          <div>
            <img
              src=""
              alt=""
              width={100}
              height={100}
              className="bg-slate-100 border"
            />
          </div>

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
