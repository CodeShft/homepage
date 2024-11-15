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
      className="min-h-[80vh] flex flex-col justify-center py-10  xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[15px]"> {/* Reduced gap between the sections */}
          {/* Left Section: Photo Details */}
          <div className="w-full xl:w-[40%] flex flex-col justify-center items-start order-2 xl:order-none"> {/* Adjusted width */}
            <div>
              {/* Outline num */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {photo.num}
              </div>
            </div>
            {/* Title of the photo */}
            <div className="text-2xl font-bold mt-4">{photo.title}</div>
          </div>

          {/* Right Section: Image Slider */}
          <div className="w-full xl:w-[50%] flex justify-center items-center"> {/* Adjusted width to make the slider bigger */}
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              className="xl:h-[400px] mb-14 w-full"
              onSlideChange={(swiper) => setPhoto(photos[swiper.realIndex])}
            >
              {photos.map((photo, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative w-full h-[460px]"> {/* Fixed height for the image */}
                    <Image
                      src={photo.image}  // Her bir fotoğrafın doğru `image` özelliğini kullanıyoruz
                      layout="responsive" // Maintain aspect ratio of images
                      width={1200}        // Increased the width to make the image bigger
                      height={800}        // Increased the height to make the image bigger
                      className="object-cover"
                      alt={`Photo ${photo.num}`}  // Alt metin ekledik
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
