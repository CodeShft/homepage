"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "6 Years old a cat",
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
    text: "Neutered cat",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 sm:pt-2 pb-2 xl:pt-4 xl:pb-4 -mt-12 xl:-mt-16">
      <div className="container mx-auto">
        <div className="flex flex-row justify-start items-center gap-3 sm:gap-6 pl-6 sm:pl-16 md:pl-24 lg:pl-32">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center text-center gap-1 p-2 w-[75px] sm:w-24 h-[80px] sm:h-24 justify-center bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-all duration-300 shadow-lg"
                key={index}
              >
                <div className="h-6 sm:h-8 flex items-center">
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-xl sm:text-2xl xl:text-3xl font-bold text-amber-500"
                  />
                </div>
                <p className="text-[10px] sm:text-xs xl:text-sm text-white/90 font-medium">
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