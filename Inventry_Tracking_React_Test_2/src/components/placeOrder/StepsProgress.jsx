import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export default function StepsProgress({ step }) {
  return (
    <div className="flex flex-row justify-center">
      <div className="bg-green-200  flex flex-row gap-4 px-4 py-2 rounded-lg font-semibold">
        <p
          className={`flex items-center gap-1 text-${step <= 1 ? "blue-700" : "green-600"}`}
        >
          <span>
            {step <= 1 ? (
              <FaDotCircle />
            ) : (
              <IoCheckmarkDoneCircle className="text-xl text-green-600" />
            )}
          </span>
          Step 1
        </p>
        <p
          className={`flex items-center gap-1 text-${step <= 2 ? "blue-600" : "green-600"}`}
        >
          <span>
            {step <= 2 ? (
              <FaDotCircle />
            ) : (
              <IoCheckmarkDoneCircle className="text-xl text-green-600" />
            )}
          </span>
          Step 2
        </p>
        <p
          className={`flex items-center gap-1 text-${step <= 3 ? "blue-600" : "green-600"}`}
        >
          <span>
            {step <= 3 ? (
              <FaDotCircle />
            ) : (
              <IoCheckmarkDoneCircle className="text-xl text-green-600" />
            )}
          </span>
          Step 3
        </p>
      </div>
    </div>
  );
}
