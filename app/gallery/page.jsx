"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const photos = [
  { image: "/lokum5.jpg" },
  { image: "/lokum2.jpg" },
  { image: "/lokum3.jpg" },
  { image: "/lokum4.jpg" },
  { image: "/lokumm.jpg" },
  { image: "/lokum6.jpg" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preloadedImages, setPreloadedImages] = useState({});

  useEffect(() => {
    photos.forEach((photo) => {
      const img = new window.Image();
      img.src = photo.image;
      img.onload = () => {
        setPreloadedImages(prev => ({
          ...prev,
          [photo.image]: true
        }));
      };
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-0 px-4"
    >
      <div className="container mx-auto pt-0 px-4 relative z-10">
        <motion.h2
          initial={{ y: -20, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl font-semibold mb-4 text-center tracking-wider animate-gradient"
          style={{
            background: "linear-gradient(-60deg, #8B4513, #A0522D, #D2691E, #8B4513)",
            backgroundSize: "300% 300%",
            animation: "gradient 8s ease infinite",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          ✧ Photo Gallery ✧
        </motion.h2>

        <style jsx global>{`
          @keyframes gradient {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
        `}</style>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[600px] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={photo.image}
                  alt={`Photo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: index === 4 ? "center 70%" : "center",
                  }}
                  className="transform transition-all duration-300 group-hover:scale-105"
                  priority={true}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div
              className="relative max-w-full max-h-[90vh] transform transition-transform duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt="Selected photo"
                width={800}
                height={800}
                style={{ objectFit: "contain" }}
                className="rounded-lg max-h-[85vh] w-auto"
                priority={true}
                loading="eager"
                sizes="100vw"
                quality={75}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
