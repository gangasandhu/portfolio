// src/components/Socials.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

// Define Socials with Brand Colors
const socials = [
  {
    name: "Gmail",
    icon: <FaEnvelope className="w-6 h-6" />,
    link: "mailto:sr.gangasingh@gmail.com", // Replace with your actual email
    bgColor: "#EA4335", // Gmail Red
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="w-6 h-6" />,
    link: "https://www.instagram.com/sr.gangasingh/", // Replace with your Instagram profile URL
    bgColor: "#C13584", // Instagram Gradient Start (approximate)
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-6 h-6" />,
    link: "https://www.linkedin.com/in/ganga-singh-aa482a251/", // Replace with your LinkedIn profile URL
    bgColor: "#0077B5", // LinkedIn Blue
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-6 h-6" />,
    link: "https://github.com/gangasandhu", // Replace with your GitHub profile URL
    bgColor: "#181717", // GitHub Black
  },
  {
    name: "Facebook",
    icon: <FaFacebook className="w-6 h-6" />,
    link: "https://www.facebook.com/profile.php?id=100087732535502", // Replace with your Facebook profile URL
    bgColor: "#1877F2", // Facebook Blue
  },
];

const Socials: React.FC = () => {
  return (
    <section
      className="bg-gray-900 w-[80vw] mx-auto my-16 rounded-lg text-gray-100 px-6 lg:px-16 py-16"
      id="socials"
    >
      <div className="container mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-8"
        >
          Connect With Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-400 mb-12"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the platforms below!
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex flex-wrap justify-center space-x-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex items-center justify-center rounded-full p-4"
              style={{ backgroundColor: social.bgColor }}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                scale: 1.2,
                rotate: [0, 10, -10, 10, -10, 10, 0],
                transition: { duration: 0.6 },
              }}
            >
              <motion.div
                className="text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social.icon}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Socials;
