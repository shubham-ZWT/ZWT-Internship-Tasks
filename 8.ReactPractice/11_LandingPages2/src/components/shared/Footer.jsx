import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-app-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 items-start gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h4 className="text-xl font-bold">Quick Links</h4>
          <nav className="text-sm flex flex-col gap-2 opacity-80">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#" className="hover:text-gray-400">
              Experience
            </a>
            <a href="#" className="hover:text-gray-400">
              Blogs
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-4xl md:text-5xl font-bold">Shubham Patel</h2>
          <p className="text-sm opacity-80">
            Email: shubhampatel0513@gmail.com
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-4 items-center">
          <p className="text-xl font-bold">Get in Touch</p>
          <div className="flex flex-col md:items-end gap-2 text-sm opacity-80">
            <a href="#" className="hover:text-gray-400 text-nowrap">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gray-400 text-nowrap">
              GitHub
            </a>
            <a href="#" className="hover:text-gray-400 text-nowrap">
              X / Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
