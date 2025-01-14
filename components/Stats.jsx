"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 1.8,
    text: "Years of experience",
  },
  {
    num: 13,
    text: "Projects completed",
  },
  {
    num: 9,
    text: "Technologies mastered",
  },
  {
    num: 310,
    text: "Code commits",
  },
];
const Stats = () => {
  return (
    <section className="pt-3 xl:pt-0 pb-8 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw ] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex justify-center items-center xl:justify-start gap-4"
            >
              <CountUp
                end={item.num}
                duration={2}
                delay={0.9}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug  text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
