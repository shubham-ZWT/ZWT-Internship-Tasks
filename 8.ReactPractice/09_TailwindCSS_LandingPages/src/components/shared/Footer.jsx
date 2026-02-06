import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#0c1a2c] w-full text-white px-5 py-10 md:py20">
      <div className="max-w-7xl mx-auto">
        {/* join us section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-16 border-b  ">
          {/* Left Side ka Content */}
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-2xl md:text-3xl max-w-md leading-tight">
              Join a vibrant tennis community where your journey toward better
              skills and new friendships begins today.
            </h2>
            <button className="bg-[#38bdf8] hover:bg-sky-400 text-white px-8 py-3 rounded-full font-medium transition-colors ">
              Buy Membership
            </button>
          </div>

          {/* Right side ka content  */}
          <div className="md:flex md:flex-col md:items-start gap-4">
            <p className="text-gray-400 text-sm">Follow us</p>
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              {["Instagram", "Facebook", "Youtube"].map((platform) => (
                <button
                  key={platform}
                  className="bg-black/40 border border-gray-800 px-6 py-2 rounded-full text-sm hover:bg-black/60 transition"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 py-16">
          <div className="md:col-span-2 lg:col-span-3">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">
              Horizon Courts
            </h1>
          </div>

          {/* About Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-400 font-medium">About</h4>
            <nav className="flex flex-col gap-2 text-sm opacity-80">
              <a href="#" className="hover:opacity-100">
                Services
              </a>
              <a href="#" className="hover:opacity-100">
                Coaches
              </a>
              <a href="#" className="hover:opacity-100">
                Events
              </a>
              <a href="#" className="hover:opacity-100">
                Membership
              </a>
            </nav>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-400 font-medium">Contact</h4>
            <div>
              <p>
                123 Pacific Drive
                <br />
                Santa Monica, CA 90401
              </p>
              <p className="mt-2">Open daily: 7:00 AM – 10:00 PM</p>
              <p>(310) 555-7890</p>
            </div>
          </div>
        </div>

        {/* Bar */}
        <div className="flex justify-between items-center text-xs text-gray-500 pt-8 border-t border-gray-800">
          <p>© 2025 Copyright</p>
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
