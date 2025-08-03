import React from "react";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import pic4 from "./images/pic4.png";
import pic5 from "./images/pic4.png";


const images = [
pic1,
pic2,
pic3,
pic4,
pic5
];

const repeatedImages = Array(20).fill(images).flat();

const FilmstripGallery = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[95%] h-[60px] bg-black z-10 overflow-hidden rounded-md">
        <div className="flex w-[200%] space-x-12 px-8">
          {Array(30).fill(0).map((_, i) => (
            <div key={i} className="w-7 h-11 bg-[#f5a400] rounded-md"></div>
          ))}
        </div>
      </div>

      <div className="flex overflow-hidden w-full mt-[60px]">
        <div className="flex animate-faster-scroll-right space-x-8">
          {repeatedImages.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-[550px] h-[400px] object-cover rounded-xl"
              alt={`Member ${i % 5 + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] h-[190px] bg-black z-10 overflow-hidden rounded-md">
        <div className="flex w-[200%] space-x-12 px-8 items-end">
          {Array(30).fill(0).map((_, i) => (
            <div key={i} className="w-7 h-11 bg-[#f5a400] rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmstripGallery;
