import { AnimatePresence, motion, useInView } from "motion/react";
import React, { ReactNode, useEffect, useState } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  about: ReactNode;
  description: string;
  videoLink?: string;
  imageLink?: string;
  siteLink?: string;
  sourceLink?: string;
  techStacks: string[];
}

interface ProjectGalleryProps {
  projects: {
    description: {
      title: string;
      description: string;
      about: ReactNode;
      techStacks: string[];
    };
    imageLink: string;
    videoLink: string;
    siteLink: string;
    sourceLink: string;
  }[];
}

interface VideoCardProps {
  videoLink: string | undefined;
}

export const shakeAnimation = {
  scale: 0.95,
  rotate: [-1, 1, -1, 0],
  y: 2,
  boxShadow: "0px 2px 5px rgba(101, 31, 255, 0.3)",
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 15,
    rotate: { duration: 0.2 },
  },
};

const VideoCard = ({ videoLink }: VideoCardProps) => {
  if (!videoLink) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center translate-x-64 -translate-y-16 xl:translate-x-96"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="border-[5px] border-gruvbox-dark-fg3 w-[40%] aspect-16/11 bg-transparent text-white rounded-none z-0 "
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
        initial={{
          rotateX: 25,
          rotateZ: 5,
          rotateY: -15,
          z: -150,
          x: 150,
          opacity: 0,
        }}
        animate={{
          rotateZ: 0,
          rotateX: 10,
          rotateY: -15,
          z: 0,
          x: 0,
          opacity: 1,
        }}
        exit={{
          rotateX: 25,
          rotateZ: 5,
          rotateY: -15,
          z: -150,
          x: 150,
          opacity: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <motion.video
          src={videoLink}
          autoPlay
          loop
          muted
          className="w-full h-full object-fill rounded-none shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        />
      </motion.div>
    </div>,
    document.body,
  );
};

const TechStackPills = ({ techStacks }: { techStacks: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 items-start">
      {techStacks.map((stack, index) => (
        <span
          key={index}
          className="bg-gruvbox-dark-purple text-gruvbox-dark-fg0 text-md font-mono font-extrabold px-3 py-1 rounded-sm shadow-md cursor-pointer transition-all hover:scale-105 transform-gpu"
        >
          {stack}
        </span>
      ))}
    </div>
  );
};

const ProjectCard = ({
  about,
  description,
  imageLink,
  title,
  videoLink,
  techStacks,
  siteLink,
  sourceLink,
}: ProjectCardProps) => {
  const [isBigScreen, setIsBigScreen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { amount: 0.9 });
  const bigScreenIsInView = useInView(cardRef, { amount: 0.7 });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsBigScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isBigScreen) {
    return (
      <motion.div ref={cardRef} className="flex flex-col">
        {/* VideoCard */}
        <AnimatePresence>
          {bigScreenIsInView ? (
            <VideoCard videoLink={videoLink} key={videoLink} />
          ) : null}
        </AnimatePresence>

        {/* Description */}
        <motion.div className="relative text-gruvbox-dark-fg2 px-10 py-20 bg-gruvbox-dark-bg0 w-1/2 max-w-xl shadow-lg shadow-gruvbox-dark-bg0 border-gruvbox-dark-fg3 border rounded-sm z-10">
          <hr className="p-4 border-t-2 border-gruvbox-dark-yellow" />
          <h2 className="absolute top-7 left-9 font-black text-3xl text-gruvbox-dark-aqua font-mono">
            {title}
          </h2>
          <h6>{about}</h6>
          <div className="flex flex-col justify-center translate-y-8 z-10">
            <TechStackPills techStacks={techStacks} />
            <div className="relative z-20">
              <div className="pt-10 flex space-x-4">
                <Link href={siteLink as string} passHref legacyBehavior>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <motion.button
                      initial={{ rotate: 0, y: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={shakeAnimation}
                      className="space-x-4 border-2 bg-gruvbox-dark-blue cursor-pointer border-gruvbox-dark-fg3 rounded-sm flex items-center font-medium justify-center w-full py-2"
                    >
                      <FaExternalLinkAlt size={20} />
                      <span className="text-xl select-none">Site</span>
                    </motion.button>
                  </a>
                </Link>
                <Link href={sourceLink as string} passHref legacyBehavior>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <motion.button
                      initial={{ rotate: 0, y: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={shakeAnimation}
                      className="space-x-4 border-2 border-gruvbox-dark-fg3 text-gruvbox-dark-blue cursor-pointer rounded-sm flex items-center font-medium justify-center w-full py-2"
                    >
                      <FaGithub size={22} />
                      <span className="text-xl select-none">Source</span>
                    </motion.button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col rounded-sm overflow-hidden shadow-lg w-full mb-6"
      animate={{
        filter: isInView ? "blur(0px)" : "blur(2px)",
        scale: isInView ? 1.05 : 1,
        zIndex: isInView ? 10 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="relative">
        <div className="relative w-full h-0 pb-[56.25%] bg-gruvbox-dark-bg1">
          <Image
            fill
            src={imageLink as string}
            alt="Project thumbnail"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t black/80 to-transparent">
            <p className="text-sm text-[#fbf1c7]">{description}</p>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex justify-evenly py-4 px-2 space-x-4 w-full">
        <Link href={siteLink as string} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="w-full">
            <motion.button
              initial={{ rotate: 0, y: 0 }}
              animate={{
                scale: isInView ? 1 : 0.95,
                zIndex: isInView ? 10 : 1,
                backgroundColor: isInView ? "#83a598" : "#282828",
              }}
              whileTap={shakeAnimation}
              className="space-x-4 border-2 border-gruvbox-dark-fg3 rounded-sm flex items-center font-medium justify-center w-full py-2"
            >
              <FaExternalLinkAlt size={20} />
              <span className="text-xl select-none">Site</span>
            </motion.button>
          </a>
        </Link>
        <Link href={sourceLink as string} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="w-full">
            <motion.button
              initial={{ rotate: 0, y: 0 }}
              animate={{
                scale: isInView ? 1 : 0.95,
                zIndex: isInView ? 10 : 1,
                backgroundColor: isInView ? "#504945" : "#282828",
              }}
              whileTap={shakeAnimation}
              className="space-x-4 border-2 border-gruvbox-dark-fg3 rounded-sm flex items-center font-medium justify-center w-full py-2"
            >
              <FaGithub size={22} />
              <span className="text-xl select-none">Source</span>
            </motion.button>
          </a>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const ProjectGallery = ({ projects }: ProjectGalleryProps) => {
  return (
    <div className="flex flex-col overflow-x-hidden justify-center items-center">
      {projects.map((project, index) => (
        <div key={index} className="m-4 w-full px-10">
          <ProjectCard
            key={index + 1}
            title={project.description.title}
            description={project.description.description}
            about={project.description.about}
            imageLink={project.imageLink}
            videoLink={project.videoLink}
            techStacks={project.description.techStacks}
            siteLink={project.siteLink}
            sourceLink={project.sourceLink}
          />
        </div>
      ))}
    </div>
  );
};

export { ProjectCard, ProjectGallery };
