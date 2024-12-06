import React, { useEffect, useState } from "react";
import axios from "axios";
import SummaryApi from "../common";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    const responseData = await axios.get(SummaryApi.getProductByCategory.url);

    // const allProduct = responseData.data.data.flat();

    setCategoryProduct(responseData.data.data);
    console.log(responseData.data.data);
    // console.log(allProduct);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  //   console.log(categoryProduct);

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex items-center">
        {categoryProduct.map((product, index) => {
          return (
            <div className="p-2">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src={product?.productImage[0]}
                  alt={product?.category}
                  className="h-full object-fill"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
