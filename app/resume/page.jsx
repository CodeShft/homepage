"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { motion } from "framer-motion";
const about = {
  title: "About me",
  description: "Lorem ipsum",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Lokum",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Turkish Tekir cat",
    },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="name"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="vaccinations">Vaccination dates</TabsTrigger>
            <TabsTrigger value="nationality">Nationality</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* container */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="vaccinations" className="w-full">
              <li>2021 Karma Vaccine</li>
              <li>2022 Rabies vaccine</li>
              <li>2023 Leukemia vaccine</li>
              <li>2024 Internal and external parasite vaccines</li>
            </TabsContent>

            <TabsContent value="nationality" className="w-full">
              nationality
            </TabsContent>

            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
