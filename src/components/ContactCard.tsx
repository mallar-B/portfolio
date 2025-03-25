import { motion } from "motion/react";
import { JSX } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { shakeAnimation } from "./ProjectCard";

interface LinkBoxProps {
  url: string;
  icon: JSX.Element;
  iconColorClass: string;
  iconHoverColorClass: string;
  title: string;
  username: string;
}

const LinkBox = ({
  url,
  icon,
  title,
  username,
  iconColorClass,
  iconHoverColorClass,
}: LinkBoxProps) => {
  return (
    <motion.div whileTap={shakeAnimation}>
      <a
        href={`${url}`}
        target="_blank"
        rel="noopener"
        className="flex items-center p-4 bg-gruvbox-dark-bg2 rounded-sm transition-all duration-300 hover:bg-gruvbox-dark-bg3 group"
      >
        <div
          className={`shrink-0 w-12 h-12 flex items-center justify-center bg-gruvbox-dark-bg rounded-full mr-4 ${iconColorClass} ${iconHoverColorClass}`}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-gruvbox-dark-fg0 font-mono text-lg">{title}</h3>
          <p className="text-gruvbox-dark-fg4 text-sm truncate">{username}</p>
        </div>
      </a>
    </motion.div>
  );
};
const ContactCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 pb-4">
        {/* GitHub */}
        <LinkBox
          url="https://github.com/mallar-B"
          icon={<FaGithub size={24} />}
          iconColorClass="text-gruvbox-dark-aqua"
          iconHoverColorClass="group-hover:text-[#8ec07c]"
          title="GitHub"
          username="@mallar-B"
        />
        {/* X */}
        <LinkBox
          url="https://x.com/0human07"
          icon={<FaXTwitter size={24} />}
          iconColorClass="text-gruvbox-dark-orange"
          iconHoverColorClass="group-hover:text-[#fe8019]"
          title="X/Twitter"
          username="@mallar_Bh"
        />

        {/* LinkedIn */}
        <LinkBox
          url="https://www.linkedin.com/in/mallarB"
          icon={<FaLinkedinIn size={24} />}
          iconColorClass="text-gruvbox-dark-blue"
          iconHoverColorClass="group-hover:text-[#83a598]"
          title="LinkedIn"
          username="in/mallarB"
        />

        {/* Email */}
        <LinkBox
          url="mailto:bhattacharyamallar@gmail.com"
          icon={<FaEnvelope size={24} />}
          iconColorClass="text-gruvbox-dark-red"
          iconHoverColorClass="group-hover:text-[#fb4934]"
          title="Email"
          username="bhattacharyamallar@gmail.com"
        />
      </div>
    </>
  );
};
export default ContactCard;
