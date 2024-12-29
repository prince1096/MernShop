import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: 0,
    sellingPirce: 0,
  });

  const fetchProduct = async () => {
    try {
      // const productData = await
    } catch (error) {
      console.log(error);
    }
  };

  console.log(params);
  console.log(data);

  useEffect(() => {
    fetchProduct();
  }, []);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
