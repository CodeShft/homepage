"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const promises = photos.map((photo) => {
          return new Promise((resolve) => {
            const img = new window.Image();
            img.src = photo.image;
            img.onload = () => {
              setPreloadedImages(prev => ({
                ...prev,
                [photo.image]: true
              }));
              resolve();
            };
          });
        });

        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="container mx-auto px-4 -mt-4 sm:mt-0 max-w-2xl">
      <h2 className="text-xl font-semibold mb-3 sm:mb-4 text-center tracking-wider">
        ✧ Photo Gallery ✧
      </h2>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-2">
        {photos.map((photo, index) => (
          <div key={index} className="relative group cursor-pointer" onClick={() => setSelectedImage(photo)}>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {!preloadedImages[photo.image] && <LoadingSpinner />}
              <Image
                src={photo.image}
                alt={`Photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 45vw, 25vw"
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
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div
            className="relative max-w-full max-h-[90vh] transform transition-transform duration-200 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {!preloadedImages[selectedImage.image] && <LoadingSpinner />}
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
    </div>
  );
};

export default Gallery;