"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion, useTransform, useScroll } from "motion/react";

const Testimonials = [
  {
    id: 1,
    name: "Rachel & Tom Harmon",
    rating: 5,
    comment:
      "Arca found us a penthouse that wasn't even on the market yet. The whole process felt tailored, never transactional.",
  },
  {
    id: 2,
    name: "Adeola Mensah",
    rating: 5,
    comment:
      "I relocated internationally and was skeptical about remote property buying. Arca made it seamless from first viewing to key handover.",
  },
  {
    id: 3,
    name: "David Holloway",
    rating: 5,
    comment:
      "Their market intelligence is exceptional. We sold 18% above asking and were in the next home in under six weeks.",
  },
  {
    id: 4,
    name: "Priya Nair",
    rating: 5,
    comment:
      "As a first-time buyer, I was nervous about everything. My Arca advisor walked me through each step with patience and honesty. I never felt rushed.",
  },
  {
    id: 5,
    name: "Marcus & Lena Voss",
    rating: 4,
    comment:
      "We'd been searching for over a year before finding Arca. Within three weeks they matched us with a property we hadn't even considered — and it was perfect.",
  },
  {
    id: 6,
    name: "Chidi Okonkwo",
    rating: 5,
    comment:
      "The rental process was faster and cleaner than anything I'd experienced before. No back-and-forth, no hidden fees. Just a great apartment and a smooth handover.",
  },
];

const Testimonial = () => {
  const [currentCount, setCurrentCount] = useState(1);
  const currentTestimonial = Testimonials.find(
    (testimonial) => testimonial.id === currentCount,
  );

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"],
  );

  return (
    <section className="p-4 md:p-8 lg:p-20">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl w-full md:w-1/2">
          Hear from the people{" "}
          <span className="text-gray-500">who've been there</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-10 mt-10 md:mt-16 lg:mt-20">
        <motion.div
          ref={ref}
          style={{ clipPath }}
          className="w-full md:w-[55%] overflow-hidden"
        >
          <Image
            src="/images/customer_review.jpg"
            alt="customer review"
            width={500}
            height={500}
            className="w-full"
          />
        </motion.div>

        {/* ........ REVIEWS ............... */}
        <div className="w-full md:w-[40%] relative mb-10">
          <hr />
          <div className="flex gap-1 md:gap-2 mt-6 md:mt-8">
            {[1, 2, 3, 4, 5, 6].map((count) => (
              <div
                onClick={() => setCurrentCount(count)}
                key={count}
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full border p-1 md:p-2 flex items-center justify-center cursor-pointer ${currentCount === count ? "border-black text-black" : "border-gray-300 text-gray-400"} transition-colors duration-300 ease-in-out text-sm md:text-base`}
              >
                {count}
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 lg:mt-10 text-xl md:text-2xl lg:text-3xl font-serif leading-tight">
            "{currentTestimonial?.comment}"
          </div>

          <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-10 items-start md:items-center">
            <div className="uppercase font-bold text-gray-500 text-sm md:text-base">
              {currentTestimonial?.name}
            </div>

            <div className="hidden md:block">/</div>

            <div className="flex gap-1">
              {Array.from({ length: currentTestimonial?.rating || 0 }).map(
                (_, index) => (
                  <Star
                    key={index}
                    width={12}
                    height={12}
                    className="md:w-[18px] md:h-[18px]"
                    fill="#000"
                  />
                ),
              )}
            </div>
          </div>

          <div className="absolute top-2 md:top-5 opacity-[0.5] right-0">
            <Quote
              width={40}
              height={40}
              className="md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
