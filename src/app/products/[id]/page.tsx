"use client";

import { useProductContext } from "@/app/context/ProductContext";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Map, Send, Phone, Bath, Bed, Ratio } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      {/* PRODUCT DETAILS */}
      <div className="flex justify-between items-center py-5">
        <div>
          <div className="flex gap-2">
            <div className="border-2 py-1 px-3 capitalize rounded-full">
              {product.type}
            </div>
            <div className="border-2 py-1 px-3 capitalize border-green-500 rounded-full">
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
        </div>

        {/* Contact */}
        <div className="flex items-center gap-2">
          <Button size="lg" className="p-6 rounded-full">
            Book a Viewing
          </Button>
          <Button
            variant="outline"
            size="icon-lg"
            className="border-2 rounded-full p-5 text-2xl flex items-center justify-center"
          >
            <Send />
          </Button>
          <Button
            variant="outline"
            size="icon-lg"
            className="border-2 rounded-full p-5 text-2xl flex items-center justify-center"
          >
            <Phone />
          </Button>
        </div>
      </div>

      <hr />

      {/* PRICE */}
      <div className="py-10 flex justify-between items-center">
        <h2 className="font-bold text-5xl tracking-wider">
          ${product.price.toLocaleString()}
        </h2>

        <div className="flex items-center gap-30">
          <div className="flex flex-col gap-3">
            <Bath className="text-gray-600" />
            <span>{product.bathrooms} Baths</span>
          </div>
          <div className="flex flex-col gap-3">
            <Bed className="text-gray-600" />
            <span>{product.bedrooms} Beds</span>
          </div>
          <div className="flex flex-col gap-3">
            <Ratio className="text-gray-600" />
            <span>{product.area} SqFt</span>
          </div>
        </div>
      </div>

      <hr />
    </section>
  );
};

export default page;
