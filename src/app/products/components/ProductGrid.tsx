import React, { useState } from "react";
// import { properties } from "@/app/assets/properties";
import Image from "next/image";
import { Dot } from "lucide-react";
import Link from "next/link";

const ProductGrid = ({ products }: { products: any[] }) => {
  const PROPERTY_PER_PAGE = 12;

  // const { products } = useProductContext();

  const properties = products;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * PROPERTY_PER_PAGE;
  const endIndex = startIndex + PROPERTY_PER_PAGE;

  const displayedProperties = properties.slice(startIndex, endIndex);

  const totalPages = Math.ceil(properties.length / PROPERTY_PER_PAGE);

  // NAVIGATION HANDLERS
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  // Generate pagination buttons with smart truncation
  const getPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5; // Show up to 5 page numbers

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      // Always show first page
      buttons.push(1);

      // Calculate range around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      // Add ellipsis if there's a gap after first page
      if (start > 2) {
        buttons.push("...");
      }

      // Add pages around current page
      for (let i = start; i <= end; i++) {
        buttons.push(i);
      }

      // Add ellipsis if there's a gap before last page
      if (end < totalPages - 1) {
        buttons.push("...");
      }

      // Always show last page (if different from first)
      if (totalPages > 1) {
        buttons.push(totalPages);
      }
    }

    return buttons;
  };

  return (
    <div className="mt-10 md:mt-20">
      <div className="flex justify-between items-center">
        <span className="tracking-tighter">
          Showing {startIndex + 1}-{endIndex} of {properties.length} Results
        </span>
        <div>
          <span>Sort:</span>
          <select name="sort" id="sort">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-5">
        {displayedProperties.map((property) => (
          <div key={property.id} className="w-full mb-5 group">
            <Link href={`/products/${property.id}`}>
              <div className="w-full h-[300px] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.name}
                  width={700}
                  height={700}
                  className="group-hover:scale-105 w-full h-full transition-all duration-300 ease-in-out"
                />
              </div>
            </Link>

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
              <p className="text-base">{property.location}</p>
            </div>

            <div className="pt-5">
              <Link
                href={`/products/${property.id}`}
                className="border-b-2 border-gray-800 text-sm font-medium pb-2 cursor-pointer"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="px-3 py-2 border border-gray-300 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Prev
        </button>

        {getPaginationButtons().map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="px-2 py-2 text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => goToPage(page as number)}
              className={`px-3 py-2 border rounded-2xl ${
                currentPage === page
                  ? "bg-amber-600 text-white border-amber-600"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-2 border border-gray-300 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
