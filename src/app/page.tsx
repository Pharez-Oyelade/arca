import Navbar from "@/components/layout/Navbar";
import React from "react";
import Hero from "./components/Hero";

const page = () => {
  return (
    <>
      <div className="hero-wrapper h-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default page;
