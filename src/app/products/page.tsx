"use client";

import React, { useState, useEffect } from "react";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import { properties } from "../assets/properties";

const page = () => {
  const [saleType, setSaleType] = useState("");
  const [saleDropdown, setSaleDropdown] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const [products, setProducts] = useState(properties);

  // Apply Filters
  const applyFilters = () => {
    let filteredProducts = properties;

    if (saleType === "All") {
      filteredProducts = properties;
    }

    if (saleType === "For Sale") {
      filteredProducts = filteredProducts.filter(
        (product) => product.saleType === "for sale",
      );
    } else if (saleType === "For Rent") {
      filteredProducts = filteredProducts.filter(
        (product) => product.saleType === "for rent",
      );
    }
    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [saleType]);
  return (
    <div>
      <Filters
        products={properties}
        saleType={saleType}
        setSaleType={setSaleType}
        saleDropdown={saleDropdown}
        setSaleDropdown={setSaleDropdown}
        isMobileFiltersOpen={isMobileFiltersOpen}
        setIsMobileFiltersOpen={setIsMobileFiltersOpen}
      />
      <div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default page;
