import React, { useState } from "react"; // 1. Import useState
import { FaArrowRight } from "react-icons/fa";
import { HiXMark, HiBars3 } from "react-icons/hi2";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to track mobile menu

  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Projects", href: "/projects" },
    { id: 3, name: "Experience", href: "/experience" },
    { id: 4, name: "Blogs", href: "/blogs" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-app-light-bg/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center p-5 text-[#212121]">
        <h1 className="font-bold text-2xl md:text-3xl ">Shubham Patel</h1>

        <div className="hidden md:flex flex-row gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className="relative cursor-pointer group py-0.5 font-medium"
              href={link.href}
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#212121] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button name={"Contact Us"} icon={<FaArrowRight />} />
        </div>

        <button
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </div>

      <div
        className={`
        absolute top-full left-0 w-full bg-[#f8f8f8] border-b border-gray-600 p-5 flex flex-col gap-4 transition-all duration-300 md:hidden
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            className="text-lg font-medium py-2 border-b border-black/30"
            href={link.href}
          >
            {link.name}
          </a>
        ))}
        <div className="pt-4">
          <Button name={"Contact Us"} icon={<FaArrowRight />} />
        </div>
      </div>
    </div>
  );
}
