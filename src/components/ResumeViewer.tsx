import { motion } from "motion/react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { FaBookOpen, FaDownload } from "react-icons/fa6";

const ResumeViewer = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(3px)" }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="fixed inset-0 bg-black/30 flex items-start justify-center p-4 z-50 backdrop-blur-sm h-screen w-screen"
    >
      {/* PDF Viewer */}
      <motion.iframe
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, opacity: { delay: 0.4 } }}
        height="98%"
        src="/Resume.pdf#toolbar=0&zoom=90"
        // src="https://docs.google.com/document/d/1nIEau7k-LWS1h_SSHNnFnVs0Xh-nyASZ-32z6xL4y4Q/edit?tab=t.0"
        className="aspect-[12/16]"
      ></motion.iframe>
      <div className="flex flex-col h-full justify-between">
        {/* Close Button */}
        <div className="h-full">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { delay: 0.2 } }}
            whileHover={{ scale: 1.1, borderRadius: "1px" }}
            whileTap={{ scale: 0.9 }}
            className="mx-5 px-1 h-max self-start w-max shrink-0 py-1 text-gruvbox-dark-bg3 bg-gruvbox-dark-fg3 rounded-sm cursor-pointer"
            onClick={onClose}
          >
            <CgClose size={40} />
          </motion.button>
        </div>

        <div className="flex flex-col h-full self-center pt-20">
          {/* Download Button */}
          <Link
            href="/Resume.pdf"
            download="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            passHref
            className="m-4 w-max"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { delay: 0.2 } }}
              whileHover={{ scale: 1.1, borderRadius: "1px" }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer  gap-2 font-mono flex items-center justify-around mx-5 px-2 py-3 text-gruvbox-dark-bg3 bg-gruvbox-dark-fg4 rounded-sm text-xl font-black"
            >
              <FaDownload />
              Download
            </motion.button>
          </Link>

          {/* Open in another tab Button */}
          <Link
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            passHref
            className="m-4 w-max"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { delay: 0.2 } }}
              whileHover={{ scale: 1.1, borderRadius: "1px" }}
              whileTap={{ scale: 0.9 }}
              className="gap-2 flex font-mono break-words cursor-pointer items-center justify-around mx-5 px-2 py-3 text-gruvbox-dark-bg3 bg-gruvbox-dark-fg4 rounded-sm text-xl font-black"
            >
              <FaBookOpen size={20} />
              Open in another tab
            </motion.button>
          </Link>
        </div>
        {/* Spacer */}
        <div className="h-full"></div>
      </div>
    </motion.div>
  );
};

export default ResumeViewer;
