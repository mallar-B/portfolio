const Navbar = () => {
  return (
    <header className="fixed flex w-full justify-between bg-gruvbox-dark-bg1 px-56 py-4 pt-6">
      <span className="text-2xl font-extrabold text-gruvbox-light-bg0">Mallar B.</span>
      <nav className="font-black text-gruvbox-light-bg0">
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
