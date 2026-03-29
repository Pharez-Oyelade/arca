import React from "react";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section className="bg-[#151717] text-white py-10 md:py-16 lg:py-20">
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-20 mb-10 md:mb-16 lg:mb-20">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg md:text-xl lg:text-2xl">Services</h3>
        </div>

        <div className="w-full md:w-2/3">
          <h1 className="w-[70%] lg:w-[50%] font-bold text-2xl md:text-3xl lg:text-5xl">
            Everything you need,{" "}
            <span className="text-gray-400">in one place</span>
          </h1>
        </div>
      </div>

      <hr className="bg-gray-500" />

      <div className="px-4 md:px-8 lg:px-20 bg-[url('/images/apartment1.jpg')] bg-center bg-cover h-[200px] md:h-[280px] lg:h-[320px] rounded-lg relative overflow-hidden group">
        <Link href="/">
          <div className="bg-black/80 absolute h-full w-full top-0 inset-0 z-0" />
          <div className="hidden md:block bg-[#151717] absolute h-full w-full top-0 inset-0 z-10 translate-y-0 md:group-hover:-translate-y-full transition-all duration-500 md:duration-700 ease-in-out" />
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 lg:gap-40 items-center z-50 text-white relative h-full p-4 md:p-6">
            <div className="w-full md:w-[35%] text-sm md:text-base">
              From shortlisting to signing, we guide you through every step — so
              you always know what you're getting into before you commit.
            </div>

            <div className="w-full md:w-[40%] text-4xl md:text-6xl lg:text-9xl relative overflow-hidden text-center md:text-left">
              Buy
              <div className="absolute w-[50%] bottom-1 h-1 bg-white -translate-x-full md:group-hover:translate-x-0 transition-all duration-500 md:duration-700 ease-in-out opacity-0 md:group-hover:opacity-100" />
            </div>

            <div className="flex w-full md:w-[25%] text-2xl md:text-3xl lg:text-5xl justify-center md:justify-end">
              <ArrowRight
                width={40}
                height={40}
                className="md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] md:group-hover:translate-x-3 transition-all duration-500 md:duration-700 ease-in-out opacity-0 md:group-hover:opacity-100"
              />
            </div>
          </div>
        </Link>
      </div>

      <hr />

      {/* SELL */}
      <div className="px-4 md:px-8 lg:px-20 bg-[url('/images/villa.jpg')] bg-center bg-cover h-[200px] md:h-[280px] lg:h-[320px] rounded-lg relative overflow-hidden group">
        <Link href="/">
          <div className="bg-black/80 absolute h-full w-full top-0 inset-0 z-0" />
          <div className="hidden md:block bg-[#151717] absolute h-full w-full top-0 inset-0 z-10 translate-y-0 md:group-hover:-translate-y-full transition-all duration-500 md:duration-700 ease-in-out" />
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 lg:gap-40 items-center z-50 text-white relative h-full p-4 md:p-6">
            <div className="w-full md:w-[35%] text-sm md:text-base">
              We price, present, and position your property to attract the right
              buyers fast — without leaving money on the table.
            </div>

            <div className="w-full md:w-[40%] text-4xl md:text-6xl lg:text-9xl relative overflow-hidden text-center md:text-left">
              Sell
              <div className="absolute w-[50%] bottom-1 h-1 bg-white -translate-x-full md:group-hover:translate-x-0 transition-all duration-500 md:duration-700 ease-in-out opacity-0 md:group-hover:opacity-100" />
            </div>

            <div className="w-full md:w-[25%] text-2xl md:text-3xl lg:text-5xl flex justify-center md:justify-end">
              <ArrowRight
                width={40}
                height={40}
                className="md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] md:group-hover:translate-x-3 transition-all duration-500 md:duration-700 ease-in-out opacity-0 md:group-hover:opacity-100"
              />
            </div>
          </div>
        </Link>
      </div>

      <hr />

      {/* RENT */}
      <div className="px-4 md:px-8 lg:px-20 bg-[url('/images/studio.jpg')] bg-center bg-cover h-[200px] md:h-[280px] lg:h-[320px] rounded-lg relative overflow-hidden group">
        <Link href="/">
          <div className="bg-black/80 absolute h-full w-full top-0 inset-0 z-0" />
          <div className="hidden md:block bg-[#151717] absolute h-full w-full top-0 inset-0 z-10 translate-y-0 md:group-hover:-translate-y-full transition-all duration-500 md:duration-700 ease-in-out" />
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 lg:gap-40 items-center z-50 text-white relative h-full p-4 md:p-6">
            <div className="w-full md:w-[35%] text-sm md:text-base">
              Whether you're a tenant or a landlord, we handle the search,
              vetting, and paperwork so the process stays simple on both sides.
            </div>

            <div className="w-full md:w-[40%] text-4xl md:text-6xl lg:text-9xl relative overflow-hidden text-center md:text-left">
              Rent
              <div className="absolute w-[50%] bottom-1 h-1 bg-white -translate-x-full md:group-hover:translate-x-0 transition-all duration-500 md:duration-700 ease-in-out opacity-0 md:group-hover:opacity-100" />
            </div>

            <div className="w-full md:w-[25%] text-2xl md:text-3xl lg:text-5xl flex justify-center md:justify-end">
              <ArrowRight
                width={40}
                height={40}
                className="md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] md:group-hover:translate-x-3 transition-all duration-500 md:duration-700 ease-in-out opacity-0 md:group-hover:opacity-100"
              />
            </div>
          </div>
        </Link>
      </div>

      <hr />

      <div className="pt-10 md:pt-16 lg:pt-20 px-4 md:px-8 lg:px-20 w-full md:w-2/3">
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          Real estate rarely fits neatly into one box. That's why our services
          are built to flex around your needs{" "}
          <span className="text-gray-400">
            — whether you're buying, selling, renting, or simply figuring out
            what comes next.
          </span>
        </h2>

        <Button
          variant="secondary"
          size="lg"
          className="mt-6 md:mt-8 lg:mt-10 px-4 md:px-5 py-3 md:py-4 lg:py-5 rounded-full"
        >
          Discover Our Services
          <MoveRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default Services;
