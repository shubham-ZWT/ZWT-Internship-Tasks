import React from "react";
import Image from "next/image";

export default function TheFutureIsHere() {
  return (
    <div className="relative w-full group">
      <Image
        src="/hero_bg.jpg"
        alt="Hero Background"
        width={1920}
        height={1080}
        className="w-full h-150 object-cover rounded-2xl"
      />

      <div className="absolute top-6 right-6">
        <p className="text-white font-medium text-lg">
          Possibilities are endless
        </p>
      </div>

      <div className="absolute bottom-6 left-6 max-w-xs">
        <h2 className="text-white text-3xl font-bold leading-tight">
          The future is here
        </h2>
        <p className="text-gray-200 mt-2">
          Exploring the boundaries of what is possible.
        </p>
      </div>
    </div>
  );
}
