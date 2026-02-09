import React from "react";

export default function AboutMe() {
  return (
    <section className="w-full py-14 md:py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 text-[#212121]">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter  ">
            Here to Help You Achieve More{" "}
            <span className="italic font-source font-normal text-[#212121]">
              with Less Stress
            </span>
          </h2>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4 self-end">
          <h2 className="text-lg tracking-tight bg-[#212121] text-white w-fit px-4 py-1 rounded-full">
            About me
          </h2>
          <p className="text-base md:text-lg text-[#212121]">
            A{" "}
            <span className="bg-[#212121] text-white px-1">
              Full Stack Developer
            </span>{" "}
            with a passion for building{" "}
            <span> scalable, user-centric applications</span>. Beyond
            traditional development, I am a{" "}
            <span className="bg-[#212121] text-white px-1">
              Generative AI enthusiast, exploring how Large Language Models and
              RAG systems can transform digital experiences
            </span>
            . I bridge the gap between complex backend architecture and
            intuitive frontend design, ensuring every project is not just
            functional, but future-ready.
          </p>
        </div>
      </div>
    </section>
  );
}
