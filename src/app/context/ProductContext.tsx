"use client";

import React, { useState, createContext, useContext } from "react";
import { properties } from "../assets/properties";

type ProductContextType = {
  productId: string;
  setProductId: (id: string) => void;
  products: typeof properties;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [productId, setProductId] = useState("");
  const [products, setProducts] = useState(properties);

  const value: ProductContextType = { productId, setProductId, products };

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
