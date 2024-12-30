import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SummaryApi from "../common";

const ProductDetails = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPirce: "",
  });

  const fetchProductDetails = async () => {
    try {
      const response = await axios.post(
        SummaryApi.productDetails.url,
        {
          productId: params.id,
        },
        {
          headers: {
            "Content-Type": "application/json", // Consistent capitalization
          },
        }
      );

      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(params);
  console.log(data);

  useEffect(() => {
    fetchProductDetails();
  }, []);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
