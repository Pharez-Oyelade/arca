"use client";
import React, { useEffect, useState } from "react";
import { properties } from "../assets/properties";
import { Button } from "@/components/ui/button";

interface Property {
  id: number;
  name: string;
  featured: boolean;
  type: string;
  saleType: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
}

const PROPERTY_TYPES = [
  "All",
  "House",
  "Penthouse",
  "Condo",
  "Studio",
  "Apartment",
  "Villa",
] as const;

const SALE_TYPES = ["Buy", "Rent", "New Dev"] as const;

type SaleType = (typeof SALE_TYPES)[number];
type PropertyType = (typeof PROPERTY_TYPES)[number];

const Featured = () => {
  const [featuredProperty, setFeaturedProperty] = useState<Property[]>([]);
  const [forState, setForState] = useState<SaleType>("Buy");
  const [propertyType, setPropertyType] = useState<PropertyType>("All");

  // TODO: add filters

  useEffect(() => {
    // filter properties for featured ones
    const featured = properties.filter((property) => property.featured);
    setFeaturedProperty(featured);
  }, []);
  return (
    <section className="py-20 px-20">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm uppercase font-gebuk font-bold">
            Exclusive Selection
          </span>
          <h2 className="text-3xl">
            Featured <span className="text-gray-500">Properties</span>
          </h2>
        </div>

        <div>View all listings </div>
      </div>

      <article id="featured" className="flex gap-5 mt-10">
        <aside className="sticky top-0 h-auto w-1/3 bg-gray-100 rounded-2xl p-5 space-y-5">
          <h3 className="font-bold text-md text-gray-600">REFINE SEARCH</h3>

          <div>
            <h4 className="pl-2 pb-2">For</h4>
            <div className="flex gap-2 items-center">
              {SALE_TYPES.map((sale) => (
                <div
                  onClick={() => setForState(sale)}
                  key={sale}
                  className={`${forState === sale ? "bg-black text-white border border-black" : "bg-transparent text-gray-400 border border-gray-400"} py-1 px-3 rounded-full hover:bg-black hover:text-white cursor-pointer transition-colors`}
                >
                  {sale}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="pl-2 pb-2">Type</h4>
            <div className="flex gap-2 items-center flex-wrap">
              {PROPERTY_TYPES.map((type) => (
                <div
                  onClick={() => setPropertyType(type)}
                  key={type}
                  className={`${propertyType === type ? "bg-black text-white border border-black" : "bg-transparent text-gray-400 border border-gray-400"} py-1 px-3 rounded-full hover:bg-black hover:text-white cursor-pointer transition-colors`}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>

          <Button>Apply Filters</Button>
        </aside>

        <main className="w-2/3 grid grid-cols-3 gap-3">
          {featuredProperty.map((property) => (
            <div key={property.id}></div>
          ))}
        </main>
      </article>
    </section>
  );
};

export default Featured;
