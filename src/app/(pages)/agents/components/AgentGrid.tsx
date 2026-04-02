"use client";

import React, { useState } from "react";
import { agents } from "@/app/assets/agents";
import Image from "next/image";
import { Star } from "lucide-react";

const SPECIALITIES = [
  "all",
  "luxury",
  "rentals",
  "investment",
  "new dev",
  "commercial",
  "relocation",
];

const AgentGrid = () => {
  const [displayedAgents, setDisplayedAgents] = useState(agents);
  const [activeSpeciality, setActiveSpeciality] = useState("all");

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
    <section id="agent-grid">
      <div className="mt-20 mb-5">
        <h1 className="text-3xl font-bold">
          OUR <span className="text-gray-400">AGENTS</span>
        </h1>
      </div>

      {/* Speciality Filter */}
      <div className="my-5 sticky top-0 left-0 bg-white/20 z-10 py-5 w-full backdrop-blur-2xl">
        <div className="flex gap-2 items-center">
          <p className="uppercase">Speciality</p>
          <div className="flex gap-2">
            {SPECIALITIES.map((speciality) => (
              <div
                onClick={() => handleSpecialityFilter(speciality)}
                className={`border px-5 py-1 uppercase text-sm font-medium cursor-pointer ${
                  activeSpeciality === speciality
                    ? "bg-black text-white"
                    : "text-gray-500"
                }`}
                key={speciality}
              >
                {speciality}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end mb-5">
        <p className="text-sm text-gray-500">
          {displayedAgents.length}{" "}
          {displayedAgents.length === 1 ? "Agent" : "Agents"}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-0">
        {displayedAgents.map((agent) => (
          <div key={agent.id} className="border py-15 px-10 h-auto relative">
            <div className="pb-10">
              <div className="w-[100px] h-[100px] overflow-hidden border-2 rounded-full">
                <Image
                  src={agent.image}
                  width={900}
                  height={900}
                  alt={agent.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Agent Name */}
              <h3 className="text-2xl font-semibold mt-4 tracking-wide">
                {agent.name}
              </h3>
              <p className="uppercase font-medium text-gray-400 text-sm">
                {agent.speciality}
              </p>
            </div>

            <hr />

            {/* Agent Stats */}
            <div className="flex justify-center items-center gap-5 my-10">
              <div className="text-center border-r pr-5">
                {agent.stats.sold ? (
                  <>
                    <p className="font-semibold text-xl">{agent.stats.sold}</p>
                    <p className="text-xs uppercase font-semibold text-gray-500">
                      Sold
                    </p>
                  </>
                ) : agent.stats.closed ? (
                  <>
                    <p className="font-semibold text-xl">
                      {agent.stats.closed}
                    </p>
                    <p className="text-xs uppercase font-semibold text-gray-500">
                      Closed
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-xl">
                      {" "}
                      {agent.stats.placed}
                    </p>
                    <p className="text-xs uppercase font-semibold text-gray-500">
                      Placed
                    </p>
                  </>
                )}
              </div>

              {/* Experience */}
              <div className="text-center border-r pr-5">
                <p className="font-semibold text-xl">
                  {agent.stats.yearsExperience}yr
                </p>
                <p className="text-xs uppercase font-semibold text-gray-500">
                  Exp.
                </p>
              </div>

              {/* Rating */}
              <div className="text-center">
                <p className="font-semibold text-xl flex items-center gap-1 justify-center">
                  {agent.stats.rating}
                  <Star fill="#000" />
                </p>
                <p className="text-xs uppercase font-semibold text-gray-500">
                  Rating
                </p>
              </div>
            </div>

            {/* Home type */}
            <div className="flex flex-wrap gap-2">
              {agent.homeType.map((type, index) => (
                <div
                  key={index}
                  className="border px-5 uppercase text-xs font-medium text-gray-500"
                >
                  {type}
                </div>
              ))}
            </div>

            {/* Special Detail */}
            <div className="my-5">
              <p className="text-sm text-gray-500">
                <span className="text-black font-semibold">
                  {agent.specialDetail}
                </span>{" "}
                avg. {agent.specialDetailType}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-5 flex gap-5 w-full FLEX-WRAP">
              <button className="flex-1 w-3/4 bg-black text-white py-2 px-10 cursor-pointer">
                CONTACT
              </button>
              <button className="bg-transparent border py-2 px-5 cursor-pointer">
                PROFILE
              </button>
            </div>

            <div className="absolute top-10 right-5">
              {agent.available ? (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <p className="text-xs text-green-500">AVAILABLE</p>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-500" />
                  <p className="text-xs text-gray-500">BUSY</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgentGrid;
