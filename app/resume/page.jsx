"use client";
import { useState } from "react";

const about = {
  title: "About me",
  description: "About me",

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
    <div className="min-h-[40vh] relative overflow-hidden">
      {/* Animated light beams */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[25vh] w-full h-[1px] sm:h-[1.5px] md:h-[2px] lg:h-[3px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"
        />
        <div
          className="absolute top-[50vh] w-full h-[0.5px] sm:h-[1px] md:h-[1.5px] lg:h-[2px] bg-gradient-to-r from-transparent via-purple-500/15 to-transparent"
        />
        <div
          className="absolute top-[60vh] w-full h-[1px] sm:h-[1.5px] md:h-[2px] lg:h-[3px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent block"
        />
        <div
          className="absolute top-[33vh] hidden sm:block w-full h-[0.5px] sm:h-[1px] md:h-[1.5px] lg:h-[2px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
        />
        <div
          className="absolute top-[66vh] hidden md:block w-full h-[0.5px] sm:h-[1px] md:h-[1.5px] lg:h-[2px] bg-gradient-to-r from-transparent via-teal-500/15 to-transparent"
        />
      </div>
      <div className="container mx-auto pt-2 px-4 relative z-10">
        <div className="flex flex-col w-full max-w-[580px] mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800">
            <div className="flex flex-col gap-3">
              {/* Vaccination Button and Content */}
              <div className="flex flex-col w-full group">
                <button
                  onClick={() =>
                    setActiveTab(
                      activeTab === "vaccinations" ? null : "vaccinations"
                    )
                  }
                  className={`p-4 text-left transition-all duration-300 ${
                    activeTab === "vaccinations"
                      ? "bg-gray-800 rounded-t-lg"
                      : "bg-gray-700 rounded-lg hover:bg-gray-600"
                  }`}
                >
                  <span className="font-medium">Vaccination dates</span>
                </button>
                {activeTab === "vaccinations" && (
                  <div className="overflow-hidden bg-gray-800 rounded-b-lg">
                    <div className="p-4 space-y-2">
                      <div className="p-3 bg-green-800 rounded-lg flex items-center backdrop-blur-sm">
                        2021 Karma Vaccine
                      </div>
                      <div className="p-3 bg-green-800 rounded-lg flex items-center backdrop-blur-sm">
                        2022 Rabies vaccine
                      </div>
                      <div className="p-3 bg-green-800 rounded-lg backdrop-blur-sm">
                        2024 Internal and external parasite vaccines
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col w-full group">
                <button
                  onClick={() =>
                    setActiveTab(
                      activeTab === "nationality" ? null : "nationality"
                    )
                  }
                  className={`p-4 text-left transition-all duration-300 ${
                    activeTab === "nationality"
                      ? "bg-gray-800 rounded-t-lg"
                      : "bg-gray-700 rounded-lg hover:bg-gray-600"
                  }`}
                >
                  <span className="font-medium">Nationality</span>
                </button>
                {activeTab === "nationality" && (
                  <div className="overflow-hidden bg-gray-800 rounded-b-lg">
                    <div className="p-4 space-y-2">
                      <div className="p-3 bg-green-800 rounded-lg backdrop-blur-sm">
                        Turkish Tekir Cat
                      </div>
                      <div className="p-3 bg-green-800 rounded-lg backdrop-blur-sm">
                        Calico Cat
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col w-full group">
                <button
                  onClick={() =>
                    setActiveTab(activeTab === "about" ? null : "about")
                  }
                  className={`p-4 text-left transition-all duration-300 ${
                    activeTab === "about"
                      ? "bg-gray-800 rounded-t-lg"
                      : "bg-gray-700 rounded-lg hover:bg-gray-600"
                  }`}
                >
                  <span className="font-medium">About me</span>
                </button>
                {activeTab === "about" && (
                  <div className="overflow-hidden bg-gray-800 rounded-b-lg">
                    <div className="p-4">
                      <div className="p-3 bg-green-800 rounded-lg backdrop-blur-sm">
                        I was born in Ankara in 2018. I was adopted and I&apos;m
                        happy in my home, but I&apos;m looking for a new owner.
                        I like making new friends, I am very affectionate.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}