import React from "react";

export default function SmartFeatures() {
  return (
    <section className="bg-[#010001] text-white pl-15 pr-15 pb-25">
      <div className="text-center mb-10 pt-15">
        <h1 className="text-4xl font-bold">Smart features set us apart</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Discover the Technology, Convenience, and Peace Of Mind Built Into
          Every Step Of Your Journey.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div className="col-span-2 rounded-xl overflow-hidden relative">
          <img
            src="/car.jpg"
            alt="Family Car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <h2>Reliable and Affordable</h2>
            <p className="text-l text-gray-200">Options At Your Fingertips</p>
          </div>
        </div>

        <div className="col-span-1 bg-red-600 rounded-xl p-6 flex flex-col justify-between">
          <div className="self-end text-2xl text-red-600 font-bold bg-[#f7f6f6] pl-2 pr-2 pt-1 pb-1 rounded-xl">
            ↗
          </div>
          <div>
            <h3 className="font-semibold mb-2">Freedom to Rent Your Way</h3>
            <p className="text-sm text-red-100">
              Rent for hours or days — no commitments. Return or switch anytime.
            </p>
          </div>
        </div>

        <div className="col-span-1 bg-[#f7f6f6] rounded-xl p-6 flex flex-col justify-between">
          <div className="text-red-600">
            <h3 className="font-semibold mb-2">Comfort & Value</h3>
            <p className="text-sm">
              We maintain cars that offers Quality and Maintaiinability in every
              ride
            </p>
          </div>
          <div className="self-end text-2xl text-[#f7f6f6] font-bold bg-red-600 pl-2 pr-2 pt-1 pb-1 rounded-xl">
            ↗
          </div>
        </div>
      </div>
    </section>
  );
}
