"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";

const about = {
  title: "About me",
  description: "Lorem ipsum",

  info: [
    {
      fieldName: "Vaccinations",
      fieldValue: "Vaccination dates",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Turkish Tekir cat",
    },
  ],
};

export default function Resume() {
  const [activeTab, setActiveTab] = useState(null);
  
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
        <div className="flex flex-col xl:flex-row gap-[60px]">
          <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <button 
              onClick={() => setActiveTab(activeTab === 'vaccinations' ? null : 'vaccinations')}
              className={`p-4 rounded-lg text-left ${activeTab === 'vaccinations' ? 'bg-gray-800' : 'bg-gray-700'}`}
            >
              Vaccination dates
            </button>
            <button 
              onClick={() => setActiveTab(activeTab === 'nationality' ? null : 'nationality')}
              className={`p-4 rounded-lg text-left ${activeTab === 'nationality' ? 'bg-gray-800' : 'bg-gray-700'}`}
            >
              Nationality
            </button>
            <button 
              onClick={() => setActiveTab(activeTab === 'about' ? null : 'about')}
              className={`p-4 rounded-lg text-left ${activeTab === 'about' ? 'bg-gray-800' : 'bg-gray-700'}`}
            >
              About me
            </button>
          </div>

          {/* container */}
          <div className="min-h-[80vh] w-full">
            {activeTab === 'vaccinations' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full relative"
              >
                <div className="absolute w-4 h-4 bg-gray-800 transform rotate-45 left-[-8px] top-6 xl:left-[-8px] xl:top-6" />
                <ul className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-xl relative">
                  <li className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">2021 Karma Vaccine</li>
                  <li className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">2022 Rabies vaccine</li>
                  <li className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">2023 Leukemia vaccine</li>
                  <li className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">2024 Internal and external parasite vaccines</li>
                </ul>
              </motion.div>
            )}

            {activeTab === 'nationality' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full relative"
              >
                <div className="absolute w-4 h-4 bg-gray-800 transform rotate-45 left-[-8px] top-6 xl:left-[-8px] xl:top-6" />
                <div className="w-full p-6 bg-gray-800 rounded-lg shadow-xl relative">
                  Turkish Tekir cat
                </div>
              </motion.div>
            )}

            {activeTab === 'about' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full relative"
              >
                <div className="absolute w-4 h-4 bg-gray-800 transform rotate-45 left-[-8px] top-6 xl:left-[-8px] xl:top-6" />
                <div className="w-full p-6 bg-gray-800 rounded-lg shadow-xl relative">
                  {about.description}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
