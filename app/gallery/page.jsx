"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

const photos = [
  { image: "/lokumm.jpg" },
  { image: "/lokum2.jpg" },
  { image: "/lokum3.jpg" },
  { image: "/lokum4.jpg" },
  { image: "/lokum5.jpg" },
  { image: "/lokum6.jpg" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-2 px-4"
    >
      <div className="container mx-auto pt-2 px-4 relative z-10">
        <motion.h2 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl font-semibold mb-4 text-center text-white"
        >
          Photo Gallery
        </motion.h2>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[600px] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={photo.image}
                  alt={`Photo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: index === 4 ? "center 70%" : "center" }}
                  className="transform transition-all duration-300 group-hover:scale-105"
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt="Selected photo"
                width={800}
                height={800}
                style={{ objectFit: "contain" }}
                className="rounded-lg max-h-[85vh] w-auto"
                priority
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Gallery;
