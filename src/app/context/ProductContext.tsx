"use client";

import React, { useState, createContext, useContext } from "react";
import { properties } from "../assets/properties";

type ProductContextType = {
  productId: string;
  setProductId: (id: string) => void;
  products: typeof properties;
  saleType: string;
  setSaleType: (type: string) => void;
  applyFilters: () => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [productId, setProductId] = useState("");
  const [products, setProducts] = useState(properties);
  const [saleType, setSaleType] = useState("All");

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

  const value: ProductContextType = {
    productId,
    setProductId,
    products,
    saleType,
    setSaleType,
    applyFilters,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const ctx = useContext(ProductContext);
  if (!ctx)
    throw new Error("useProductContext must be used within ProductProvider");
  return ctx;
};
