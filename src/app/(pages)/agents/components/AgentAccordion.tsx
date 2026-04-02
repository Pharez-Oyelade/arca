"use-client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const items = [
  {
    title: "Selected Not Hired",
    description:
      "Every advisor passes background checks, portfolio review, live market assessments, and client reference calls before joining. Most don't. The ones who do are committed to a level of excellence we can stand behind without qualification.",
  },
  {
    title: "Integrity Over Commission",
    description:
      "Our advisors are measured on client satisfaction scores — not transaction volume. That means they will tell you when a deal is wrong for you. It also means they will walk away from one. That kind of counsel is increasingly rare. We make it standard",
  },
  {
    title: "Genuine Local Depth",
    description:
      "Each agent covers a defined set of neighborhoods — not an entire city. When your advisor speaks about Hillcrest Gardens, they know every street, every planning application, every school catchment, and what comparable properties actually sold for last quarter.",
  },
  {
    title: "Data at Their Fingertips",
    description:
      "Proprietary market intelligence — price movement models, off-market inventory feeds, and daily-updated transaction data — backs every recommendation our advisors make. Their instincts are sharp. Their evidence is sharper.",
  },
  {
    title: "One Advisor, The Whole Journey",
    description:
      "No handoffs. No being passed to a junior at the critical moment. Your advisor is present from first viewing to final key handover. One relationship, complete accountability, and a single point of contact when it matters most.",
  },
];

const AgentAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState(new Set());

  const toogleAccordion = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };
  return (
    <section>
      <div className="">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-500 py-6 px-2">
            <div
              onClick={() => toogleAccordion(index)}
              className="flex justify-between items-center text-2xl mb-2"
            >
              {item.title}
              <Plus
                className={`${openIndexes.has(index) ? "rotate-45" : "rotate-0"} transition-transform duration-200 ease-in`}
              />
            </div>

            {openIndexes.has(index) && (
              <div className="mt-5 text-xl">{item.description}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgentAccordion;
