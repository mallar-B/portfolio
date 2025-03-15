"use client";
import Navbar from "@/components/Navbar";
import { motion } from "motion/react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Home() {
  return (
    <main className="h-screen bg-gruvbox-dark-bg0">
      <Navbar />
      <section className="flex h-screen flex-col items-center justify-center bg-gruvbox-dark-bg">
        <motion.div
          initial={{ filter: "blur(3px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col items-start"
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="p-1 text-2xl text-gruvbox-dark-fg2 font-bold"
          >
            Hello, I'm
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl text-gruvbox-dark-aqua font-bold"
          >
            Mallar Bhattacharya
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="self-center pt-2 font-mono text-xl text-gruvbox-dark-orange"
          >
            Full Stack Developer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              stiffness: 80,
            }}
            className="self-center flex justify-around w-1/2 mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 bg-gruvbox-dark-orange border-gruvbox-dark-orange py-2.5 px-4 rounded-sm"
            >
              Let's Connect
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 text-gruvbox-dark-orange border-gruvbox-dark-orange py-2.5 px-4 rounded-sm"
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gruvbox-dark-fg3 "
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaAngleDoubleDown size={28}/>
        </motion.div>
      </section>
    </main>
  );
}
