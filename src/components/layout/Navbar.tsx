"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { X, Equal } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`px-4 md:px-8 lg:px-20 py-3 flex justify-between items-center relative ${isOpen ? "bg-white md:bg-transparent" : "bg-transparent"} transition-colors duration-300 ease-in-out`}
    >
      <Link href="/" className="">
        <h1 className="font-logo font-bold text-2xl md:text-3xl lg:text-4xl">
          ARCA
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <div className="flex gap-8 items-center text-lg lg:text-xl font-medium">
          <div className="overflow-hidden h-8 group flex flex-col gap-0">
            <Link
              href="#"
              className="cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Search
            </Link>
            <Link
              href="#"
              className="cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Search
            </Link>
          </div>
          <div className="overflow-hidden h-8 group flex flex-col gap-0">
            <Link
              href="#"
              className="cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Agents
            </Link>
            <Link
              href="#"
              className="cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Agents
            </Link>
          </div>
          <div className="overflow-hidden h-8 group flex flex-col gap-0">
            <Link
              href="#"
              className="cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Buy
            </Link>
            <Link
              href="#"
              className="cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Buy
            </Link>
          </div>
          <div className="overflow-hidden h-8 group flex flex-col gap-0">
            <Link
              href="#"
              className="cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Rent
            </Link>
            <Link
              href="#"
              className="cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Rent
            </Link>
          </div>
          <div className="overflow-hidden h-8 group flex flex-col gap-0">
            <Link
              href="#"
              className="cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Resources
            </Link>
          </div>
          <div className="overflow-hidden h-8 group flex flex-col gap-0">
            <Link
              href="#"
              className="cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              About
            </Link>
            <Link
              href="#"
              className="cursor-pointer group-hover:text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              About
            </Link>
          </div>
        </div>
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
        {isOpen ? <X /> : <Equal />}
      </button>

      {/* Mobile Navigation */}

      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-[200%]"}`}
      >
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
    </header>
  );
};

export default Navbar;
