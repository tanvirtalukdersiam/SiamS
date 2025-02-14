"use client";
import { animate, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.7, duration: 0.2, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.9, duration: 0.3, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:h-[478px] xl:w-[478px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/Md_Tanvir MernStackDeveloper.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain mt-0 xl:mt-6"
          />
        </motion.div>
        {/* ----------circle------- */}
        <motion.svg
          className={"w-[300px] xl:w-[506px] h-[300px] xl:h-[510px]"}
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="253"
            stroke="#00ff99"
            strokeWidth={"4"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [130, 360],
            }}
            transition={{
              duration: 9.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
