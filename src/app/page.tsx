"use client";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Home() {
  const scrollValue = useScroll();
  const indicatorOpacity = useTransform(scrollValue.scrollY, [0, 200], [1, 0]);
  const gridSize = 58; 
  const [numCols, setNumCols] = useState(0);
  const [numRows, setNumRows] = useState(0);

  useEffect(() => {
    const updateGrid = () => {
      setNumCols(Math.ceil(window.innerWidth / gridSize));
      setNumRows(Math.ceil(window.innerHeight / gridSize));
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, [gridSize]);

  return (
    <main className="h-screen bg-gruvbox-dark-bg ">
      <Navbar />
      <div className="absolute w-full h-screen overflow-hidden inset-0 bg-gradient-to-t from-gruvbox-dark-bg2/10 to-transparent">
        {/* Vertical Grid Lines */}
        {Array.from({ length: numCols }).map((_, i) => (
          <motion.div
            key={`v-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: i * 0.05 }}
            className="absolute top-0 bottom-0 w-px bg-gruvbox-dark-fg"
            style={{ left: `${i * gridSize}px` }}
          />
        ))}

        {/* Horizontal Grid Lines */}
        {Array.from({ length: numRows }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.1 }} // Delays each line
            className="absolute left-0 right-0 h-px bg-gruvbox-dark-fg"
            style={{ top: `${i * gridSize}px` }}
          />
        ))}
      </div>
      <section className="flex h-screen flex-col items-center justify-center">
        <motion.div
          initial={{ filter: "blur(3px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col items-start backdrop-blur-none"
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="p-1 text-2xl text-gruvbox-dark-fg2 font-bold shadow-gruvbox-dark-bg0 shadow-2xl"
          >
            Hello, I'm
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl text-gruvbox-dark-aqua font-bold  shadow-gruvbox-dark-bg shadow-2xl"
          >
            Mallar Bhattacharya
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="self-center pt-2 px-10 font-mono text-xl text-gruvbox-dark-orange  shadow-gruvbox-dark-bg0 shadow-2xl"
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
            className="self-center flex justify-around w-1/2 mt-4  bg-gruvbox-dark-bg shadow-gruvbox-dark-bg0 shadow-2xl"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer border-2 bg-gruvbox-dark-orange border-gruvbox-dark-orange py-2.5 px-4 rounded-sm"
            >
              Let's Connect
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer border-2 text-gruvbox-dark-orange border-gruvbox-dark-orange py-2.5 px-4 rounded-sm"
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gruvbox-dark-fg3 "
          initial={{ opacity: 0, repeatCount: 1 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, y: { repeat: Infinity, duration: 1.5 } }}
          style={{ opacity: indicatorOpacity }}
        >
          <FaAngleDoubleDown size={28} />
        </motion.div>
      </section>
      <section className="h-screen bg-emerald-300"></section>
    </main>
  );
}
