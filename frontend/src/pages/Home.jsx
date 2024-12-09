import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";

const HomePage = () => {
  return (
    <div>
      <h2>Product By Category</h2>
      HomePage
      <CategoryList />
      <BannerProduct />
    </div>
  );
};

export default HomePage;
