import React from "react";
import { Button } from "@/components/ui/button";

type ContactCardProps = {
  header: string;
  text: string;
  mainButtonText: string;
  secondaryButtonText?: string;
  mainLink?: string;
  secondaryLink?: string;
};

const ContactCard = ({
  header,
  text,
  mainButtonText,
  secondaryButtonText,
  mainLink,
  secondaryLink,
}: ContactCardProps) => {
  return (
    <div className="py-10 md:py-16 lg:py-20 px-4 md:px-8 lg:px-20">
      <div className="bg-amber-700 flex flex-col md:flex-row justify-between items-center rounded-4xl py-10 md:py-16 lg:py-20 px-4 md:px-6 lg:px-10 text-white relative overflow-hidden">
        <div className="space-y-2 mb-6 md:mb-0">
          <h3 className="text-2xl md:text-3xl lg:text-4xl w-full md:w-2/3">
            {header}
          </h3>
          <p className="text-gray-300 text-sm md:text-base">{text}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <a href={mainLink || "#"}>
            <Button
              variant="secondary"
              size="lg"
              className="py-4 md:py-6 lg:py-7 px-4 md:px-5 rounded-full text-amber-700"
            >
              {mainButtonText}
            </Button>
          </a>
          <a href={secondaryLink || "#"}>
            <Button
              variant="outline"
              size="lg"
              className="py-4 md:py-6 lg:py-7 px-4 md:px-5 rounded-full text-white bg-transparent"
            >
              {secondaryButtonText}
            </Button>
          </a>
        </div>

        <div className="absolute -top-6 -right-10 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] rounded-full bg-white/20 pointer-events-none" />
        <div className="absolute bottom-2 right-4 md:right-10 lg:right-20 w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] rounded-full bg-white/20 pointer-events-none" />
      </div>
    </div>
  );
};

export default ContactCard;
