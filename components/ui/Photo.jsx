"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
    className="relative flex justify-center items-center -mt-8 xl:-mt-12"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
      className="w-56 h-56 xl:w-[300px] xl:h-[300px] mix-blend-lighten absolute"
    >
      <Image
        src="/lokum.jpg"
        alt="Profile photo"
        quality={100}
        priority
        fill
        sizes="(max-width: 640px) 14rem, (max-width: 768px) 20rem, (max-width: 1024px) 30rem, 40rem"
        className="rounded-full aspect-square object-cover"
      />
    </motion.div>

    {/* Animated Circle */}
    <motion.svg
      className="w-[240px] h-[240px] xl:w-[316px] xl:h-[316px]"
      fill="transparent"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="250"
        cy="250"
        r="240"
        stroke="#c97b1c"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: "24 10 0 0" }}
        animate={{
          strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
          rotate: [120, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.svg>
  </motion.div>
);

export default Photo;
