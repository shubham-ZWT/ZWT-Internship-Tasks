import React from "react";
import { FaJs, FaPython, FaHtml5, FaCss3, FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb, SiPostman } from "react-icons/si";

export default function Experties() {
  return (
    <section className="w-full py-18 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-center text-[#212121]">
          Expertise
        </h3>

        <div className="flex flex-col gap-6 items-center md:items-start">
          <div className="flex flex-col md:flex-row items-center border border-black px-6 py-4 rounded-3xl gap-4 md:gap-6 w-full md:w-auto">
            <span className="text-[#212121] font-bold whitespace-nowrap text-lg">
              Programming
            </span>

            <div className="hidden md:block h-8 w-[1px] bg-black/20" />

            <div className="flex flex-wrap justify-center items-center gap-5 text-2xl md:text-3xl">
              <FaHtml5 className="hover:text-orange-600 transition-colors" />
              <FaCss3 className="hover:text-blue-600 transition-colors" />
              <FaJs className="hover:text-yellow-500 transition-colors" />
              <FaPython className="hover:text-blue-500 transition-colors" />
              <BiLogoPostgresql className="hover:text-blue-800 transition-colors" />
              <SiMongodb className="hover:text-green-600 transition-colors" />
              <FaGithub className="hover:text-gray-600 transition-colors" />
              <SiPostman className="hover:text-orange-500 transition-colors" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center border border-black px-6 py-4 rounded-3xl gap-4 md:gap-6 w-full md:w-auto">
            <span className="text-[#212121] font-bold whitespace-nowrap text-lg">
              Gen AI Skills
            </span>
            <div className="hidden md:block h-8 w-[1px] bg-black/20" />
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "MCP",
                "LangChain",
                "LangGraph",
                "RAG Systems",
                "Vector DBs",
                "Prompt Engineering",
              ].map((skill) => (
                <p
                  key={skill}
                  className="bg-[#212121] text-white px-4 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center border border-black px-6 py-4 rounded-3xl gap-4 md:gap-6 w-full md:w-auto">
            <span className="text-black font-bold whitespace-nowrap text-lg">
              Out of Work
            </span>
            <div className="hidden md:block h-8 w-[1px] bg-black/20" />
            <div className="flex flex-wrap justify-center gap-2">
              {["Photography and Cinematography", "Pc Gaming"].map((skill) => (
                <p
                  key={skill}
                  className="border border-black text-black px-4 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
