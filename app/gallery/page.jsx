"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const photos = [
  { image: "/lokum1.jpg" },
  { image: "/lokum2.jpg" },
  { image: "/lokum3.jpg" },
  { image: "/lokum4.jpg" },
  { image: "/lokum5.jpg" },
  { image: "/lokum6.jpg" },
];

const Gallery = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-5 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[10px] gap-[10px]">
          {/* Left Section: Photo Details */}
          <div className="w-full xl:w-[40%] flex flex-col justify-center items-start order-1 xl:order-none">
            <div className="text-2xl font-bold mt-4">Photo Gallery</div>
          </div>
          <div className="w-full xl:w-[60%] flex flex-wrap gap-6 justify-start items-center order-2 xl:order-none">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative w-full sm:w-[48%] md:w-[32%] lg:w-[23%] h-[250px] max-h-[250px] aspect-w-1 aspect-h-1"
              >
                <Image
                  src={photo.image}
                  alt={`Photo ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
