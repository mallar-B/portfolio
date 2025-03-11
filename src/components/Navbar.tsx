const Navbar = () => {
  return (
    <header className="flex justify-between px-56 bg-gruvbox-dark-bg1 w-full py-4 pt-6">
      <span className="font-extrabold text-2xl text-gruvbox-light-bg0">Mallar B.</span>
      <nav className="text-gruvbox-light-bg0 font-black">
	<ul className="flex space-x-12">
	  <li>home</li>
	  <li>about</li>
	  <li>contact</li>
	</ul>
      </nav>
    </header>
  );
};

export default Navbar;
