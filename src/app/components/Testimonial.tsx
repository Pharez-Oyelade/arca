"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

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

  return (
    <section className="p-20">
      <div>
        <h1 className="text-5xl w-1/2">
          Hear from the people{" "}
          <span className="text-gray-500">who've been there</span>
        </h1>
      </div>

      <div className="flex gap-10 mt-20">
        <div className="w-[55%] overflow-hidden">
          <Image
            src="/images/customer_review.jpg"
            alt="customer review"
            width={500}
            height={500}
            className="w-full"
          />
        </div>

        {/* ........ REVIEWS ............... */}
        <div className="w-[40%] relative">
          <hr />
          <div className="flex gap-2 mt-8">
            {[1, 2, 3, 4, 5, 6].map((count) => (
              <div
                onClick={() => setCurrentCount(count)}
                key={count}
                className={`w-8 h-8 rounded-full border p-2 flex items-center justify-center cursor-pointer ${currentCount === count ? "border-black text-black" : "border-gray-300 text-gray-400"} transition-colors duration-300 ease-in-out`}
              >
                {count}
              </div>
            ))}
          </div>

          <div className="mt-10 text-3xl font-serif leading-tighter">
            "{currentTestimonial?.comment}"
          </div>

          <div className="mt-10 flex gap-10 items-center">
            <div className="uppercase font-bold text-gray-500">
              {currentTestimonial?.name}
            </div>

            <div>/</div>

            <div className="flex gap-1">
              {Array.from({ length: currentTestimonial?.rating || 0 }).map(
                (_, index) => (
                  <Star key={index} width={18} height={18} fill="#000" />
                ),
              )}
            </div>
          </div>

          <div className="absolute top-5 opacity-[0.5] right-0">
            <Quote width={80} height={80} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
