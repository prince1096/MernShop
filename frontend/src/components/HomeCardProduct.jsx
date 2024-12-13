import React, { useState } from "react";

const HomeCardProduct = ({ category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingList = new Array(13).fill(null);

  return (
    <div>
      HomeCardProduct
      <div className="w-full max-w-[300px]"></div>
    </div>
  );
};

export default HomeCardProduct;
