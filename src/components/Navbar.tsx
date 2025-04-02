"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Image from "next/image";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");
  const getTheme = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    } else {
      const t =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      return t;
    }
  };

  useEffect(() => {
    // running inside useEffect so no hydration error
    setTheme(() => getTheme());
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <DarkModeSwitch
      moonColor="#fbf1c7"
      sunColor="#282828"
      checked={theme === "dark"}
      onChange={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      style={{ margin: "0px 0px 0px 10px" }}
    />
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-50 left-0 flex w-full transition-all justify-between px-4 md:px-12 lg:px-48 ${
        scrolled
          ? "bg-gruvbox-dark-bg2/30 py-3 md:py-4 backdrop-blur-3xl border-b-2 border-gruvbox-dark-bg2 shadow-md"
          : "bg-gruvbox-dark-bg2/20 backdrop-blur-sm py-4 md:py-5"
      }`}
      initial={{ y: -100, filter: "blur(3px)" }}
      animate={{ y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {/* Logo */}
      <Image src="/logo.svg" width={40} height={40} alt="Logo" className="w-20 md:hidden" />
      <span className="text-xl md:text-3xl font-extrabold text-gruvbox-dark-fg0 hidden md:block">
        Mallar B.
      </span>

      {/* Navigation */}
      <nav className="font-black text-gruvbox-dark-fg0">
        <ul className="flex space-x-4 md:space-x-6 items-center justify-evenly">
          <li className="md:text-base">
            <Link href="#hero" className="sm:text-base md:text-xl">
              Home
            </Link>
          </li>
          <li className="md:text-base">
            <Link href="#about" className="sm:text-base md:text-xl">
              About
            </Link>
          </li>
          <li className="md:text-base">
            <Link href="#contact" className="sm:text-base md:text-xl">
              Contact
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
