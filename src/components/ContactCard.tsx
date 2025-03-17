import { FaGithub, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const ContactCard = () => {
  return (
    <>
      <div className="border-b-2 border-gruvbox-dark-yellow mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 pb-4">
        {/* GitHub */}
        <a
          href="https://github.com/mallar-B"
          target="_blank"
          rel="noopener "
          className="flex items-center p-4 bg-gruvbox-dark-bg2 rounded-sm transition-all duration-300 hover:bg-gruvbox-dark-bg3 group"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-gruvbox-dark-bg rounded-full mr-4 text-gruvbox-dark-orange group-hover:text-[#fe8019]">
            <FaGithub size={24} />
          </div>
          <div>
            <h3 className="text-gruvbox-dark-fg0 font-mono text-lg">GitHub</h3>
            <p className="text-gruvbox-dark-fg4 text-sm">@mallar-B</p>
          </div>
        </a>

        {/* X */}
        <a
          href="https://x.com/0human07"
          target="_blank"
          rel="noopener "
          className="flex items-center p-4 bg-gruvbox-dark-bg2 rounded-sm transition-all duration-300 hover:bg-gruvbox-dark-bg3 group"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-gruvbox-dark-bg rounded-full mr-4 text-[#458588] group-hover:text-[#83a598]">
            <FaTwitter size={24} />
          </div>
          <div>
            <h3 className="text-gruvbox-dark-fg0 font-mono text-lg">Twitter</h3>
            <p className="text-gruvbox-dark-fg4 text-sm">@mallar_Bh</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mallar-bhattacharya-233491291/"
          target="_blank"
          rel="noopener "
          className="flex items-center p-4 bg-gruvbox-dark-bg2 rounded-sm transition-all duration-300 hover:bg-gruvbox-dark-bg3 group"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-gruvbox-dark-bg rounded-full mr-4 text-[#b16286] group-hover:text-[#d3869b]">
            <FaLinkedinIn size={24} />
          </div>
          <div>
            <h3 className="text-gruvbox-dark-fg0 font-mono text-lg">
              LinkedIn
            </h3>
            <p className="text-gruvbox-dark-fg4 text-sm">in/mallarB</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:bhattacharyamallar@gmail.com"
          className="flex items-center p-4 bg-gruvbox-dark-bg2 rounded-sm transition-all duration-300 hover:bg-gruvbox-dark-bg3 group"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-gruvbox-dark-bg rounded-full mr-4 text-gruvbox-dark-red group-hover:text-[#fb4934]">
            <FaEnvelope size={24} />
          </div>
          <div>
            <h3 className="text-gruvbox-dark-fg0 font-mono text-lg">Email</h3>
            <p className="text-gruvbox-dark-fg4 text-sm">bhattacharyamallar@gmail.com</p>
          </div>
        </a>
      </div>
    </>
  );
};
export default ContactCard;
