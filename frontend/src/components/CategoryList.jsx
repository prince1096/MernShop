import React, { useEffect, useState } from "react";
import axios from "axios";
import SummaryApi from "../common";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    const responseData = await axios.get(SummaryApi.getProductByCategory.url);

    setCategoryProduct(responseData.data.data);
    console.log(responseData.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex items-center gap-4 justify-between overflow-scroll scrollbar-none">
        {categoryProduct.map((product, index) => {
          return (
            <Link
              to={"/product-category/" + product?.category}
              className="cursor-pointer"
            >
              <div className=" w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center">
                <img
                  src={product?.productImage[0]}
                  alt={product?.category}
                  className="h-full object-scale-down mix-blend-multiply"
                />
              </div>
              <p className="text-center text-sm md:text-base capitalize">
                {product?.category}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
