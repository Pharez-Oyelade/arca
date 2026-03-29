"use client";
import React, { useEffect, useState } from "react";
import { properties } from "../assets/properties";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Map } from "lucide-react";

interface Property {
  id: number;
  name: string;
  image: string;
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

const SALE_TYPES = ["All", "Buy", "Rent", "New Dev"] as const;

type SaleType = (typeof SALE_TYPES)[number];
type PropertyType = (typeof PROPERTY_TYPES)[number];

const Featured = () => {
  const [featuredProperty, setFeaturedProperty] = useState<Property[]>([]);
  const [forState, setForState] = useState<SaleType>("All");
  const [propertyType, setPropertyType] = useState<PropertyType>("All");
  const [filters, setFilters] = useState({
    propertyType: "All",
    forState: "All",
  });

  // TODO: add filters
  const applyFilters = () => {
    let filtered = properties.filter((property) => property.featured);

    if (forState !== "All") {
      filtered = filtered.filter((property) => {
        if (forState === "Buy")
          return (
            property.saleType === "for sale" || property.saleType === "new dev"
          );
        if (forState === "Rent") return property.saleType === "for rent";
        if (forState === "New Dev") return property.saleType === "new dev";
      });
    }

    if (propertyType !== "All") {
      filtered = filtered.filter(
        (property) =>
          property.type.toLowerCase() === propertyType.toLowerCase(),
      );
    }

    setFeaturedProperty(filtered);
  };

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

      <article id="featured" className="flex gap-10 mt-10">
        <aside className="sticky top-10 h-fit w-[25%] bg-gray-100 rounded-2xl p-5 space-y-5">
          <h3 className="font-bold text-md text-gray-600">REFINE SEARCH</h3>

          <div className="flex flex-col justify-between">
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

          <Button size="lg" className="py-5" onClick={applyFilters}>
            Apply Filters
          </Button>
        </aside>

        {/* ............. FEATURED GRID ................... */}
        <main className="w-[75%] grid grid-cols-3 gap-5">
          {featuredProperty.map((property) => (
            <div
              key={property.id}
              className="w-full h-full overflow-hidden rounded-lg shadow-lg relative group"
            >
              <div className="w-full h-[55%] overflow-hidden">
                <Image
                  src={property.image}
                  alt="property image"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="p-3 bg-white h-[40%]">
                <span className="uppercase text-sm text-gray-500">
                  {property.type}
                </span>
                <h3 className="text-2xl">{property.name}</h3>
                <div className="text-sm text-gray-600">
                  <Map
                    className="inline mr-1"
                    size={16}
                    aria-label="location"
                  />
                  <span>{property.location}</span>
                </div>

                <div className="pt-5 font-bold text-sm text-gray-700">
                  {property.bedrooms} beds | {property.bathrooms} baths |{" "}
                  {property.area} sqft
                </div>

                <div className="pt-2 font-bold text-lg">
                  ${property.price.toLocaleString()}
                  <sup className="text-gray-500">
                    {property.saleType === "for sale" ? "USD" : "/mo"}
                  </sup>
                </div>

                <div className="absolute top-2 left-2 bg-black text-white py-1 px-5 rounded-2xl">
                  {property.saleType}
                </div>
              </div>
            </div>
          ))}
        </main>
      </article>
    </section>
  );
};

export default Featured;
