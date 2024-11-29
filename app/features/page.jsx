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
    description: "She sleeps a lot and likes to sleep upstairs and next to you.",
    href: "",
  },
  {
    num: "02",
    title: "Eats too much",
    description: "She is very gluttonous, she can wake you up to eat, especially she loves chips.",
    href: "",
  },
  {
    num: "03",
    title: "Prone to escape",
    description: "You should close the windows and doors, she can escape immediately, she did it before.",
    href: "",
  },
];

const Services = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

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
    <section className="min-h-[8vh] flex flex-col justify-start pt-0 relative overflow-hidden">
      <div className="container px-4 max-w-3xl mx-auto">
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
          className="grid grid-cols-1 gap-2"
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
                className={`flex flex-col justify-center gap-1 group border border-transparent rounded-lg shadow-lg transition-all duration-300 max-w-sm mx-auto relative ${cardColor} ${hoverColor}`}
              >
                {/* Card Content */}
                <div className="p-2 flex flex-col justify-between h-full relative z-10">
                  {/* Top Section */}
                  <div className="w-full flex justify-between items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 text-black rounded-full font-extrabold text-lg">
                      {feature.num}
                    </div>
                    {/* Arrow Button */}
                    <Link
                      href={feature.href || "#"}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-500 duration-500 flex justify-center items-center hover:rotate-45"
                    >
                      <BsArrowDownRight className="text-gray-800 text-lg sm:text-xl" />
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
                    className="text-base sm:text-lg md:text-xl font-bold leading-none text-black mt-3"
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
                    className="text-xs sm:text-sm md:text-base text-black mt-2"
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
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default Services;