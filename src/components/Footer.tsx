// src/components/Footer.tsx
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 px-6 lg:px-16 py-8">
      <div className="container mx-auto text-center">
        {/* Site Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h1 className="text-2xl font-bold">Ganga Singh</h1>
          <p className="text-gray-400">Full Stack Developer</p>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <ul className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <a
                href="#hero"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.nav>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "50%" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto border-t border-gray-700 mb-4"
          style={{ height: "1px" }}
        ></motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm"
        >
          &copy; {new Date().getFullYear()} Ganga Singh. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
