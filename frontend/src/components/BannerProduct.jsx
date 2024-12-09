import React from "react";

import image1 from "../assest/assest/banner/img1.webp";
import image2 from "../assest/assest/banner/img2.webp";
import image1Mobile from "../assest/assest/banner/img1_mobile.jpg";

const BannerProduct = () => {
  return (
    <div className="container mx-auto  px-4 rounded overflow-hidden">
      <div className="h-72 w-full bg-slate-200">
        <div className="w-full h-full">
          <img src={image1} alt="image1" />
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
