"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "6 Years old",
  },
  {
    num: 2,
    text: "Not an aggressive",
  },
  {
    num: 3,
    text: "Can live with cat",
  },
  {
    num: 4,
    text: "A neutered cat",
  },
];

const Stats = () => {
  return (
    <section className="pt-3 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 max-w-[80vw] mx-auto xl:max-w-none text-green-700">
          {stats.map((item, index) => {
            return (
              <div
                className="flex items-center justify-start gap-6 sm:gap-8 xl:gap-4" // Burada gap'i artırdım
                key={index}
              >
                {/* Sayı kısmı */}
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl sm:text-5xl xl:text-6xl font-extrabold mt-[-30px]" // Sayıyı yukarıya taşıdık
                />
                {/* Metin kısmı */}
                <p className="text-sm sm:text-base xl:text-lg leading-snug text-white/80 mt-[-30px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
