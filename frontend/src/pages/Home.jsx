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
      <HomeCardProduct category={"watches"} heading={"Top's Airpodes"} />
      <VerticalCardProduct category={"mobiles"} heading={"Top Mobiles"} />
      <VerticalCardProduct category={"mouse"} heading={"Top Mobiles"} />
      <VerticalCardProduct category={"televisions"} heading={"Top Mobiles"} />
      <VerticalCardProduct category={"camera"} heading={"Top Mobiles"} />
      <VerticalCardProduct category={"earphones"} heading={"Top Mobiles"} />
      <VerticalCardProduct category={"speakers"} heading={"Top Mobiles"} />
    </div>
  );
};

export default HomePage;
