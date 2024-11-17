"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMarkerAlt } from "react-icons/fa";

const info_ = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(+90 536 358 9191)",
  },

  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "youremail@gmail.com",
  },

  {
    icon: <FaMarkerAlt />,
    title: "Address",
    description: "Your address",
  },
];

import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div>
        {/* { form} */}
        <div>
          <form>form</form>
          {/* {info} */}
          <div>info</div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
