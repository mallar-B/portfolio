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
      className={`fixed top-0 z-50 left-0 flex w-full transition-all justify-between px-56 ${scrolled ? "bg-gruvbox-dark-bg2/10 py-4 backdrop-blur-3xl" : "bg-gruvbox-dark-bg1 py-5"} `}
      initial={{ y: -100, filter: "blur(3px)" }}
      animate={{ y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.8, duration: 0.3 }}
    >
      <span className="text-2xl font-extrabold text-gruvbox-light-bg0">
        Mallar B.
      </span>
      <nav className="font-black text-gruvbox-light-bg0">
        <ul className="flex space-x-12">
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
