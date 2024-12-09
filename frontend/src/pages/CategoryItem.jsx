import React from "react";
import { useParams } from "react-router-dom";

const CategoryItem = () => {
  const params = useParams();

  return (
    <div>
      CategoryItem
      {params.categoryName}
    </div>
  );
};

export default CategoryItem;
