import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col bg-[#181819] pl-15 pr-15 pb-5">
      <div className="bg-[#181819] grid grid-cols-6 gap-6">
        <div className="col-span-2 flex flex-col gap-2 text-white pt-10 ">
          <h2 className="font-bold text-4xl">RideLux</h2>
          <p>Experience comfort, style and reliability every time you drive</p>

          <div className="flex flex-row gap-2 text-2xl mt-5">
            <IoLogoFacebook />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-2 text-white pt-10 ">
          <h2 className="font-medium text-xl">Quick Links</h2>
          <a href="/#">Home</a>
          <a href="/#">About Us</a>
          <a href="/#">Blogs</a>
          <a href="/#">Contact Us</a>
        </div>

        <div className="col-span-2 flex flex-col gap-2 text-white pt-10 ">
          <h2 className="font-medium text-xl">Contact</h2>
          <p>A-501, MildStore Complex new Ahmedabad 123456 </p>
        </div>

        <div className="col-span-1 flex flex-col gap-2 pt-10">
          <button className="bg-[#dbdadb] rounded text-[#181819] p-1">
            Email Us
          </button>
          <button className="bg-[#ff0201] rounded text-[#f7f6f6] p-1">
            Subscribe
          </button>
        </div>
      </div>
      
      <div className="border-t border-white/20 mt-10 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">
          {/* Left text */}
          <p>© 2025 RideLux. All Rights Reserved.</p>

          {/* Right links */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
