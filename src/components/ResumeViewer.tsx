import { motion } from "motion/react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { FaBookOpen, FaDownload } from "react-icons/fa6";
import { isModuleNamespaceObject } from "util/types";

const ResumeViewer = ({
  onClose,
  pdfLinks,
  isMobile,
}: {
  onClose: () => void;
  pdfLinks: { mobile: string; pc: string };
  isMobile: boolean;
}) => {
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
      <div className="flex h-full flex-col lg:flex-row">
        {/* PDF Viewer */}
        <div className="h-full flex">
          <div className="w-screen sm:w-full px-[10%] h-full self-center">
            <motion.iframe
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, opacity: { delay: 0.4 } }}
              height="98%"
              width="100%"
              src={
                isMobile
                  ? `https://docs.google.com/gview?url=${pdfLinks.mobile}&embedded=true&zoom=200`
                  : pdfLinks.pc
              }
              frameBorder="0"
              className="lg:aspect-[15/16]"
            ></motion.iframe>
          </div>

          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { delay: 0.2 } }}
            whileHover={{ scale: 1.1, borderRadius: "1px" }}
            whileTap={{ scale: 0.9 }}
            className="hidden sm:block sm:mx-5 sm:px-1 sm:h-max sm:self-start sm:w-max sm:shrink-0 sm:py-1 sm:text-gruvbox-dark-bg3 sm:bg-gruvbox-dark-fg3 sm:rounded-sm sm:cursor-pointer"
            onClick={onClose}
          >
            <CgClose size={40} />
          </motion.button>
        </div>

        <div className="flex flex-col items-center lg:h-full self-center lg:pt-20 sm:max-h-48 sm:flex-row lg:flex-col lg:items-start lg:-translate-x-20">
          {/* Close Button for mobile */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { delay: 0.2 } }}
            whileHover={{ scale: 1.1, borderRadius: "1px" }}
            whileTap={{ scale: 0.9 }}
            className="sm:hidden justify-center w-max cursor-pointer gap-1.5 font-mono flex items-center mx-5 px-2 py-3 text-gruvbox-dark-bg3 bg-gruvbox-dark-fg4 rounded-sm text-xl font-black"
            onClick={onClose}
          >
            <CgClose size={24} />
            Close
          </motion.button>
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
              className="cursor-pointer gap-1.5 font-mono flex items-center justify-center px-2 py-3 text-gruvbox-dark-bg3 bg-gruvbox-dark-fg4 rounded-sm text-xl font-black"
            >
              <FaDownload />
              Download
            </motion.button>
          </Link>

          {/* Open in another tab Button */}
          {!isMobile && (
            <Link
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              passHref
              className="sm:m-4 w-max"
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { delay: 0.2 } }}
                whileHover={{ scale: 1.1, borderRadius: "1px" }}
                whileTap={{ scale: 0.9 }}
                className="gap-2 flex font-mono break-words cursor-pointer items-center justify-center px-2 py-3 text-gruvbox-dark-bg3 bg-gruvbox-dark-fg4 rounded-sm text-xl font-black"
              >
                <FaBookOpen size={20} />
                Open in another tab
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeViewer;
