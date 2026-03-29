import Navbar from "@/components/layout/Navbar";
import React from "react";
import Hero from "./components/Hero";
import WhyArca from "./components/WhyArca";
import { Button } from "@/components/ui/button";
import Featured from "./components/Featured";
import Services from "./components/Services";

const page = () => {
  return (
    <div>
      <div className="hero-wrapper h-screen">
        <Navbar />
        <Hero />
      </div>

      <div>
        <div className="absolute -bottom-15 w-3/4 right-1/2 translate-x-1/2 bg-black/30 z-50 px-5 py-8 rounded-lg backdrop-blur-lg">
          <div className="flex items-center gap-5">
            <div className="w-1/5">
              <h3 className="text-sm font-bold text-gray-700 pl-5">LOCATION</h3>
              <form>
                <input
                  list="locations"
                  className="text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:outline-none px-5 py-1 rounded-2xl w-full"
                  placeholder="City, neighborhood, e.t.c"
                />
                <datalist id="locations">
                  <option value="City" />
                  <option value="Neighborhood" />
                  <option value="Country" />
                </datalist>
              </form>
            </div>
            <div className="w-1/5">
              <h3 className="text-sm font-bold text-gray-700 pl-5">TYPE</h3>
              <form>
                <input
                  list="types"
                  className="text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:outline-none px-5 py-1 rounded-2xl w-full"
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
            <div className="w-1/5">
              <h3 className="text-sm font-bold text-gray-700 pl-5">
                PRICE RANGE
              </h3>
              <form>
                <input
                  list="prices"
                  className="text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:outline-none px-5 py-1 rounded-2xl w-full"
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
            <div className="w-1/5">
              <h3 className="text-sm font-bold text-gray-700 pl-5">BEDROOMS</h3>
              <form>
                <input
                  list="bedrooms"
                  className="text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:outline-none px-5 py-1 rounded-2xl w-full"
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

            <div className="1/5 pl-10">
              <Button size="lg" className="px-10 py-5">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <WhyArca />
      <Featured />
      <Services />
    </div>
  );
};

export default page;
