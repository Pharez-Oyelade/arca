"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import React, { useEffect, useState } from "react";
import { X, Equal } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // disable scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // sticky nav on sctroll with background change after scrolling 200px and only when scrollwd down
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200 && currentScrollY < lastScrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="navbar"
      className={`px-4 md:px-8 lg:px-20 py-3 flex justify-between items-center ${isOpen ? "bg-white md:bg-transparent" : "bg-transparent"} transition-colors duration-500 ease-in-out ${isScrolled ? "bg-white shadow-md fixed top-0 right-0 w-full z-999" : "relative"}`}
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
              className="cursor-pointer transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Search
            </Link>
            <Link
              href="/products"
              className="cursor-pointer transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Search
            </Link>
          </div>
          <div className="overflow-hidden h-8 group flex flex-col gap-0">
            <Link
              href="#"
              className="cursor-pointer transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Agents
            </Link>
            <Link
              href="/agents"
              className="cursor-pointer transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Agents
            </Link>
          </div>
          <div className="overflow-hidden h-8 group flex flex-col gap-0">
            <Link
              href="#"
              className="cursor-pointer transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Buy
            </Link>
            <Link
              href="#"
              className="cursor-pointer transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Buy
            </Link>
          </div>
          <div className="overflow-hidden h-8 group flex flex-col gap-0">
            <Link
              href="#"
              className="cursor-pointer transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Rent
            </Link>
            <Link
              href="#"
              className="cursor-pointer transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Rent
            </Link>
          </div>
          <div className="overflow-hidden h-8 group flex flex-col gap-0">
            <Link
              href="#"
              className="cursor-pointer transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="cursor-pointer transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              Resources
            </Link>
          </div>
          <div className="overflow-hidden h-8 group flex flex-col gap-0">
            <Link
              href="#"
              className="cursor-pointer transition-all duration-300 ease-in-out group-hover:-translate-y-full"
            >
              About
            </Link>
            <Link
              href="#"
              className="cursor-pointer transition-all duration-300 ease-in-out group-hover:-translate-y-full"
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
        onClick={() => setIsOpen(false)}
        className={`absolute top-full left-0 right-0 bg-black/50 backdrop-blur-2xl h-screen w-full z-[999] ${isOpen ? "translate-y-0" : "-translate-y-[200%]"} transition-transform duration-500 ease-in-out`}
      >
        <div
          className={`bg-white transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-[200%]"}`}
        >
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-4 text-lg font-medium">
              <li>
                <a href="/products">Search</a>
              </li>
              <li>
                <a href="/agents">Agents</a>
              </li>
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
      </div>
    </header>
  );
};

export default Navbar;
