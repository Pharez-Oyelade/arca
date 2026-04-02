"use client";

import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import { motion, useTransform, useScroll } from "motion/react";
import Image from "next/image";
import AgentGrid from "./components/AgentGrid";
import AgentAccordion from "./components/AgentAccordion";
import ContactCard from "@/app/components/ContactCard";
import ScrollReveal from "@/components/ScrollReveal";
import { agents } from "@/app/assets/agents";

const page = () => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "center center"],
  // });

  // const clipPath = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"],
  // );

  const [searchTerm, setSearchTerm] = useState("");
  const [displayedAgents, setDisplayedAgents] = useState(agents);
  const [activeSpeciality, setActiveSpeciality] = useState("all");

  // const handleSearch = (search: string) => {
  //   if (searchTerm.includes())
  // }

  const handleSpecialityFilter = (speciality: string) => {
    if (speciality === "all") {
      setDisplayedAgents(agents);
      setActiveSpeciality("all");
      return;
    }

    const filteredAgents = agents.filter(
      (agent) =>
        speciality.toLowerCase() === agent.speciality.toLowerCase() ||
        agent.speciality.toLowerCase().includes(speciality.toLowerCase()) ||
        agent.homeType.some((type) =>
          type.toLowerCase().includes(speciality.toLowerCase()),
        ),
    );
    setDisplayedAgents(filteredAgents);
    setActiveSpeciality(speciality);
  };
  return (
    <>
      <div className="px-5 md:px-10 lg:px-20">
        <div className="space-y-5">
          <h1 className="text-5xl font-bold">Meet Our Agents</h1>
          <p className="text-lg">
            Hand Selected Agents Dedicated to Finding You the Perfect Home
          </p>
        </div>

        <div className="mt-10 w-full md:w-[350px]">
          <div className="flex justify-between items-center pb-3 px-3 border-b-2 w-full">
            <input
              type="text"
              placeholder="Search agents..."
              className="outline-none focus:outline-none"
            />
            <Search className="cursor-pointer" />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-col xl:flex-row justify-between gap-5 md:gap-20 w-full">
            <motion.div
              initial={{
                clipPath: "inset(0% 50% 0% 50%)",
              }}
              animate={{
                clipPath: "inset(0% 0% 0% 0%)",
              }}
              transition={{
                duration: 1.5,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="w-full xl:w-[50%] overflow-hidden"
            >
              <Image
                src="/images/agent2.jpg"
                alt="agent"
                width={500}
                height={500}
                className="w-full"
              />
            </motion.div>

            <div className="w-full xl:w-[50%]">
              <div className="w-full">
                <ScrollReveal
                  baseOpacity={0.3}
                  enableBlur={true}
                  baseRotation={5}
                  blurStrength={4}
                  textClassName="text-gray-700 text-lg md:text-xl lg:text-2xl dark:text-gray-300"
                >
                  The person guiding you through one of the biggest decisions of
                  your life should be someone you can trust completely — not
                  just someone who is available. Every Arca advisor is
                  hand-selected for their market knowledge, their integrity, and
                  their track record of putting clients first. We assess each
                  one not just on what they have sold, but on how they sold it —
                  the relationships they built, the counsel they gave when it
                  was easier not to, and the clients who came back. If an
                  advisor wears the Arca name, it means something. We make sure
                  of it.
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* AGENTS GRID */}
        <div className="mt-10">
          <AgentGrid
            activeSpeciality={activeSpeciality}
            displayedAgents={displayedAgents}
            handleSpecialityFilter={handleSpecialityFilter}
          />
        </div>
      </div>

      {/* AGENT ACCORDION */}
      <div className="mt-10 flex flex-col gap-10 md:gap-5 md:flex-row justify-between bg-[#151717] px-10 py-20 md:px-20 text-white">
        <div>
          <h1 className="text-5xl w-full md:w-[75%] lg:w-[50%]">
            Not Every Agent is an{" "}
            <span className="text-gray-400">Arca Agent</span>
          </h1>
        </div>

        <div className="w-full md:w-[75%] lg:w-[50%]">
          <AgentAccordion />
        </div>
      </div>

      <div>
        <ContactCard
          header="Ready to find your perfect advisor?"
          text="Tell us what you need and we'll match you in under 24 hours."
          mainButtonText="GET MATCHED"
          secondaryButtonText="BROWSE LISTINGS"
        />
      </div>
    </>
  );
};

export default page;
