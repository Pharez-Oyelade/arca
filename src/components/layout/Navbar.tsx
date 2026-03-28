import Link from "next/link";
import { Button } from "../ui/button";
import React from "react";

const Navbar = () => {
  return (
    <header className="px-20 py-3 flex justify-between items-center">
      <Link href="/">
        <h1 className="font-prepspe font-bold text-4xl">ARCA</h1>
      </Link>

      <nav>
        <ul className="flex gap-8 items-center text-xl font-medium">
          <li>Search</li>
          <li>Agents</li>
          <li>Buy</li>
          <li>Rent</li>
          <li>Resources</li>
          <li>About</li>
        </ul>
      </nav>

      <Button size="lg" className="rounded-4xl">
        Sign In
      </Button>
    </header>
  );
};

export default Navbar;
