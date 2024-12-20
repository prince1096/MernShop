import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HomeCardProduct from "../components/HomeCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const HomePage = () => {
  return (
    <div>
      <h2>Product By Category</h2>
      HomePage
      <CategoryList />
      <BannerProduct />
      <HomeCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HomeCardProduct category={"earphones"} heading={"Top's Airpodes"} />
      {/* <HomeCardProduct category={"mobiles"} heading={"Top's Airpodes"} /> */}
      <VerticalCardProduct category={"mobiles"} heading={"Top Mobiles"} />
      {/* <HomeCardProduct category={"camera"} heading={"Top's Airpodes"} /> */}
      {/* <HomeCardProduct category={"mouse"} heading={"Top's Airpodes"} /> */}
    </div>
  );
};

export default HomePage;
