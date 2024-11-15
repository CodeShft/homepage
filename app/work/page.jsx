"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";

const photos = [
  { num: "", image: "/lokum1.jpg" },
  { num: "", image: "/lokum2.jpg" },
  { num: "", image: "/lokum3.jpg" },
  { num: "", image: "/lokum4.jpg" },
];

const Work = () => {
  const [photo, setPhoto] = useState(photos[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-10 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[15px]">
          {/* Left Section: Photo Details */}
          <div className="w-full xl:w-[40%] flex flex-col justify-center items-start order-2 xl:order-none">
            <div className="text-2xl font-bold mt-4">{photo.title}</div>
          </div>

          {/* Right Section: Image Slider */}
          <div className="w-full xl:w-[50%] flex justify-center items-center">
            {/* Adjust width and add margin to move slider to the left */}
            <div className="w-full xl:w-[100%] ml-[-55%]"> {/* Add negative margin to move the slider left */}
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                className="xl:h-[400px] mb-14 w-full"
                onSlideChange={(swiper) => setPhoto(photos[swiper.realIndex])}
              >
                {photos.map((photo, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="relative w-full h-[460px]">
                      <Image
                        src={photo.image} // Each photo's correct `image` property
                        layout="responsive" // Maintain aspect ratio of images
                        width={1200} // Increased the width to make the image bigger
                        height={800} // Increased the height to make the image bigger
                        className="object-cover"
                        alt={`Photo ${index + 1}`} // Alt text for each photo
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
