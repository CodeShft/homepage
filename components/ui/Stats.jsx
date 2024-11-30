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
    <section className="pt-4 pb-2 -mt-8 sm:mt-6 xl:-mt-32 xl:pt-4 xl:pb-4">
      <div className="container mx-auto">
        <div className="flex flex-row justify-center xl:justify-start items-center gap-3 sm:gap-6 xl:ml-0">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center text-center gap-1 p-2 w-[75px] sm:w-24 h-[80px] sm:h-24 justify-center bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-all duration-300 shadow-lg"
                key={index}
              >
                <div className="h-6 sm:h-8 flex items-center">
                  <CountUp
                    end={item.num}
                    duration={3}
                    delay={0.4}
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