// src/components/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

import {
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiGo, SiIced, SiRedux, SiTypescript } from "react-icons/si";
import { Link } from "react-router";

// Technology Icons Mapping
const technologyIcons: { [key: string]: JSX.Element } = {
  JavaScript: <SiJavascript className="w-6 h-6 text-yellow-500" />,
  TypeScript: <SiTypescript className="w-6 h-6 text-blue-500" />,
  React: <FaReact className="w-6 h-6 text-blue-400" />,
  Redux: <SiRedux className="w-6 h-6 text-purple-500" />,
  "Node.js": <FaNodeJs className="w-6 h-6 text-green-500" />,
  Docker: <FaDocker className="w-6 h-6 text-blue-600" />,
  AWS: <FaAws className="w-6 h-6 text-orange-500" />,
  Python: <FaPython className="w-6 h-6 text-blue-600" />,
  Go: <SiGo className="w-6 h-6 text-teal-500" />,
  Git: <FaGitAlt className="w-6 h-6 text-red-500" />,
  GitHub: <FaGithub className="w-6 h-6 text-gray-700 bg-white" />,
  "CI/CD": <SiIced className="w-6 h-6 text-purple-500" />,
};

// // Dummy Projects Array with Top 4 Technologies
// interface Project {
//   name: string;
//   image: string;
//   description: string;
//   link: string;
//   technologies: (keyof typeof technologyIcons)[];
// }

// const projects: Project[] = [
//   {
//     name: "Devlink",
//     image: "https://github.com/gangasandhu/devlink/blob/main/showcase/Home.png?raw=true",
//     description:
//       "A comprehensive platform for developers, content creators, and tech enthusiasts. Features include blog management, online coding, and social networking capabilities.",
//     link: "#",
//     technologies: ["JavaScript", "React", "Node.js", "GitHub"],
//   },
//   {
//     name: "SmartScript",
//     image: "https://github.com/gangasandhu/smart-script/blob/main/showcase/home.png?raw=true",
//     description:
//       "An AI-assisted code-learning platform with an integrated code editor, compiler, and AI assistant. Built to provide an interactive and engaging experience for coding enthusiasts.",
//     link: "#",
//     technologies: ["React", "JavaScript", "GitHub", "CI/CD", "Docker"],
//   },
//   {
//     name: "Chess Game",
//     image: "https://upload.wikimedia.org/wikipedia/commons/5/51/SmallFish_screenshot_%28Computer_to_move%2C_computer_analysis_shown%29.png",
//     description:
//       "A real-time chess game application with user authentication, game history, and live gameplay. Leveraged Redis for caching and Socket.io for real-time functionality.",
//     link: "#",
//     technologies: ["Node.js", "React", "GitHub", "JavaScript", "AWS"],
//   },
// ];

const Projects: React.FC = () => {
  return (
    <section
      className="text-gray-100 px-6 lg:px-16 py-16"
      id="projects"
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
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={`${project.name} Screenshot`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />

              {/* Project Details */}
              <div className="p-6">
                {/* Project Name */}
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-6">{project.description}</p>

                {/* Technologies Used */}
                <div className="flex flex-wrap space-x-4 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center justify-center bg-gray-700 p-2 rounded-md"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {technologyIcons[tech] || (
                        <FaExternalLinkAlt className="w-6 h-6 text-gray-400" />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Project Link */}
                <Link
                  to={`/projects/${project.title}`}
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold"
                >
                  View Project <FaExternalLinkAlt className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
