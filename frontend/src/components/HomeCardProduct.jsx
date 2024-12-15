import React, { useState } from "react";

const HomeCardProduct = ({ category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingList = new Array(13).fill(null);

  return (
    <div className="container mx-auto px-4 my-6">
      HomeCardProduct
      <div className="w-full max-w-[300px]">Product</div>
    </div>
  );
};

export default HomeCardProduct;
