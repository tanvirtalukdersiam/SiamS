"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel pulvinar lectus. ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tanvir Siam",
    },
    {
      fieldName: "Phone",
      fieldValue: "+8801743860970",
    },
    {
      fieldName: "Experience",
      fieldValue: "1.8 Years",
    },
    {
      fieldName: "Instagram",
      fieldValue: "tanvirtalukdersiam",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Bangla",
    },
    {
      fieldName: "Email",
      fieldValue: "tanvir62003@gmail.com",
    },
  ],
};

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel pulvinar lectus.",

  items: [
    {
      institution: "One Year Academy",
      degree: "Backend Mastery with node.js",
      duration: "2024-Present",
    },
    {
      institution: "One Year Academy",
      degree: "Node.js Fundamentals",
      duration: "2024",
    },
    {
      institution: "Creative It Institute",
      degree: "Mern Stack Development",
      duration: "2023-24",
    },
    {
      institution: "Stack Learner",
      degree: "Javascript",
      duration: "2022",
    },
    {
      institution: "Learn with Sumit (LWS)",
      degree: "Javascript",
      duration: "2022",
    },
    {
      institution: "Moshiur Online Course",
      degree: "HTML ,CSS3",
      duration: "2022",
    },
  ],
};

const experience = {
  title: "My Experience",
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel pulvinar lectus. ",
  items: [
    {
      position: "Mern Stack Developer",
      company: "Future It Care",
      duration: "2024-present",
    },
  ],
};

const skill = {
  skills: "My skill",
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel pulvinar lectus.",
  skillList: [
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <TbBrandReactNative />,
      name: "React Native",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.2, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center  justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-20"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skill</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-7 text-center xl:text-left">
                <h4 className="text-4xl font-bold text-center xl:text-left ">
                  {experience.title}
                </h4>
                <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0  mb-7">
                  {experience.Description}
                </p>
              </div>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {experience.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h4 className="text-xl max-w-[260px] min-h-[40px] ">
                        {item.position}
                      </h4>
                      <div className="flex items-center gap-3">
                        <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-7 text-center xl:text-left">
                <h4 className="text-4xl font-bold">{education.title}</h4>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                  {education.Description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h4 className="text-xl max-w-[260px] min-h-[48px] text-center lg:text-left">
                          {item.degree}
                        </h4>
                        <div className="flex items-center gap-3">
                          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skill */}
            <TabsContent value="skill" className="w-full">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-7 text-center xl:text-left">
                  <h4 className="text-4xl font-bold">{skill.skills}</h4>
                  <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">
                    {skill.Description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-7">
                  {skill.skillList.map((skill, index) => (
                    <li key={index} className="flex gap-3">
                      {/* {skill.icon} */}
                      {/* <p>{skill.name}</p> */}
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[135px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-5xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-7">
                <h5 className="text-4xl font-bold">{about.title}</h5>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.Description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{skill.fieldName}:</span>
                      <span className="text-lg">{skill.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
