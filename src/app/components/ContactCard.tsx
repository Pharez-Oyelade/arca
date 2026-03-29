import React from "react";
import { Button } from "@/components/ui/button";

const ContactCard = () => {
  return (
    <div className="py-20 px-40">
      <div className="bg-amber-700 flex justify-between items-center rounded-4xl py-20 px-10 text-white relative overflow-hidden">
        <div className="space-y-2">
          <h3 className="text-4xl w-2/3">Ready to find your perfect space?</h3>
          <p className="text-gray-300">
            Talk to an advisor today — no commitment, just clarity.
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            variant="secondary"
            size="lg"
            className="py-7 px-5 rounded-full text-amber-700"
          >
            Get in Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="py-7 px-5 rounded-full text-white bg-transparent"
          >
            View All Listings
          </Button>
        </div>

        <div className="absolute -top-6 -right-10 w-[250px] h-[250px] rounded-full bg-white/20 pointer-events-none" />
        <div className="absolute bottom-2 right-20 w-[150px] h-[150px] rounded-full bg-white/20 pointer-events-none" />
      </div>
    </div>
  );
};

export default ContactCard;
