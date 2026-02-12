import React from "react";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <div className="w-full mt-32 md:mt-48 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 text-center items-center">
        <p className="text-base md:text-lg italic font-source opacity-80">
          Full Stack Developer & Gen AI Strategist
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-[1.1] max-w-4xl ">
          Work Smarter, <br className="hidden md:block" /> Not Harder
        </h1>

        <p className="text-sm md:text-base opacity-80 max-w-sm md:max-w-2xl">
          I bridge the gap between robust Full Stack architecture and the
          transformative power of Generative AI. From high-performance
          interfaces to custom RAG pipelines, I build products that are fast,
          secure, and future-ready.
        </p>

        <div className="mt-4">
          <Link to={"/projects"}>
            <Button name={"Explore Projects"} icon={<FaArrowRight />} />
          </Link>
        </div>
      </div>
    </div>
  );
}
