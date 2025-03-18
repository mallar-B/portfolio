const Footer = () => {
  return (
    <footer className="w-full bg-gruvbox-dark-bg1 text-gruvbox-dark-fg4 pb-4 text-center z-50">
      <p className="text-sm">
        © {new Date().getFullYear()} Mallar Bhattacharya.<br/> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
