import Navbar from "@/components/layout/Navbar";
import React from "react";
import Hero from "./components/Hero";
import WhyArca from "./components/WhyArca";

const page = () => {
  return (
    <>
      <div className="hero-wrapper h-screen">
        <Navbar />
        <Hero />
      </div>

      <WhyArca />
    </>
  );
};

export default page;
