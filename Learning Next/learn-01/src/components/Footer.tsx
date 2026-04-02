"use client";

import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const footerLinks = {
    Company: [
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-soft-gray border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-primary">Logo</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Discover the latest innovations and explore the possibilities of
              tomorrow&apos;s technology. From AI to blockchain, we bring you
              insights.
            </p>

            <div className="flex flex-row gap-3 mt-2">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} />
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([groupName, links]) => (
            <div key={groupName} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                {groupName}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Logo. All rights reserved.</p>

          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
