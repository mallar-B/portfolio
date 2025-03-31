import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const tagLines = [
  "Full Stack Developer",
  "Open Source Contributer",
  "DevOps Engineer",
  "Nixos Enthusiast",
  "Linux Ricer",
  "Neovim Enjoyer"
];

const TagLine = () => {
  const [currTagLineIndex, setCurrTagLineIndex] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTagLineIndex((ctli) => (ctli + 1) % tagLines.length);
      setHasAnimated(true);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.h2
        key={currTagLineIndex}
        initial={{
          opacity: 0,
          y: 40,
          rotateX: 90,
          scale: 0.8,
          filter: "blur(4px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: hasAnimated ? 0.7 : 0.7,
            delay: hasAnimated ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
        exit={{
          opacity: 0,
          y: -5,
          rotateX: -90,
          scale: 0.8,
          filter: "blur(4px)",
          transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.6, 1],
          },
        }}
        className="self-center px-10 pt-2 font-mono text-lg text-gruvbox-dark-orange shadow-2xl shadow-gruvbox-dark-bg0 md:text-xl"
        style={{
          transformOrigin: "top center",
          transformStyle: "preserve-3d",
        }}
      >
        {tagLines[currTagLineIndex]}
      </motion.h2>
    </AnimatePresence>
  );
};

export default TagLine;
