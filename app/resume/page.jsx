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
      {/* Universe Background */}
      <div className="fixed inset-x-0 bottom-0 h-[70vh] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary to-transparent">
          <div className="star-field">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .star-field {
          position: relative;
          width: 100%;
          height: 100%;
          transform: rotate(-45deg);
          mask-image: linear-gradient(to top, 
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,1) 50%,
            rgba(0,0,0,0) 100%
          );
        }

        .layer {
          position: absolute;
          inset: -100px;
          animation: shimmer 4s ease-in-out infinite alternate;
        }

        .layer:nth-child(1) {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 50px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 200px 50px, #fff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation-delay: 0s;
          opacity: 1;
        }

        .layer:nth-child(2) {
          background-image: 
            radial-gradient(3px 3px at 50px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(3px 3px at 100px 60px, #fff, rgba(0,0,0,0)),
            radial-gradient(3px 3px at 160px 120px, #fff, rgba(0,0,0,0)),
            radial-gradient(3px 3px at 200px 90px, #fff, rgba(0,0,0,0)),
            radial-gradient(3px 3px at 140px 180px, #fff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 300px 300px;
          animation-delay: 1s;
          opacity: 0.9;
        }

        .layer:nth-child(3) {
          background-image: 
            radial-gradient(4px 4px at 100px 150px, #fff, rgba(0,0,0,0)),
            radial-gradient(4px 4px at 200px 250px, #fff, rgba(0,0,0,0)),
            radial-gradient(4px 4px at 300px 200px, #fff, rgba(0,0,0,0)),
            radial-gradient(4px 4px at 400px 150px, #fff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 400px 400px;
          animation-delay: 2s;
          opacity: 0.8;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-50px) translateY(-50px);
          }
        }
      `}</style>

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