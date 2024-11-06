"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Sleeps a lot",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "",
  },
  {
    num: "02",
    title: "Eats too much",
    description: "Lorem Ipsum",
    href: "",
  },
  {
    num: "03",
    title: "Prone to escape",
    description: "Lorem Ipsum",
    href: "",
  },
  {
    num: "04",
    title: "Loves people very much",
    description: "Lorem Ipsum",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center gap-6 group"
              >
                {/* Top Section */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-outline 
                    text-transparent group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  {/* Arrow Button */}
                  <Link
                    href={service.href}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white group-hover:bg-amber-700 transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl sm:text-3xl md:text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none text-white group-hover:text-amber-700 transition-all duration-500">
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-white/60">
                  {service.description}
                </p>
                {/* Border Divider */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
