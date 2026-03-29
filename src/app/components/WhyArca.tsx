import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

const WhyArca = () => {
  return (
    <section className="py-20 lg:py-30 px-4 md:px-8 lg:px-20 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 lg:gap-40">
        <div className="w-full font-bold text-2xl md:text-3xl lg:text-4xl">
          Why ARCA
        </div>
        <div>
          <ScrollReveal
            baseOpacity={0.3}
            enableBlur={true}
            baseRotation={5}
            blurStrength={4}
            textClassName="text-gray-700 text-lg md:text-xl lg:text-3xl dark:text-gray-300"
          >
            At Arca, we believe finding a home should feel as considered as the
            decision itself. Every listing on our platform is hand-reviewed, and
            every tool we build is designed to give you clarity — not pressure.
            Whether you're buying your first apartment or your fifth investment
            property, we're here to make sure the process is as exceptional as
            the property at the end of it.
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyArca;
