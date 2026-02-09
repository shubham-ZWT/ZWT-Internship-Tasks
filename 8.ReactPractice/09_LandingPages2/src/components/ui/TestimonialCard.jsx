import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi"; // Optional: adds a nice quote icon

export default function TestimonialCard({ clientName, review }) {
  return (
    <div className=" border border-black/80 rounded-2xl p-6  flex flex-col gap-4">
      <BiSolidQuoteAltLeft className="text-3xl text-black/50 " />

      <p className="text-base md:text-lg leading-relaxed italic">"{review}"</p>

      <div className="mt-auto pt-4 border-t border-black/10">
        <h4 className="font-bold text-xl tracking-tight italic">
          — {clientName}
        </h4>
      </div>
    </div>
  );
}
