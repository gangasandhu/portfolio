// src/pages/Contact.tsx
import React from "react";
import Socials from "../components/Socials";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
    return (
        <div>
            {/* contact hero */}
            <motion.div
                className="bg-gray-900 text-white my-8 py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-2xl md:text-3xl font-bold">Get in Touch</h1>
                    <p className="mt-4 text-lg md:text-xl">
                        I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
                    </p>
                </div>
            </motion.div>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-6 lg:px-16 py-16"
            >
                <ContactForm />

                <div className="max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
                    <div className="space-y-4">
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <FaEnvelope className="text-indigo-500 w-6 h-6 mr-4" />
                            <div>
                                <h3 className="text-xl font-medium">Email</h3>
                                <p className="text-gray-500">sr.gangasingh@gmail.com</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <FaPhone className="text-indigo-500 w-6 h-6 mr-4" />
                            <div>
                                <h3 className="text-xl font-medium">Phone</h3>
                                <p className="text-gray-500">+1 (604) 906-2629</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <FaMapMarkerAlt className="text-indigo-500 w-6 h-6 mr-4" />
                            <div>
                                <h3 className="text-xl font-medium">Address</h3>
                                <p className="text-gray-500">6476 133a, Surrey, BC, V3W 7E3</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <Socials />
            </motion.section>
        </div>
    );
};

export default Contact;
