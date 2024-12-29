// src/pages/ProjectDetail.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Iframe from 'react-iframe';
import { projects, Project } from "../data/projects";
import { motion } from "framer-motion";
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
    GitHub: <FaGithub className="w-6 h-6 text-gray-700 bg-white rounded-full p-1" />,
    "CI/CD": <SiIced className="w-6 h-6 text-purple-500" />,
    // Add more technology icons as needed
};

const ProjectDetail: React.FC = () => {
    const { title } = useParams<{ title: string }>();

    // Find the project based on the title
    const project: Project | undefined = projects.find(
        (proj) => proj.title === title
    );

    if (!project) {
        return (
            <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center">
                <h2 className="text-2xl">Project not found.</h2>
            </div>
        );
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 text-gray-100 min-h-screen"
            >
                <section className="container mx-auto px-6 lg:px-16 py-16">


                    {/* Project Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="my-8 text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold">{project.name}</h1>
                        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                            {project.description}
                        </p>
                        {project.video && (
                            <Iframe url={project.video}
                                    width="640px"
                                    height="320px"
                                    id=""
                                    className="my-8 mx-auto"
                                    display="block"
                                     />
                        )}

                        
                    </motion.div>

                    {/* Detailed Description */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl font-bold mb-4">About the Project</h2>
                        <p className="text-gray-300">{project.detailedDescription}</p>
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Technologies Used */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                        <div className="flex flex-wrap space-x-4">
                            {project.technologies.map((tech, idx) => (
                                <div key={idx} className="flex items-center space-x-1 mb-2">
                                    {technologyIcons[tech] || (
                                        <span className="text-gray-400">•</span>
                                    )}
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Project Screenshots */}
                    {project.screenshots.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {project.screenshots.map((shot, idx) => (
                                    <motion.img
                                        key={idx}
                                        src={shot}
                                        alt={`${project.name} Screenshot ${idx + 1}`}
                                        className="w-full h-auto rounded-md shadow-md"
                                        loading="lazy"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Project Links */}
                    <motion.div
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition-colors duration-300 shadow-lg"
                        >
                            Live Demo <FaExternalLinkAlt className="ml-2" />
                        </a>
                        <a
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition-colors duration-300 shadow-lg"
                        >
                            View Repository <FaGithub className="ml-2" />
                        </a>
                    </motion.div>
                </section>
            </motion.div>
        </>
    );
};

export default ProjectDetail;
