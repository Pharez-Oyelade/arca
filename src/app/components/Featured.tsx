"use client";
import React, { useEffect, useState } from "react";
import { properties } from "../assets/properties";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Map } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
  const [showFilters, setShowFilters] = useState(false);
  // const [filters, setFilters] = useState({
  //   propertyType: "All",
  //   forState: "All",
  // });

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
    <section className="py-10 md:py-16 lg:py-20 px-4 md:px-8 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div>
          <span className="text-xs md:text-sm uppercase font-gebuk font-bold">
            Exclusive Selection
          </span>
          {/* <h2 className="text-2xl md:text-3xl">
            Featured <span className="text-gray-500">Properties</span>
          </h2> */}
          <ScrollReveal
            baseOpacity={0.3}
            enableBlur={false}
            baseRotation={1}
            blurStrength={4}
            textClassName="text-2xl md:text-3xl"
          >
            Featured Properties
          </ScrollReveal>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
          <div className="text-sm md:text-base">View all listings</div>
        </div>
      </div>

      <article
        id="featured"
        className="flex flex-col md:flex-row gap-6 md:gap-10 mt-8 md:mt-10"
      >
        <aside
          className={`md:sticky md:top-10 md:h-fit w-full md:w-[25%] bg-gray-100 rounded-2xl p-4 md:p-5 space-y-4 md:space-y-5 ${showFilters ? "block" : "hidden md:block"}`}
        >
          <h3 className="font-bold text-sm md:text-md text-gray-600">
            REFINE SEARCH
          </h3>

          <div className="flex flex-col justify-between">
            <h4 className="pl-2 pb-2 text-sm md:text-base">For</h4>
            <div className="flex gap-2 items-center flex-wrap">
              {SALE_TYPES.map((sale) => (
                <div
                  onClick={() => setForState(sale)}
                  key={sale}
                  className={`${forState === sale ? "bg-black text-white border border-black" : "bg-transparent text-gray-400 border border-gray-400"} py-1 px-2 md:px-3 rounded-full hover:bg-black hover:text-white cursor-pointer transition-colors text-xs md:text-sm`}
                >
                  {sale}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="pl-2 pb-2 text-sm md:text-base">Type</h4>
            <div className="flex gap-2 items-center flex-wrap">
              {PROPERTY_TYPES.map((type) => (
                <div
                  onClick={() => setPropertyType(type)}
                  key={type}
                  className={`${propertyType === type ? "bg-black text-white border border-black" : "bg-transparent text-gray-400 border border-gray-400"} py-1 px-2 md:px-3 rounded-full hover:bg-black hover:text-white cursor-pointer transition-colors text-xs md:text-sm`}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            className="py-3 md:py-5 w-full md:w-auto"
            onClick={applyFilters}
          >
            Apply Filters
          </Button>
        </aside>

        {/* ............. FEATURED GRID ................... */}
        <main className="w-full md:w-[75%]">
          <span className="text-gray-500 mb-10">
            Showing {featuredProperty.length}{" "}
            {featuredProperty.length === 1 ? "property" : "properties"}
          </span>
          {featuredProperty.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">No properties found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
                  <span className="uppercase text-xs md:text-sm text-gray-500">
                    {property.type}
                  </span>
                  <h3 className="text-lg md:text-xl lg:text-2xl">
                    {property.name}
                  </h3>
                  <div className="text-xs md:text-sm text-gray-600">
                    <Map
                      className="inline mr-1"
                      size={14}
                      aria-label="location"
                    />
                    <span>{property.location}</span>
                  </div>

                  <div className="pt-3 md:pt-5 font-bold text-xs md:text-sm text-gray-700">
                    {property.bedrooms} beds | {property.bathrooms} baths |{" "}
                    {property.area} sqft
                  </div>

                  <div className="pt-1 md:pt-2 font-bold text-base md:text-lg">
                    ${property.price.toLocaleString()}
                    <sup className="text-gray-500 text-sm">
                      {property.saleType === "for sale" ? "USD" : "/mo"}
                    </sup>
                  </div>

                  <div className="absolute top-2 left-2 bg-black text-white py-1 px-3 md:px-5 rounded-2xl text-xs md:text-sm">
                    {property.saleType}
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </main>
      </article>
    </section>
  );
};

export default Featured;
