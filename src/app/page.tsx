"use client";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Home() {
  const scrollValue = useScroll();
  const indicatorOpacity = useTransform(scrollValue.scrollY, [0, 150], [1, 0]);
  const heroScale = useTransform(scrollValue.scrollY, [0, 250], [1, 0.6]);
  const heroOpacity = useTransform(scrollValue.scrollY, [0, 250], [1, 0.2]);
  const heroSectionHeight = useTransform(
    scrollValue.scrollY,
    [0, 250],
    ["100vh", "60vh"],
  );
  const gridOpacity = useTransform(scrollValue.scrollY, [0, 350], [1, 0]);
  const gridSize = 57;
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
    <main className="h-screen bg-gruvbox-dark-bg">
      <Navbar />
      <motion.div
        className="absolute inset-0 w-full overflow-hidden bg-gradient-to-t from-gruvbox-dark-bg2/10 to-transparent"
        initial={false}
        style={{ opacity: gridOpacity, height: heroSectionHeight }}
      >
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
            transition={{ duration: 1, delay: i * 0.1 }}
            className="absolute right-0 left-0 h-px bg-gruvbox-dark-fg"
            style={{ top: `${i * gridSize}px` }}
          />
        ))}
      </motion.div>
      <motion.section
        className="flex flex-col items-center justify-center "
        style={{ height: heroSectionHeight }}
      >
        <motion.div
          initial={{ filter: "blur(3px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col items-center md:items-start"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="p-1 text-xl font-bold text-gruvbox-dark-fg2 shadow-2xl shadow-gruvbox-dark-bg0 md:text-2xl"
          >
            Hello, I'm
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl font-bold text-gruvbox-dark-aqua shadow-2xl shadow-gruvbox-dark-bg md:text-6xl"
          >
            Mallar Bhattacharya
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="self-center px-10 pt-2 font-mono text-lg text-gruvbox-dark-orange shadow-2xl shadow-gruvbox-dark-bg0 md:text-xl"
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
            className="mt-4 flex w-full flex-col justify-around self-center bg-gruvbox-dark-bg shadow-2xl shadow-gruvbox-dark-bg0 md:w-1/2 md:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="m-2 cursor-pointer rounded-sm border-2 border-gruvbox-dark-orange bg-gruvbox-dark-orange px-4 py-2.5"
            >
              Let's Connect
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="m-2 cursor-pointer rounded-sm border-2 border-gruvbox-dark-orange px-4 py-2.5 text-gruvbox-dark-orange"
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="invisible absolute bottom-10 left-1/2 -translate-x-1/2 transform text-gruvbox-dark-fg3 md:visible"
          initial={{ opacity: 0, repeatCount: 1 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, y: { repeat: Infinity, duration: 1.5 } }}
          style={{ opacity: indicatorOpacity }}
        >
          <FaAngleDoubleDown size={28} />
        </motion.div>
      </motion.section>
      <section className="h-screen bg-gruvbox-dark-bg0">
        <motion.div className="flex flex-col">
          <motion.h2 className="font-bold p-4 text-4xl text-gruvbox-dark-fg0 self-start">
            {" "}
            Projects{" "}
          </motion.h2>
        </motion.div>
      </section>
    </main>
  );
}
