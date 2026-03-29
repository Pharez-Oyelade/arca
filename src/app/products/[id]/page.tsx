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

      {/* <hr /> */}

      {/* DESCRIPTION */}
      <div className="py-10 flex justify-between">
        <h2 className="font-semibold text-3xl tracking-wider">
          About <br /> <span className="text-gray-300">this home</span>
        </h2>
        <p className="text-2xl w-[700px]">{product.description}</p>
      </div>

      <hr />

      {/* OTHER DETAILS */}
      <div className="py-20 flex justify-between">
        <h2 className="font-semibold text-3xl tracking-wider">
          Other <br /> <span className="text-gray-300">details</span>
        </h2>

        <div className="grid grid-cols-3 gap-10 w-[700px]">
          <div>
            <span className="text-sm text-gray-500">Property Type</span>
            <p className="capitalize text-xl">{product.type}</p>
          </div>

          <div>
            <span className="text-sm text-gray-500">Total Area</span>
            <p className="capitalize text-xl">{product.area}</p>
          </div>

          <div>
            <span className="text-sm text-gray-500">Year Built</span>
            <p className="capitalize text-xl">{product.details.yearBuilt}</p>
          </div>

          <div>
            <span className="text-sm text-gray-500">Floors</span>
            <p className="capitalize text-xl">{product.details.floors}</p>
          </div>

          <div>
            <span className="text-sm text-gray-500">Parking</span>
            <p className="capitalize text-xl">
              {product.details.parking ? product.details.parking : "No"}
            </p>
          </div>

          <div>
            <span className="text-sm text-gray-500">Furnished</span>
            <p className="capitalize text-xl">
              {product.details.furnished ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
