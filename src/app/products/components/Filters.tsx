"use client";

import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { properties } from "@/app/assets/properties";

const Filters = () => {
  const products = properties;

  const [saleDropdown, setSaleDropdown] = useState(false);
  const [saleType, setSaleType] = useState("");

  const uniqueLocations = Array.from(
    new Set(products.map((product) => product.location)),
  );
  return (
    <div className="flex gap-10 items-center">
      <div className="flex justify-between gap-3 pb-3 border-b-2 px-5">
        <input
          type="text"
          placeholder="Enter address"
          className="outline-none focus:outline-none"
        />
        <Search className="text-gray-500 cursor-pointer" size={18} />
      </div>

      {/* FILTER GROUP */}
      <div>
        <select name="location" id="location">
          {uniqueLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <div
          onClick={() => setSaleDropdown(!saleDropdown)}
          className="border px-3 py-2 flex items-center gap-5 cursor-pointer"
        >
          <span>{saleType || "For Sale"}</span>
          <ChevronDown size={18} />
        </div>
        {saleDropdown && (
          <div className="absolute top-full left-0 w-full border mt-2 p-2 bg-white">
            <div
              onClick={() => setSaleType("For Sale")}
              className="flex gap-2 items-center"
            >
              <input
                type="checkbox"
                name="saleType"
                value="For Sale"
                onChange={(e) => setSaleType(e.target.value)}
                checked={saleType === "For Sale"}
              />
              <label htmlFor="for-sale">For Sale</label>
            </div>
            <div
              onClick={() => setSaleType("For Rent")}
              className="flex gap-2 items-center"
            >
              <input
                type="checkbox"
                name="saleType"
                value="For Rent"
                onChange={(e) => setSaleType(e.target.value)}
                checked={saleType === "For Rent"}
              />
              <label htmlFor="for-rent">For Rent</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
