import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-[#151717] text-white py-10 px-20">
      <div className="flex justify-between">
        <div>
          <Link href="/" className="font-logo text-9xl">
            Arca
          </Link>
          <p className="w-[400px]">
            Connecting people with exceptional properties. We don't just find
            you a house — we find you a home.
          </p>
          <div className="flex justify-between gap-5 mt-20">
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
        <div className="text-3xl">
          <ul className="flex flex-col gap-1">
            <li className="cursor-pointer">Buy</li>
            <li className="cursor-pointer">Rent</li>
            <li className="cursor-pointer">Our Agents</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer">Facebook</li>
            <li className="cursor-pointer">Twitter</li>
            <li className="cursor-pointer">Instagram</li>
            <li className="cursor-pointer">Linkedin</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <div className="text-gray-500 flex gap-5 items-center">
          <p>Terms</p>
          <p>Privacy Policy</p>
          <p>Help Center</p>
          <p>Press</p>
          <p>Contact</p>
        </div>
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Arca Real Estate. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
