"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setIsMenuOpened(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.header
        id="navbar"
        className={`fixed top-0 z-50 left-0 flex flex-col w-full transition-all justify-between px-4 md:px-12 lg:px-48 ${
          scrolled
            ? "bg-gruvbox-dark-bg2/30 py-3 md:py-4 backdrop-blur-3xl border-b-2 border-gruvbox-dark-bg2 shadow-md"
            : "bg-gruvbox-dark-bg2/20 backdrop-blur-sm py-4 md:py-5"
        }`}
        initial={{ y: -100, filter: "blur(3px)" }}
        animate={{ y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="#hero">
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              alt="Logo"
              className="w-20 md:hidden self-start translate-y-1 sm:translate-0"
            />
            <span className="text-xl md:text-3xl font-extrabold text-gruvbox-dark-fg0 hidden md:block">
              Mallar B.
            </span>
          </Link>

          {/* Navigation */}
          <nav className="font-black text-gruvbox-dark-fg0">
            <ul className="sm:flex space-x-4 md:space-x-6 items-center justify-evenly hidden">
              {/* <li className="md:text-base"> */}
              {/*   <Link href="#hero" className="sm:text-base md:text-xl"> */}
              {/*     Home */}
              {/*   </Link> */}
              {/* </li> */}
              <li className="md:text-base">
                <Link href="#about" className="sm:text-base md:text-xl">
                  About
                </Link>
              </li>
              <li className="md:text-base">
                <Link href="#projects" className="sm:text-base md:text-xl">
                  Projects
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

            {/* Mobile hamburger menu button */}
            <div className="flex items-center justify-center sm:hidden">
              <div className="-translate-x-3">
                <ThemeToggle />
              </div>

              <button
                onClick={() => setIsMenuOpened((state) => !state)}
                className="relative z-40 w-10 h-10 flex items-center justify-center overflow-hidden"
              >
                <AnimatePresence mode="popLayout">
                  {isMenuOpened ? (
                    <motion.div
                      key="hamburger"
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CgClose size={30} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <RxHamburgerMenu size={30} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile navigation menu */}
        <AnimatePresence>{isMenuOpened && <MobileMenu onClick={() => setIsMenuOpened(false)} />}</AnimatePresence>
      </motion.header>

      {/* Backdrop*/}
      <AnimatePresence>
        {isMenuOpened && (
          <motion.div
            key="backdrop"
            className="fixed top-0 left-0 w-full h-screen bg-black/10 z-30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpened(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
