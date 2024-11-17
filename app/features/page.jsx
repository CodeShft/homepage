"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { GiCat } from "react-icons/gi";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const colors = ["bg-amber-900", "bg-gray-600", "bg-yellow-900"];

const hoverColors = [
  "hover:bg-amber-700",
  "hover:bg-gray-400",
  "hover:bg-yellow-700",
];

const features = [
  {
    num: "01",
    title: "Sleeps a lot",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "",
  },
  {
    num: "02",
    title: "Eats too much",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "",
  },
  {
    num: "03",
    title: "Prone to escape",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "",
  },
];

const Services = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-[40vh] flex flex-col justify-center py-1 relative">
      <div className="container mx-auto">
        {/* Cat Animation */}
        <div className="cat-animation absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-10">
          <div
            className="cat"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y - 30}px`,
              position: "fixed",
              transform: "translate(-50%, -50%)",
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Cat icon: GiCat icon */}
            <GiCat className="text-4xl text-white" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4"
        >
          {features.map((feature, index) => {
            const cardColor = colors[index % colors.length];
            const hoverColor = hoverColors[index % hoverColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4 + index * 0.2, duration: 0.6 },
                }}
                className={`flex flex-col justify-center gap-2 group border border-transparent rounded-lg shadow-lg transition-all duration-300 max-w-md mx-auto relative ${cardColor} ${hoverColor}`}
              >
                {/* Card Content */}
                <div className="p-2 flex flex-col justify-between h-full relative z-10">
                  {/* Top Section */}
                  <div className="w-full flex justify-between items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-20 text-black rounded-full font-extrabold text-xl">
                      {feature.num}
                    </div>
                    {/* Arrow Button */}
                    <Link
                      href={feature.href || "#"}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-500 duration-500 flex justify-center items-center hover:rotate-45"
                    >
                      <BsArrowDownRight className="text-gray-800 text-xl sm:text-2xl md:text-3xl" />
                    </Link>
                  </div>
                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.6 + index * 0.2, duration: 0.4 },
                    }}
                    className="text-lg sm:text-xl md:text-2xl font-bold leading-none text-black mt-4"
                  >
                    {feature.title}
                  </motion.h2>
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.8 + index * 0.2, duration: 0.4 },
                    }}
                    className="text-sm sm:text-base md:text-lg text-black mt-2"
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Cat movement CSS */}
      <style jsx>{`
        /* Hide the cursor */
        body {
          cursor: none;
        }

        .cat-animation {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .cat {
          width: 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          background-color: transparent;
          animation: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
