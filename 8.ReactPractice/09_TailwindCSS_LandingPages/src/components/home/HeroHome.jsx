import React from "react";

export default function HeroHome() {
  return (
    <div className="w-full py-2 pt-20">
      <div className="relative max-w-7xl mx-auto px-5">
        <img
          src="home/hero_landing2.jpg"
          alt="Hero Landing Image"
          className="w-full h-[70vh] object-cover rounded-xl"
        />

        <div className="absolute inset-0 bg-black/30 rounded-xl mx-5"></div>

        <div className="absolute inset-0 flex flex-col items-center mt-30 text-white px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Unleash Your Inner Champion Today.
          </h1>
          <h3 className="text-xl md:text-2xl opacity-90 mt-2">
            All In One Place
          </h3>
          <p className="max-w-2xl mt-4 text-sm md:text-base opacity-80">
            From world-class clay courts to expert-led coaching clinics, we
            provide everything you need to elevate your game. Join a community
            where passion meets performance.
          </p>
          <button className="mt-8 text-[#0c192a] text-lg px-8 py-3 rounded-full bg-white font-medium hover:bg-gray-100 transition-colors">
            Start your own journey
          </button>
        </div>

        <div className="absolute bottom-8 left-12 flex items-center gap-3 text-white">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`home/u${i}.jpg`}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                alt="User"
              />
            ))}
          </div>
          <p className="text-xs leading-tight opacity-90">
            Join <span className="font-semibold">10k+</span> players <br />
            improving every day
          </p>
        </div>

        <div className="absolute bottom-8 right-12 text-white flex items-center gap-4 uppercase tracking-widest text-[10px] font-medium opacity-80">
          <span>Play</span>
          <span>Train</span>
          <span>Win</span>
        </div>
      </div>
    </div>
  );
}
