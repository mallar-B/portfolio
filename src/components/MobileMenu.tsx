import { motion } from "motion/react";
import Link from "next/link";

const MobileMenu = ({onClick}: {onClick: () => void}) => {
  const items = ["Home", "About", "Projects", "Contact"];
  return (
    <motion.ul
      className="overflow-hidden mt-4 border-t-2 border-gruvbox-dark-fg3"
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.3, ease: [0.31, 0.53, 0.82, 0.67] }}
      onClick={onClick}
    >
      {items.map((item, index) => (
        <Link href={`#${item.toLowerCase()}`} key={index}>
          <li
            key={index}
            className="py-2 text-xl font-bold text-gruvbox-dark-fg"
          >
            {item}
          </li>
        </Link>
      ))}
    </motion.ul>
  );
};

export default MobileMenu;
