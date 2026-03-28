import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

const WhyArca = () => {
  return (
    <section className="py-30 px-20 w-full">
      <div className="flex justify-between items-start gap-40">
        <div className="w-full font-bold">Why ARCA</div>
        <div>
          <ScrollReveal
            baseOpacity={0.3}
            enableBlur={true}
            baseRotation={5}
            blurStrength={4}
            textClassName="w-full text-2xl font-medium leading-relaxed text-gray-700 dark:text-gray-300"
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
