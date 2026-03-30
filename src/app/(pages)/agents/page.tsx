"use client";

import React, { useRef } from "react";
import { Search } from "lucide-react";
import { motion, useTransform, useScroll } from "motion/react";
import Image from "next/image";

const page = () => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "center center"],
  // });

  // const clipPath = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"],
  // );
  return (
    <>
      <div className="space-y-5">
        <h1 className="text-5xl font-bold">Meet Our Agents</h1>
        <p className="text-lg">
          Hand Selected Agents Dedicated to Finding You the Perfect Home
        </p>
      </div>

      <div className="mt-10 w-full md:w-[350px]">
        <div className="flex justify-between items-center pb-3 px-3 border-b-2 w-full">
          <input
            type="text"
            placeholder="Search agents..."
            className="outline-none focus:outline-none"
          />
          <Search className="cursor-pointer" />
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-between gap-20 w-full">
          <motion.div
            initial={{
              clipPath: "inset(0% 50% 0% 50%)",
            }}
            animate={{
              clipPath: "inset(0% 0% 0% 0%)",
            }}
            transition={{
              duration: 1.5,
              ease: [0.77, 0, 0.175, 1], // smoother than easeInOut
            }}
            className="w-full md:w-[80%] overflow-hidden"
          >
            <Image
              src="/images/agent2.jpg"
              alt="agent"
              width={500}
              height={500}
              className="w-full"
            />
          </motion.div>

          <div>
            <p className="w-full">
              Every Arca advisor is hand-selected for their market knowledge,
              integrity, and genuine commitment to finding you the right home —
              not just the next sale.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
