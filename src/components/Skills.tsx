// src/components/Skills.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiDocker,
  SiAmazon,
  SiGit,
  SiGithub,
  SiIced,
} from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-12 h-12 text-yellow-500" />,
    description: "Expertise in ES6+, asynchronous programming, and modern JavaScript frameworks.",
  },
  {
    name: "React",
    icon: <SiReact className="w-12 h-12 text-blue-400" />,
    description: "Proficient in building dynamic and responsive user interfaces with React.",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-12 h-12 text-green-500" />,
    description: "Skilled in developing scalable backend services and RESTful APIs using Node.js.",
  },
  {
    name: "Python",
    icon: <SiPython className="w-12 h-12 text-blue-600" />,
    description: "Experienced in scripting, automation, and data analysis with Python.",
  },
  {
    name: "Go",
    icon: <SiGo className="w-12 h-12 text-teal-500" />,
    description: "Knowledgeable in building efficient and concurrent applications with Go.",
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-12 h-12 text-blue-600" />,
    description: "Experienced in containerizing applications for consistent development and deployment.",
  },
  {
    name: "CI/CD",
    icon: <SiIced className="w-12 h-12 text-purple-500" />,
    description: "Proficient in setting up continuous integration and deployment pipelines for streamlined workflows.",
  },
  {
    name: "AWS",
    icon: <SiAmazon className="w-12 h-12 text-orange-400" />,
    description: "Skilled in deploying and managing applications on Amazon Web Services for scalability and reliability.",
  },
  {
    name: "Git",
    icon: <SiGit className="w-12 h-12 text-red-500" />,
    description: "Proficient in version control with Git for efficient code management and collaboration.",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="w-12 h-12 text-gray-700" />,
    description: "Experienced in using GitHub for repository hosting, collaboration, and project management.",
  },
  {
    name: "Problem Solving",
    icon: <FaRegLightbulb className="w-12 h-12 text-yellow-400" />,
    description: "Strong analytical skills with the ability to identify and solve complex challenges.",
  },
  {
    name: "Teamwork",
    icon: <SiGit className="w-12 h-12 text-green-500" />, // Reusing Git icon as a placeholder
    description: "Team-oriented approach with excellent collaboration and communication skills.",
  },
];

const Skills: React.FC = () => {
  return (
    <section
      className="text-gray-100 px-6 lg:px-16 py-16"
      id="skills"
    >
      <div className="container mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        >
          My Technical Skills
        </motion.h2>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center md:text-xl text-gray-300 mb-16"
        >
          Skilled software developer with expertise in JavaScript, React, and Node.js.
          Experienced in using Docker, CI/CD, and AWS for efficient application deployment.
          Strong problem-solver with a team-oriented approach and good communication skills.
          Proficient in Python and knowledgeable in Go for full-stack development.
          Adept with Git and GitHub for version control and collaboration.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="grid sm:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {skill.icon}
              <h3 className="mt-4 text-xl font-semibold">{skill.name}</h3>
              <p className="mt-2 text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
