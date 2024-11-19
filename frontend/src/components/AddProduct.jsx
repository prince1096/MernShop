import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import productCategory from "../helpers/productCategory";
import { FaCloudUploadAlt } from "react-icons/fa";
import addImage from "../helpers/addImage";
import DisplayImage from "./DisplayImage";
import { MdDelete } from "react-icons/md";

const AddProduct = ({ onClose }) => {
  const [productData, setProductData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });

  const [activeImage, setActiveImage] = useState("");
  const [fullScreenImage, setFullScreenImage] = useState(false);
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setProductData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addImageHandler = async (e) => {
    const file = e.target.files[0];
    const uploadImageOnCloudinary = await addImage(file);
    setProductData((prev) => {
      return {
        ...prev,
        productImage: [...prev.productImage, uploadImageOnCloudinary.data.url],
      };
    });
    // console.log("UploadImage", uploadImageOnCloudinary.data.url);
  };

  const deleteImageHandler = async (index) => {
    const filteredImage = productData?.productImage?.filter(
      (ele, i) => i !== index
    );

    setProductData((prev) => {
      return {
        ...prev,
        productImage: [...filteredImage],
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
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

        <form
          className="grid p-4 gap-2 overflow-y-scroll h-full pb-5 "
          onSubmit={submitHandler}
        >
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
            <div>
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
            </div>

            <div>
              <label htmlFor="category" className="mt-1 ml-1">
                Category :
              </label>
              <select
                name="category"
                id="category"
                value={productData.category}
                className="p-2 bg-slate-100 border rounded m-1"
                onChange={changeHandler}
              >
                <option value="">Select Category</option>
                {productCategory?.map((el, index) => {
                  return (
                    <option value={el.value} key={el.value + index}>
                      {el.label}
                    </option>
                  );
                })}
              </select>
            </div>
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
            {productData?.productImage.length !== 0 ? (
              <div className="flex items-center gap-2">
                {productData?.productImage?.map((ele, index) => {
                  return (
                    <div className="relative group">
                      <img
                        src={ele}
                        alt="product"
                        width={100}
                        height={100}
                        className="bg-slate-100 border cursor-pointer"
                        key={index}
                        onClick={() => {
                          setFullScreenImage(true);
                          setActiveImage(ele);
                        }}
                      />
                      <div
                        className="absolute bottom-0 right-0 p-1 text-white bg-black rounded-full cursor-pointer hidden group-hover:block"
                        onClick={() => deleteImageHandler(index)}
                      >
                        <MdDelete />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>No Product Image Upload Some</p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <div>
              <label htmlFor="price" className="mt-1 ml-1">
                Price :{" "}
              </label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="enter price"
                value={productData.price}
                onChange={changeHandler}
                className="p-2 bg-slate-100 border rounded m-1"
              />
            </div>

            <div>
              <label htmlFor="sellingPrice" className="mt-1 ml-1">
                Selling Price :{" "}
              </label>
              <input
                type="number"
                id="sellingPrice"
                name="sellingPrice"
                placeholder="enter selling price"
                value={productData.sellingPricerice}
                onChange={changeHandler}
                className="p-2 bg-slate-100 border rounded m-1"
              />
            </div>
          </div>

          <label htmlFor="category" className="mt-1 ml-1">
            Description :{" "}
          </label>
          <textarea
            rows={3}
            type="text"
            id="description"
            name="description"
            placeholder="enter description"
            value={productData.description}
            onChange={changeHandler}
            className=" h-28 p-2 bg-slate-100 border rounded m-1 resize-none"
          />

          <button className="px-2 py-2 font-semibold bg-gray-500 text-white mb-10 hover:bg-gray-700">
            Add Product
          </button>
        </form>
      </div>

      {/* Display Image full Screen */}

      {fullScreenImage && (
        <DisplayImage
          imageUrl={activeImage}
          onClose={() => setFullScreenImage(false)}
        />
      )}
    </div>
  );
};

export default AddProduct;
