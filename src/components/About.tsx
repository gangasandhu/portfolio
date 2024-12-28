import React from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaHandsHelping,
  FaBrain,
  FaHeart,
} from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section
      className="bg-gray-900 px-6 mx-auto w-[80vw] border-none rounded-lg lg:px-16 text-gray-100 py-16"
      id="about"
    >
      <div className="container mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-indigo-400"
        >
          Who Am I?
        </motion.h2>

        {/* Introduction */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            I'm Ganga Singh, a dedicated professional with a passion for fostering meaningful connections and driving team success. Over the past 8 years, I've honed my abilities in communication, leadership, and strategic thinking, enabling me to contribute effectively to diverse projects and collaborative environments.
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            My journey is driven by a love for technology, continuous learning, and a commitment to excellence. I thrive in dynamic environments where I can leverage my skills to solve complex problems and deliver impactful solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Skill Cards */}
          {[{
            icon: <FaComments className="text-indigo-400 w-12 h-12 mb-4" />,
            title: "Effective Communication",
            description: "Skilled in conveying ideas clearly and fostering open dialogue within teams."
          },
          {
            icon: <FaHandsHelping className="text-teal-400 w-12 h-12 mb-4" />,
            title: "Leadership",
            description: "Experienced in leading and motivating teams to achieve project goals and foster collaboration."
          },
          {
            icon: <FaBrain className="text-yellow-400 w-12 h-12 mb-4" />,
            title: "Strategic Thinking",
            description: "Adept at planning and executing strategies that align with organizational objectives and drive success."
          },
          {
            icon: <FaHeart className="text-red-400 w-12 h-12 mb-4" />,
            title: "Empathy",
            description: "Committed to understanding and addressing the needs of team members and clients alike."
          }].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {skill.icon}
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#portfolio"
            className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 flex items-center"
          >
            View My Portfolio
            <FaComments className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
