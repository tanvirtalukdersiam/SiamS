"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Web development involves designing, coding, and optimizing websites functionality, user experience & responsiveness.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "UI/UX design focuses on creating intuitive, user-friendly interfaces and seamless experiences for digital products.",
    href: "",
  },
  {
    num: "03",
    title: "SEO",
    description:
      "SEO optimizes websites to improve search engine rankings, increase visibility and drive organic traffic effectively.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-10 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.2, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-4 group"
            >
              {/* card top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent  group-hover:text-outline-hover transition-all duration-500">
                  {item.num}
                </div>
                <Link
                  href={item.href}
                  className="w-[65px] h-[65px] rounded-full bg-white group-hover:bg-accent duration-500 flex justify-center items-center hover:-rotate-45 "
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* heading*/}
              <h3 className="text-4xl font-bold leading-none text-white group-hover:text-accent duration-500">
                {item.title}
              </h3>
              <p className="text-white/60">{item.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
