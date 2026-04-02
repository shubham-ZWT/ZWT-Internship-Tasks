"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const handleNavClick = () => setMenuOpen(false);

  return (
    <div className="sticky top-0 z-50 bg-soft-gray">
      <div className="h-20 flex items-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center w-full max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-primary">Logo</h1>

          <div className="hidden lg:flex flex-row gap-6 items-center font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  `relative text-gray-700 hover:text-primary group transition-colors` +
                  (isActive(item.href) ? " text-primary" : "")
                }
              >
                {item.name}

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <div className="flex items-center gap-3 px-4 py-1 border border-gray-400 rounded-full text-gray-500 max-w-60 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
              <FaSearch className="shrink-0" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </div>

          <button
            className="lg:hidden text-primary p-2 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu" 
          >
            {menuOpen ? (
              <RiCloseLine className="text-2xl" />
            ) : (
              <RiMenu3Line className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 pb-6 pt-2 border-t border-gray-200 gap-1 max-w-7xl mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
              className={`py-3 px-2 text-base font-medium rounded-md transition-colors border-b border-gray-100 last:border-none ${
                isActive(item.href)
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex items-center gap-3 px-4 py-2 mt-3 border border-gray-400 rounded-full text-gray-500 w-full focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
            <FaSearch className="shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
