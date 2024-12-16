import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HomeCardProduct from "../components/HomeCardProduct";

const HomePage = () => {
  return (
    <div>
      <h2>Product By Category</h2>
      HomePage
      <CategoryList />
      <BannerProduct />
      <HomeCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
    </div>
  );
};

export default HomePage;
