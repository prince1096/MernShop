import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

import image1 from "../assest/assest/banner/img1.webp";
import image2 from "../assest/assest/banner/img2.webp";
import image3 from "../assest/assest/banner/img3.jpg";
import image4 from "../assest/assest/banner/img4.jpg";
import image5 from "../assest/assest/banner/img5.webp";
import image1Mobile from "../assest/assest/banner/img1_mobile.jpg";
import image2Mobile from "../assest/assest/banner/img2_mobile.webp";
import image3Mobile from "../assest/assest/banner/img3_mobile.jpg";
import image4Mobile from "../assest/assest/banner/img4_mobile.jpg";
import image5Mobile from "../assest/assest/banner/img5_mobile.png";

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [image2, image1, image3, image4, image5];
  const mobileImages = [
    image2Mobile,
    image1Mobile,
    image3Mobile,
    image4Mobile,
    image5Mobile,
  ];

  // const nextImage = () => {
  //   setCurrentImage((prev) => {
  //     if (prev === desktopImages.length - 1) {
  //       return 0;
  //     }
  //     return prev + 1;
  //   });
  // };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % desktopImages.length);
  };

  // const prevImage = () => {
  //   setCurrentImage((prev) => {
  //     if (prev === 0) {
  //       return desktopImages.length - 1;
  //     }
  //     return prev - 1;
  //   });
  // };

  const prevImage = () => {
    setCurrentImage((prev) => {
      return (prev - 1 + desktopImages.length) % desktopImages.length;
    });
  };

  // Sliding Images

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto  px-4 rounded">
      <div className=" h-60 md:h-72 w-full bg-slate-200 relative">
        <div className="absolute z-10 h-full w-full flex items-center ">
          <div className="flex  w-full text-3xl justify-between">
            <button
              className="bg-white shadow-md rounded-full p-1"
              onClick={prevImage}
            >
              <FaAngleLeft />
            </button>
            <button
              className="bg-white shadow-md rounded-full p-1"
              onClick={nextImage}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
        {/* desktop and tablet version */}
        <div className=" hidden md:flex h-full w-full overflow-hidden ">
          {desktopImages?.map((imageURL, index) => {
            return (
              <div
                className="w-full h-full min-w-full min-h-full transition-all "
                key={imageURL}
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img src={imageURL} alt="image1" className="w-full h-full" />
              </div>
            );
          })}
        </div>

        {/* Mobile Version */}

        <div className="flex h-full w-full overflow-hidden md:hidden ">
          {mobileImages?.map((imageURL, index) => {
            return (
              <div
                className="w-full h-full min-w-full min-h-full transition-all "
                key={imageURL}
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img src={imageURL} alt="image1" className="w-full h-full" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
