import { useState } from "react"; // Import useState hook
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  // State to track whether the hamburger menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} >
              <a href={item.href} className="fonts-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="hidden max-lg:block" onClick={toggleMenu}>
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>

      {/* Mobile Navigation (conditional rendering based on isMenuOpen) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-20 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-lg font-bold text-slate-gray"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center items-start px-6">
          {navLinks.map((item) => (
            <li key={item.label} className="py-2">
              <a
                href={item.href}
                className="fonts-montserrat text-lg text-slate-gray"
                onClick={toggleMenu} // Close menu when a link is clicked
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
