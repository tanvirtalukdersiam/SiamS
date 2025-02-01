"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SelectLabel } from "@radix-ui/react-select";
import Link from "next/link";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "01743860970",
    Link,
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tanvir62003@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Dhaka,Bangladesh",
  },
];
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.2, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-7">
          {/* ---from--- */}
          <div className="xl:w-[56%] order-2 xl:order-none">
            <form className="flex flex-col gap-5 p-10 bg-[#27272c] rounded-xl ">
              <h2 className="text-4xl text-accent">Let's work together</h2>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. quas
                earum!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input placeholder="First Name" type="firstname" />
                <Input placeholder="Last Name" type="firstname" />
                <Input placeholder="Your Email" type="email" />
                <Input placeholder="Phone Number" type="phone" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX</SelectItem>
                    <SelectItem value="mst">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                placeholder="Type your message here."
                className="h-[180px]"
              />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* ---info--- */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-5">
                  <div className="h-[52px] w-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h5 className="text-xl">{item.description}</h5>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
