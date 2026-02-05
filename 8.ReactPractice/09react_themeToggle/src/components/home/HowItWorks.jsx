import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosBookmark } from "react-icons/io";
import { FaCar } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <div className="bg-[#010001] flex flex-col text-white items-center pl-15 pr-15 gap-2 pb-15">
      <div className="text-center mb-12 mt-25">
        <h1 className="text-4xl font-bold">How It Works</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ullam
          perspiciatis exercitationem aliquam. Quisquam, reiciendis quas
          quibusdam optio soluta ducimus fugiat expedita alias nostrum
          necessitatibus ab natus explicabo aliquam ipsa?
        </p>
      </div>

      <div className="flex justify-between gap-3 max-w-7xl mx-auto">
        <div className="flex flex-col rounded-xl p-3 bg-[#1d1c1c] gap-4">
          <div className="flex flex-col gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-[#530100] flex items-center justify-center">
              <FaSearch className="text-white" />
            </div>

            <h2>Search</h2>
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nisi impedit adipisci tempore odit neque, laudantium, inventore autem, ipsum exercitationem saepe sit labore quo quasi accusamus suscipit. Cum, eius consectetur?
          </p>
        </div>
        <div className="flex flex-col rounded-xl p-3 bg-[#1d1c1c] gap-4">
          <div className="flex flex-col gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-[#530100] flex items-center justify-center">
              <FaLocationArrow className="text-white" />
            </div>
            <h2>Select</h2>
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nisi impedit adipisci tempore odit neque, laudantium, inventore autem, ipsum exercitationem saepe sit labore quo quasi accusamus suscipit. Cum, eius consectetur?
          </p>
        </div>
        <div className="flex flex-col rounded-xl p-3 bg-[#1d1c1c] gap-4">
          <div className="flex flex-col gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-[#530100] flex items-center justify-center">
              <IoIosBookmark className="text-white" />
            </div>
            <h2>Book</h2>
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nisi impedit adipisci tempore odit neque, laudantium, inventore autem, ipsum exercitationem saepe sit labore quo quasi accusamus suscipit. Cum, eius consectetur?
          </p>
        </div>
        <div className="flex flex-col rounded-xl p-3 bg-[#1d1c1c] gap-4">
          <div className="flex flex-col gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-[#530100] flex items-center justify-center">
              <FaCar className="text-white" />
            </div>
            <h2>Drive</h2>
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nisi impedit adipisci tempore odit neque, laudantium, inventore autem, ipsum exercitationem saepe sit labore quo quasi accusamus suscipit. Cum, eius consectetur?
          </p>
        </div>
      </div>
    </div>
  );
}
