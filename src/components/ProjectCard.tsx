import { motion, useInView, Variants } from "motion/react";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  description: string;
  videoLink?: string;
  imageLink?: string;
  hostedLink?: string;
  githubLink?: string;
}

interface ProjectGalleryProps {
  projects: { description: string; imageLink: string }[];
}

const shakeAnimation = {
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
const ProjectCard = ({ description, imageLink }: ProjectCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.95 });

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
          <img
            src={imageLink}
            alt="Project thumbnail"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gruvbox-dark-bg/80 to-transparent">
            <p className="text-sm text-gruvbox-dark-fg0">{description}</p>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex justify-evenly py-4 px-2 space-x-4 w-full">
        <motion.button
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
        <motion.button
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
            description={project.description}
            imageLink={project.imageLink}
          />
        </div>
      ))}
    </div>
  );
};

export { ProjectCard, ProjectGallery };
