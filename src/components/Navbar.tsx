"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-50 left-0 flex w-full transition-all justify-between px-4 md:px-12 lg:px-56 ${
        scrolled
          ? "bg-gruvbox-dark-bg2/30 py-3 md:py-4 backdrop-blur-3xl border-b-2 border-gruvbox-dark-bg2 shadow-md"
          : "bg-gruvbox-dark-bg2/20 backdrop-blur-sm py-4 md:py-5"
      }`}
      initial={{ y: -100, filter: "blur(3px)" }}
      animate={{ y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {/* Logo */}
      <span className="text-xl md:text-2xl font-extrabold text-gruvbox-light-bg0">
        Mallar B.
      </span>

      {/* Navigation */}
      <nav className="font-black text-gruvbox-light-bg0">
        <ul className="flex space-x-4 md:space-x-12">
          <li className="text-sm md:text-base">home</li>
          <li className="text-sm md:text-base">about</li>
          <li className="text-sm md:text-base">contact</li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
