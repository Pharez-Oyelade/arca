import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#151717] text-white py-6 md:py-8 lg:py-10 px-4 md:px-8 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-0">
        <div className="w-full md:w-auto">
          <Link href="/" className="font-logo text-4xl md:text-6xl lg:text-9xl">
            Arca
          </Link>
          <p className="w-full md:w-[300px] lg:w-[400px] mt-4">
            Connecting people with exceptional properties. We don't just find
            you a house — we find you a home.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-5 mt-10 md:mt-16 lg:mt-20">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm text-gray-500">Head Office</h4>
              <p>7 Main Street, Somewhere</p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm text-gray-500">Email Us</h4>
              <a
                href="mailto:pharezoyelade@gmail.com"
                className="hover:underline"
              >
                pharezoyelade@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm text-gray-500">Call Us</h4>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl w-full md:w-auto mt-6 md:mt-0">
          <ul className="flex flex-col gap-1">
            <li className="cursor-pointer">Buy</li>
            <li className="cursor-pointer">Rent</li>
            <li className="cursor-pointer">Our Agents</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>
        <div className="w-full md:w-auto mt-6 md:mt-0">
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer">Facebook</li>
            <li className="cursor-pointer">Twitter</li>
            <li className="cursor-pointer">Instagram</li>
            <li className="cursor-pointer">Linkedin</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 md:mt-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="text-gray-500 flex flex-col md:flex-row gap-2 md:gap-5 items-center text-center md:text-left">
          <p>Terms</p>
          <p>Privacy Policy</p>
          <p>Help Center</p>
          <p>Press</p>
          <p>Contact</p>
        </div>
        <p className="text-gray-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} Arca Real Estate. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
