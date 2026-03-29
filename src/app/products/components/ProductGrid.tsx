import React from "react";
import { properties } from "@/app/assets/properties";
import Image from "next/image";
import { Dot } from "lucide-react";

const ProductGrid = () => {
  const PROPERTY_PER_PAGE = 12;
  const displayedProperties = properties.slice(0, PROPERTY_PER_PAGE);

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center">
        <span className="tracking-tighter">{properties.length} Results</span>
        <div>
          <span>Sort:</span>
          <select name="sort" id="sort">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 w-full mt-5">
        {displayedProperties.map((property) => (
          <div key={property.id} className="w-full mb-5 group">
            <div className="w-full h-[250px] overflow-hidden">
              <Image
                src={property.image}
                alt={property.name}
                width={700}
                height={700}
                className="group-hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>

            <div className="pt-5">
              <h3 className="text-lg font-medium">{property.name}</h3>
              <div className="">
                <p className="font-bold text-2xl">
                  ${property.price.toLocaleString()}
                  <sup className="font-bold text-sm text-gray-600">
                    {property.saleType === "for sale" ? "USD" : "/mo"}
                  </sup>
                </p>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <span className="capitalize">{property.type}</span>
                <Dot />
                {property.bedrooms} bds
                <Dot />
                {property.bathrooms} ba
                <Dot />
                {property.area} sqft
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
