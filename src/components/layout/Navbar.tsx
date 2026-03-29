"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-4 md:px-8 lg:px-20 py-3 flex justify-between items-center relative">
      <Link href="/" className="">
        <h1 className="font-logo font-bold text-2xl md:text-3xl lg:text-4xl">
          ARCA
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 items-center text-lg lg:text-xl font-medium">
          <li>Search</li>
          <li>Agents</li>
          <li>Buy</li>
          <li>Rent</li>
          <li>Resources</li>
          <li>About</li>
        </ul>
      </nav>

      {/* Desktop Sign In */}
      <Button size="lg" className="hidden md:block rounded-4xl">
        Sign In
      </Button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-4 text-lg font-medium">
              <li>Search</li>
              <li>Agents</li>
              <li>Buy</li>
              <li>Rent</li>
              <li>Resources</li>
              <li>About</li>
            </ul>
            <div className="mt-4">
              <Button size="lg" className="w-full rounded-4xl">
                Sign In
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
