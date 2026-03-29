"use client";

import { useProductContext } from "@/app/context/ProductContext";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  const { id } = params;

  const { products } = useProductContext();
  const idNum = Number(id);
  const product = products.find((p) => p.id === idNum);
  return <div>page</div>;
};

export default page;
