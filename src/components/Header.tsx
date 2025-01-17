import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing Font Awesome Icons
import { MdLightMode, MdOutlineNightlightRound } from "react-icons/md";

import { Link } from "react-router";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");


  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-primaryDark to-primary fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-0 py-4">
        {/* Logo */}
        <Link to="" className="text-2xl font-extrabold flex items-center">
          <span className="text-accent-primary">Ganga</span>
          <span className="text-accent-secondary">Singh</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8">
          <Link
            to="/about"
            className="text-color-primary hover:text-accent-secondary hover:scale-105 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/skills"
            className="text-color-primary hover:text-accent-secondary hover:scale-105 transition duration-300"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-color-primary hover:text-accent-secondary hover:scale-105 transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-color-primary hover:text-accent-secondary hover:scale-105 transition duration-300"
          >
            Contact
          </Link>
        </nav>

        <div className="flex justify-between space-x-8 items-center">
          <button
            className="bg-secondary-200 p-2 text-color-primary rounded-full"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <MdLightMode size={24} /> : <MdOutlineNightlightRound size={24} />}
          </button>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:block bg-accent-secondary text-white px-5 py-2 rounded-lg shadow-md hover:bg-accent-secondary-focus hover:scale-105 transition duration-300"
          >
            Let's Connect
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-color-primary hover:text-accent-secondary transition duration-300 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>






      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-b from-primaryDark to-primary overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 px-6 py-4">
              <li>
                <Link
                  to="/about"
                  className="text-color-primary hover:text-accent-secondary transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="text-color-primary hover:text-accent-secondary transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-color-primary hover:text-accent-secondary transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-color-primary hover:text-accent-secondary transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="bg-accent-secondary text-white px-4 py-2 rounded-lg shadow-md transition duration-300 text-center"
                  onClick={toggleMobileMenu}
                >
                  Let's Connect
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
