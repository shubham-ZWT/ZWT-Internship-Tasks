import React, { useEffect, useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-300
    ${scrolled ? "bg-[#f7f6f6] shadow-md" : "bg-transparent"}
  `}
      >
        <div
          className={`
      max-w-7xl mx-auto
      flex justify-between items-center
      px-5 py-4
      ${scrolled ? "text-red-600" : "text-white"}
    `}
        >
          <h3 className="text-xl font-bold cursor-pointer">RideLux</h3>

          <div className="flex gap-4 cursor-pointer">
            <p className="hover:underline underline-offset-3">Home</p>
            <p className="hover:underline underline-offset-3">About Us</p>
            <p className="hover:underline underline-offset-3">Blogs</p>
            <p className="hover:underline underline-offset-3">Contact us</p>
          </div>

          <div className="flex gap-5 cursor-pointer">
            <FaSearch />
            <FaUser />
          </div>
        </div>
      </div>
    </>
  );
}
