import React from "react";
import {
  HiOutlineArrowTopRightOnSquare,
  HiXMark,
  HiBars3,
} from "react-icons/hi2";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className="max-w-7xl mx-auto
      flex justify-between items-center
      px-5 py-4 bg-white p-5"
      >
        <div>
          <h1 className="text-xl font-bold text-[#0c192a]">Horizon Courts</h1>
        </div>

        <div className="hidden md:flex flex-row gap-8 text-[#0c192a] font-medium">
          <p className="cursor-pointer hover:text-blue-600 transition">
            About Us
          </p>
          <p className="cursor-pointer hover:text-blue-600 transition">
            Services
          </p>
          <p className="cursor-pointer hover:text-blue-600 transition">
            Coaches
          </p>
          <p className="cursor-pointer hover:text-blue-600 transition">
            Events
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex bg-[#0c192a] text-white px-5 py-2 rounded-full items-center gap-2">
            Book now
            <HiOutlineArrowTopRightOnSquare />
          </button>

          <button
            className="md:hidden text-3xl text-[#0c192a]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white w-full border-gray-100 flex flex-col px-5 gap-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 py-5 border-t"
            : "max-h-0 opacity-0 py-0 border-t-0"
        }`}
      >
        <p className="text-lg font-medium border-b border-gray-50 pb-2">
          About Us
        </p>
        <p className="text-lg font-medium border-b border-gray-50 pb-2">
          Services
        </p>
        <p className="text-lg font-medium border-b border-gray-50 pb-2">
          Coaches
        </p>
        <p className="text-lg font-medium border-b border-gray-50 pb-2">
          Events
        </p>
        <button className="bg-[#0c192a] text-white p-3 rounded-xl flex justify-center items-center gap-2 mt-2">
          Book now
          <HiOutlineArrowTopRightOnSquare />
        </button>
      </div>
    </div>
  );
}
