"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "motion/react";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Fade out the content as we scroll down
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Move down
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "600px"]);

  // scale image up slightly as we scroll down
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  return (
    <section
      ref={ref}
      className="flex items-center flex-col pt-40 relative h-[92%] min-h-[92%] overflow-hidden"
    >
      <motion.div style={{ opacity, y }} className="text-center space-y-6">
        <h1 className="text-8xl font-bold opacity-[0.9]">
          Find a Place You'll Call Home
        </h1>
        <p className="text-4xl font-medium opacity-[0.8]">
          We match discerning buyers with exceptional spaces.
        </p>
        <Button size="lg" className="p-6 rounded-4xl text-md">
          Explore Properties
        </Button>
      </motion.div>

      {/* <motion.div
        style={{ scale: imageScale }}
        className="overflow-hidden absolute -bottom-20 inset-0 "
      >
        <Image
          src="/building.png"
          alt="building"
          width={700}
          height={700}
          className="w-[50%] h-full object-cover"
        />
      </motion.div> */}
      <motion.div
        style={{ scale: imageScale }}
        className="absolute bottom-0 right-1/2 translate-x-1/2 h-[60%] overflow-hidden z-0"
      >
        <Image
          src="/building.png"
          alt="building"
          width={700}
          height={700}
          className="object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
