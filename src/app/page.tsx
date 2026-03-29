import Navbar from "@/components/layout/Navbar";
import React from "react";
import Hero from "./components/Hero";
import WhyArca from "./components/WhyArca";
import { Button } from "@/components/ui/button";
import Featured from "./components/Featured";
import Services from "./components/Services";
import ContactCard from "./components/ContactCard";
import Testimonial from "./components/Testimonial";

const page = () => {
  return (
    <div>
      <div className="hero-wrapper h-screen rerlative">
        <Navbar />
        <Hero />
      </div>

      <div>
        <div className="absolute -bottom-10 md:-bottom-15 left-1/2 transform -translate-x-1/2 w-[90%] md:w-3/4 bg-black/30 z-50 px-4 md:px-5 py-6 md:py-8 rounded-lg backdrop-blur-lg">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5">
            <div className="w-full md:w-1/5">
              <h3 className="text-xs md:text-sm font-bold text-gray-700 pl-2 md:pl-5 mb-1">
                LOCATION
              </h3>
              <form>
                <input
                  list="locations"
                  className="text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:outline-none px-3 md:px-5 py-2 md:py-1 rounded-2xl w-full text-sm md:text-base"
                  placeholder="City, neighborhood, e.t.c"
                />
                <datalist id="locations">
                  <option value="City" />
                  <option value="Neighborhood" />
                  <option value="Country" />
                </datalist>
              </form>
            </div>
            <div className="w-full md:w-1/5">
              <h3 className="text-xs md:text-sm font-bold text-gray-700 pl-2 md:pl-5 mb-1">
                TYPE
              </h3>
              <form>
                <input
                  list="types"
                  className="text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:outline-none px-3 md:px-5 py-2 md:py-1 rounded-2xl w-full text-sm md:text-base"
                  placeholder="Any Type"
                />
                <datalist id="types">
                  <option value="Any Type" />
                  <option value="Apartment" />
                  <option value="House" />
                  <option value="Penthouse" />
                  <option value="Condo" />
                  <option value="Studio" />
                </datalist>
              </form>
            </div>
            <div className="w-full md:w-1/5">
              <h3 className="text-xs md:text-sm font-bold text-gray-700 pl-2 md:pl-5 mb-1">
                PRICE RANGE
              </h3>
              <form>
                <input
                  list="prices"
                  className="text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:outline-none px-3 md:px-5 py-2 md:py-1 rounded-2xl w-full text-sm md:text-base"
                  placeholder="Any Price"
                />
                <datalist id="prices">
                  <option value="Any Price" />
                  <option value="Under $500K" />
                  <option value="$500K - $1M" />
                  <option value="$1M - $3M" />
                  <option value="Over $3M" />
                </datalist>
              </form>
            </div>
            <div className="w-full md:w-1/5">
              <h3 className="text-xs md:text-sm font-bold text-gray-700 pl-2 md:pl-5 mb-1">
                BEDROOMS
              </h3>
              <form>
                <input
                  list="bedrooms"
                  className="text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:outline-none px-3 md:px-5 py-2 md:py-1 rounded-2xl w-full text-sm md:text-base"
                  placeholder="Any"
                />
                <datalist id="bedrooms">
                  <option value="Any" />
                  <option value="Studio" />
                  <option value="1+" />
                  <option value="2+" />
                  <option value="3+" />
                  <option value="4+" />
                </datalist>
              </form>
            </div>

            <div className="w-full md:w-1/5 md:pl-4 lg:pl-10">
              <Button
                size="lg"
                className="w-full md:w-auto px-8 md:px-10 py-3 md:py-5"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <WhyArca />
      <Featured />
      <Services />
      <ContactCard />
      <Testimonial />
    </div>
  );
};

export default page;
