"use client";

import { useProductContext } from "@/app/context/ProductContext";
import { useParams } from "next/navigation";
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { Map, Send, Phone, Bath, Bed, Ratio } from "lucide-react";
import { Button } from "@/components/ui/button";
import calculateMortgage from "@/lib/mortgage";
import { Slider } from "@/components/ui/slider";

const page = () => {
  const params = useParams();
  const { id } = params;

  const { products } = useProductContext();
  const idNum = Number(id);
  const product = products.find((p) => p.id === idNum);

  const [payment, setPayment] = useState(720000);
  const [interest, setInterest] = useState(5.5);
  const [term, setTerm] = useState(25);

  const [inputs, setInputs] = useState({
    homePrice: Number(product?.price),
    downPayment: payment,
    interestRate: interest,
    loanTerm: term,
  });

  useEffect(() => {
    setInputs({
      homePrice: Number(product?.price),
      downPayment: payment,
      interestRate: interest,
      loanTerm: term,
    });
  }, [payment, interest, term, product?.price]);

  const monthlyPayment = useMemo(() => {
    return calculateMortgage(inputs);
  }, [inputs]);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <section className="">
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={900}
          height={900}
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

      {/* Mortgage section */}
      <div className="flex flex-col-reverse xl:flex-row justify-between gap-10 mt-10 w-full">
        <div className="w-full xl:w-[60%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3949.361102773584!2d4.267344108489999!3d8.16632656084548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1775177721967!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>

        {/* Mortgage calculator */}
        {product.saleType === "for sale" && (
          <div className="bg-[#151717] text-white w-full xl:w-[40%] h-full p-10 rounded-2xl">
            <h3 className="text-lg">Mortgage Calculator</h3>
            <p className="text-xs text-gray-500">
              Get a rough sense of monthly payments
            </p>

            {/* Mortgage sliders */}
            <div className="mt-5 space-y-5">
              {/* Down payment slider */}
              <div>
                <label className="flex justify-between text-sm font-medium mb-2">
                  <span>Down Payment</span>
                  <span>${payment.toLocaleString()}</span>
                </label>
                <Slider
                  value={[payment]}
                  onValueChange={(value) => setPayment(value[0])}
                  max={product?.price || 1000000}
                  min={0}
                  step={1000}
                  className="w-full"
                />
              </div>

              {/* Interest rate slider  */}
              <div>
                <label className="flex justify-between text-sm font-medium mb-2">
                  <span>Interest Rate</span>
                  <span>${interest}%</span>
                </label>
                <Slider
                  value={[interest]}
                  onValueChange={(value) => setInterest(value[0])}
                  max={10}
                  min={1}
                  step={0.1}
                  className="w-full"
                />
              </div>

              {/* Loan term slider */}
              <div>
                <label className="flex justify-between text-sm font-medium mb-2">
                  <span>Loan Term</span>
                  <span>${term} years</span>
                </label>
                <Slider
                  value={[term]}
                  onValueChange={(value) => setTerm(value[0])}
                  max={30}
                  min={5}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>

            {/* Monthly payment display */}
            <div className="mt-10 bg-white/10 py-10 flex flex-col gap-3 justify-center items-center text-center rounded-xl">
              <p className="uppercase text-sm">Est. Monthly Payment</p>
              <p className="font-bold text-2xl">
                ${monthlyPayment.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">
                Indicative only · Speak to a mortgage advisor
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default page;
