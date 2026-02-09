import React from "react";

export default function Cards() {
  return (
    <section className="bg-[#212121] text-[#f8f8f8] px-6 md:px-15 pb-25">
      <div className="text-center mb-16 pt-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter ">
          The approach that sets{" "}
          <span className="italic font-light font-source tracking-tight ">
            me apart
          </span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Combining technical precision with creative strategy to build digital
          experiences that don't just look good, but perform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 flex flex-col justify-between min-h-[300px] transition-colors group">
          <div className="self-end text-xl text-black font-bold bg-[#f8f8f8] px-3 py-1 rounded-xl   transition-colors">
            ↗
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3 tracking-tighter">
              Scalable Architecture
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I write clean, modular code that scales. Your project is built to
              grow without the technical debt of "quick fixes."
            </p>
          </div>
        </div>

        <div className="bg-[#f8f8f8] rounded-2xl p-8 flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-black tracking-tighter">
              Speed & SEO
            </h3>
            <p className="text-black/80 leading-relaxed">
              Performance isn't an afterthought. I optimize every pixel for
              lightning-fast load times and search engine visibility.
            </p>
          </div>
          <div className="self-end text-xl text-[#f8f8f8] font-bold bg-[#212121] px-3 py-1 rounded-xl">
            ↗
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 className="text-2xl font-bold mb-3 tracking-tighter">
              User-Centric Design
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I bridge the gap between design and development, ensuring that
              user experience remains the top priority throughout.
            </p>
          </div>
          <div className="self-end text-xl text-black font-bold bg-[#f8f8f8] px-3 py-1 rounded-xl ">
            ↗
          </div>
        </div>
      </div>
    </section>
  );
}
