import React, { useState } from "react";
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

  console.log(params);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
