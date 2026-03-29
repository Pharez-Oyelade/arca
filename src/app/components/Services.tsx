import React from "react";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section className="bg-[#151717] text-white py-20">
      <div className="flex justify-between px-20 mb-20">
        <div className="1/3">
          <h3>Services</h3>
        </div>

        <div className="w-2/3">
          <h1 className="w-[50%] font-bold text-5xl">
            Everything you need,{" "}
            <span className="text-gray-400">in one place</span>
          </h1>
        </div>
      </div>

      <hr className="bg-gray-500" />

      <div className="px-20 bg-[url('/images/apartment1.jpg')] bg-center bg-cover h-[320px] rounded-lg relative overflow-hidden group">
        <Link href="/">
          <div className="bg-black/90 absolute h-full w-full top-0 inset-0 z-0" />
          <div className="bg-[#151717] absolute h-full w-full top-0 inset-0 z-10 translate-y-0 group-hover:-translate-y-full transition-all duration-700 ease-in-out" />
          <div className="flex justify-between gap-40 items-center z-50 text-white relative h-full">
            <div className="w-[35%]">
              From shortlisting to signing, we guide you through every step — so
              you always know what you're getting into before you commit.
            </div>

            <div className="w-[40%] text-9xl relative overflow-hidden">
              Buy
              <div className="absolute w-[50%] bottom-1 h-1 bg-white -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100" />
            </div>

            <div className="w-[25%] text-5xl">
              <ArrowRight
                width={80}
                height={80}
                className="group-hover:translate-x-3 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
        </Link>
      </div>

      <hr />

      {/* SELL */}
      <div className="px-20 bg-[url('/images/villa.jpg')] bg-center bg-cover h-[320px] rounded-lg relative overflow-hidden group">
        <Link href="/">
          <div className="bg-black/90 absolute h-full w-full top-0 inset-0 z-0" />
          <div className="bg-[#151717] absolute h-full w-full top-0 inset-0 z-10 translate-y-0 group-hover:-translate-y-full transition-all duration-700 ease-in-out" />
          <div className="flex justify-between gap-40 items-center z-50 text-white relative h-full">
            <div className="w-[35%]">
              We price, present, and position your property to attract the right
              buyers fast — without leaving money on the table.
            </div>

            <div className="w-[40%] text-9xl relative overflow-hidden">
              Sell
              <div className="absolute w-[50%] bottom-1 h-1 bg-white -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100" />
            </div>

            <div className="w-[25%] text-5xl">
              <ArrowRight
                width={80}
                height={80}
                className="group-hover:translate-x-3 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
        </Link>
      </div>

      <hr />

      {/* RENT */}
      <div className="px-20 bg-[url('/images/studio.jpg')] bg-center bg-cover h-[320px] rounded-lg relative overflow-hidden group">
        <Link href="/">
          <div className="bg-black/90 absolute h-full w-full top-0 inset-0 z-0" />
          <div className="bg-[#151717] absolute h-full w-full top-0 inset-0 z-10 translate-y-0 group-hover:-translate-y-full transition-all duration-700 ease-in-out" />
          <div className="flex justify-between gap-40 items-center z-50 text-white relative h-full">
            <div className="w-[35%]">
              Whether you're a tenant or a landlord, we handle the search,
              vetting, and paperwork so the process stays simple on both sides.
            </div>

            <div className="w-[40%] text-9xl relative overflow-hidden">
              Rent
              <div className="absolute w-[50%] bottom-1 h-1 bg-white -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100" />
            </div>

            <div className="w-[25%] text-5xl">
              <ArrowRight
                width={80}
                height={80}
                className="group-hover:translate-x-3 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
        </Link>
      </div>

      <hr />

      <div className="pt-20 px-20 w-2/3">
        <h2 className="text-3xl">
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
          className="mt-10 px-5 py-5 rounded-full"
        >
          Discover Our Services
          <MoveRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default Services;
