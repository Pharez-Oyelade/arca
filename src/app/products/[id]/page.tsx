"use client";

import { useProductContext } from "@/app/context/ProductContext";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Map } from "lucide-react";

const page = () => {
  const params = useParams();
  const { id } = params;

  const { products } = useProductContext();
  const idNum = Number(id);
  const product = products.find((p) => p.id === idNum);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <section>
      <div className="w-full h-[600px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={700}
          className="w-full h-full"
        ></Image>
      </div>

      <div className="pt-5 flex gap-2">
        <div className="border-2 py-2 px-5 capitalize rounded-full">
          {product.type}
        </div>
        <div className="border-2 py-2 px-5 capitalize border-green-500 rounded-full">
          {product.saleType}
        </div>
      </div>

      <div className="pt-2">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <div className="flex gap-2">
          <Map className="text-gray-600" />
          <p>{product.location}</p>
        </div>
      </div>
    </section>
  );
};

export default page;
