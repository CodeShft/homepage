"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const photos = [
  { image: "/lokum1.jpg" },
  { image: "/lokum2.jpg" },
  { image: "/lokum3.jpg" },
  { image: "/lokum4.jpg" },
  { image: "/lokum.jpg" },
  { image: "/lokum5.jpg" },
];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-10 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[20px] gap-[20px]">
          {/* Left Section: Photo Details */}
          <div className="w-full xl:w-[40%] flex flex-col justify-center items-start order-2 xl:order-none">
            <div className="text-2xl font-bold mt-4">Photo Gallery</div>
          </div>

          {/* Right Section: Image Gallery */}
          <div className="w-full xl:w-[60%] flex flex-wrap gap-6 justify-start items-center">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative w-full sm:w-[48%] md:w-[32%] lg:w-[23%] h-[300px] max-h-[300px] aspect-w-1 aspect-h-1"
              >
                <Image
                  src={photo.image}
                  alt={`Photo ${index + 1}`}
                  layout="fill" // Makes the image fill the container
                  objectFit="cover" // Ensures images maintain aspect ratio and cover the space
                  className="rounded-lg" // Optional: adds rounded corners
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
