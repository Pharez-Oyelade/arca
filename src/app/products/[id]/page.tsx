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
    <section className="px-4 md:px-8 lg:px-20">
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={700}
          className="w-full h-full object-cover"
        ></Image>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-5 gap-4">
        <div className="w-full md:w-auto">
          <div className="flex flex-wrap gap-2">
            <div className="border-2 py-1 px-3 capitalize rounded-full text-sm">
              {product.type}
            </div>
            <div className="border-2 py-1 px-3 capitalize border-green-500 rounded-full text-sm">
              {product.saleType}
            </div>
          </div>

          <div className="pt-2">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold">
              {product.name}
            </h1>

            <div className="flex gap-2 items-center">
              <Map className="text-gray-600 w-4 h-4 md:w-5 md:h-5" />
              <p className="text-sm md:text-base">{product.location}</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full md:w-auto">
          <Button
            size="lg"
            className="w-full md:w-auto p-4 md:p-6 rounded-full text-sm md:text-base"
          >
            Book a Viewing
          </Button>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon-lg"
              className="border-2 rounded-full p-3 md:p-5 text-lg md:text-2xl flex items-center justify-center w-12 h-12 md:w-auto md:h-auto"
            >
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon-lg"
              className="border-2 rounded-full p-3 md:p-5 text-lg md:text-2xl flex items-center justify-center w-12 h-12 md:w-auto md:h-auto"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </div>

      <hr />

      {/* PRICE */}
      <div className="py-6 md:py-8 lg:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider">
          ${product.price.toLocaleString()}
        </h2>

        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <div className="flex flex-col gap-2 items-center">
            <Bath className="text-gray-600 w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">
              {product.bathrooms} Baths
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Bed className="text-gray-600 w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">
              {product.bedrooms} Beds
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Ratio className="text-gray-600 w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">{product.area} SqFt</span>
          </div>
        </div>
      </div>

      {/* <hr /> */}

      {/* DESCRIPTION */}
      <div className="py-6 md:py-8 lg:py-10 flex flex-col md:flex-row justify-between gap-4">
        <h2 className="font-semibold text-2xl md:text-3xl tracking-wider">
          About <br /> <span className="text-gray-300">this home</span>
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl w-full md:w-[500px] lg:w-[700px]">
          {product.description}
        </p>
      </div>

      <hr />

      {/* OTHER DETAILS */}
      <div className="py-10 md:py-16 lg:py-20 flex flex-col md:flex-row justify-between gap-4">
        <h2 className="font-semibold text-2xl md:text-3xl tracking-wider">
          Other <br /> <span className="text-gray-300">details</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 w-full md:w-[500px] lg:w-[700px]">
          <div>
            <span className="text-sm text-gray-500">Property Type</span>
            <p className="capitalize text-lg md:text-xl">{product.type}</p>
          </div>

          <div>
            <span className="text-sm text-gray-500">Total Area</span>
            <p className="capitalize text-lg md:text-xl">{product.area}</p>
          </div>

          <div>
            <span className="text-sm text-gray-500">Year Built</span>
            <p className="capitalize text-lg md:text-xl">
              {product.details.yearBuilt}
            </p>
          </div>

          <div>
            <span className="text-sm text-gray-500">Floors</span>
            <p className="capitalize text-lg md:text-xl">
              {product.details.floors}
            </p>
          </div>

          <div>
            <span className="text-sm text-gray-500">Parking</span>
            <p className="capitalize text-lg md:text-xl">
              {product.details.parking ? product.details.parking : "No"}
            </p>
          </div>

          <div>
            <span className="text-sm text-gray-500">Furnished</span>
            <p className="capitalize text-lg md:text-xl">
              {product.details.furnished ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
