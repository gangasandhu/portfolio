import React from "react";
import heroImage from "../assets/images/hero-img2.png";
import { motion } from "framer-motion"; // For animations
import { Link } from "react-router";

const Hero: React.FC = () => {
    return (
        <section className="p-6 lg:px-16 lg:py-0 overflow-hidden">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-5xl font-extrabold leading-snug"
                    >
                        Hi, I'm <span className="text-accent-primary">Ganga Singh</span>.
                        <br />
                        I develop <span className="text-accent-secondary">Full-Stack solutions</span> That Inspire, Educate, and Connect People. 
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-6 text-lg text-color-secondary max-w-md hidden lg:block lg:max-w-none mx-auto lg:mx-0"
                    >
                        As a passionate full-stack developer, I turn innovative concepts into impactful digital experiences.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="mt-8 flex justify-center lg:justify-start space-x-4"
                    >
                        <a
                            href="#projects"
                            className="bg-accent-primary hover:bg-accent-primary-focus hover:scale-105 text-white px-6 py-3 rounded-lg shadow-md transition transform"
                        >
                            Explore My Work
                        </a>
                        <Link
                            to="/contact"
                            className="bg-transparent border-2 border-accent-secondary text-accent-secondary px-6 py-3 rounded-lg hover:bg-accent-secondary hover:text-white transition transform hover:scale-105"
                        >
                            Let's Connect
                        </Link>
                    </motion.div>
                </div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 relative"
                >
                    <div className="w-60 h-60 bg-primary rounded-full overflow-hidden border-8 border-accent-primary lg:w-auto lg:h-auto lg:bg-transparent lg:border-0 lg:rounded-none">
                        <img
                            src={heroImage}
                            alt="Ganga Singh"
                            className="w-full h-full object-contain grayscale"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="lg:hidden absolute w-20 h-20 rounded-full bg-accent-secondary -top-8 -left-8"
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.2, scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="lg:hidden absolute w-24 h-24 rounded-full bg-accent-primary -bottom-10 -right-10"
                    ></motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
