"use client";

import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 flex w-full justify-between bg-gruvbox-dark-bg1 px-56 py-4 pt-6"
      initial={{ y: -100, filter: "blur(3px)" }}
      animate={{ y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.8 , duration: 0.3 }}
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
