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
    <section className="pt-2 pb-2 xl:pt-6 xl:pb-4 -mt-8 xl:-mt-12">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap justify-start items-center gap-10 max-w-[90vw] ml-20 xl:ml-36 xl:max-w-none text-green-800">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center text-center gap-1 p-2 w-24 h-24 justify-center bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-all duration-300 shadow-lg"
                key={index}
              >
                <div className="h-8 flex items-center">
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-2xl xl:text-3xl font-bold text-amber-500"
                  />
                </div>
                <p className="text-xs xl:text-sm text-white/90 font-medium">
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