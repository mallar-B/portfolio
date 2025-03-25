"use client";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProjectGallery } from "@/components/ProjectCard";
import TagLine from "@/components/TagLine";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Home() {
  const scrollValue = useScroll();
  const indicatorOpacity = useTransform(scrollValue.scrollY, [0, 150], [1, 0]);
  //const heroScale = useTransform(scrollValue.scrollY, [0, 250], [1, 0.6]);
  const heroOpacity = useTransform(scrollValue.scrollY, [0, 250], [1, 0.2]);
  //const heroSectionHeight = useTransform(
  //  scrollValue.scrollY,
  //  [0, 250],
  //  ["100vh", "60vh"],
  //);
  const gridOpacity = useTransform(scrollValue.scrollY, [0, 350], [1, 0]);
  const gridSize = 57;
  const [numCols, setNumCols] = useState(0);
  const [numRows, setNumRows] = useState(0);

  const projects = [
    {
      description: {
        title: "Chess-Room",
        description: "A platform for teaching chess",
        about: (
          <div>
            A SaaS-based virtual classroom platform where users can register as
            either a teacher or a student, enabling interactive and controlled
            learning environments.
            <br />
            <br />
            <span className="text-xl font-extrabold underline">
              Highlights:
            </span>
            <ul className="list-disc pl-8 pt-2">
              <li className="py-1">
                <span className="font-bold">Interactive Virtual Board:</span>{" "}
                Real-time collaboration with fine-grained access control.
                Enable/disable actions like drawing, solving problems, or making
                moves.{" "}
              </li>
              <li className="py-1">
                <span className="font-bold"> Real-Time Communication:</span>{" "}
                Leveraged WebSockets and Agora RTC for low-latency (
                <strong>&lt;50ms</strong>) interaction.
              </li>
              <li className="py-1">
                <span className="font-bold">
                  Role-Based Dynamic Access Control:
                </span>{" "}
                Teacher can manage classroom behavior, audio/video permissions,
                and student interactions. Control who can make moves on the
                virtual board and participate in discussions.
              </li>
              <li className="py-1">
                <span className="font-bold">SaaS Architecture:</span> Scalable
                to support multiple classrooms and institutions simultaneously.
              </li>
            </ul>
          </div>
        ),
        techStacks: [
          "Next.js",
          " Node.js",
          "Socket.io",
          "PostgreSQL",
          "OAuth2.0",
          "Zustand",
        ],
      },
      imageLink: "https://picsum.photos/1920/1080",
      videoLink: "/test_1.mp4",
    },
  ];

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
      {/* Grid */}
      <motion.div
        className="absolute inset-0 h-screen w-full overflow-hidden bg-gradient-to-t from-gruvbox-dark-bg2/10 to-transparent"
        initial={false}
        style={{ opacity: gridOpacity }}
      >
        {/* Vertical Grid Lines */}
        {Array.from({ length: numCols }).map((_, i) => (
          <motion.div
            key={`v-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 5, delay: i * 0.05 }} // duration 5 so it looks good on mobiles
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

      {/* Hero Section */}
      <motion.section
        className="flex h-screen flex-col items-center justify-center pb-8 "
        //style={{ height: heroSectionHeight }}
      >
        <motion.div
          initial={{ filter: "blur(3px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col items-center md:items-start"
          style={{ opacity: heroOpacity }}
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
          <TagLine />
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

        {/* Down Arrow*/}
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

      {/* About Section */}
      <section className=" flex flex-col items-center justify-center bg-gruvbox-dark-bg0 p-4 md:px-[15%] md:py-[5%] ">
        <motion.h2
          className="self-start p-4 text-4xl font-bold text-gruvbox-dark-fg0 lg:self-center lg:pb-10 lg:text-5xl"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          About Me
        </motion.h2>
        <motion.hr />
        <motion.p
          className="mb-4 px-3.5 text-lg break-words text-gruvbox-dark-fg3 subpixel-antialiased xl:px-30 lg:px-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm a software developer with a love for crafting high-performance web
          apps and I'm constantly experimenting with cutting-edge tech.
          <br />
          <br />I specialize in real-time systems and P2P architecture. I thrive
          in backend-heavy projects, but I also enjoy bringing UI to life with
          animations and modern frontend frameworks like Next.js.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section className="bg-gruvbox-dark-bg py-10 md:px-[15%] md:py-[5%] lg:px-10 xl:px-[10%]">
        <motion.div className="flex flex-col">
          <motion.h2
            className="self-start px-8 py-4 text-4xl font-bold text-gruvbox-dark-fg0 lg:self-center lg:pb-20 lg:text-5xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            Projects
          </motion.h2>
          <div>
            <ProjectGallery projects={projects} />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="bg-gruvbox-dark-bg1 py-10">
        <motion.h2
          className="self-start px-8 py-4 text-4xl font-bold text-gruvbox-dark-fg0 lg:text-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          Get in Touch
        </motion.h2>
        <div className="border-b-2 border-[#fb4934] mb-8 mx-4"></div>
        <motion.div
          className="mb-4 px-4 text-lg break-words text-gruvbox-dark-fg3 subpixel-antialiased"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ContactCard />
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
