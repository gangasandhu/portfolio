// src/components/Contact/ContactForm.tsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";

interface FormData {
    user_name: string;
    user_email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validate = (data: FormData): Partial<FormData> => {
        const newErrors: Partial<FormData> = {};
        if (!data.user_name.trim()) newErrors.user_name = "Name is required.";
        if (!data.user_email.trim()) {
            newErrors.user_email = "Email is required.";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.user_email))
                newErrors.user_email = "Please enter a valid email address.";
        }
        if (!data.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        const formData: FormData = {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
            message: form.current.message.value,
        };

        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID, // Replace with your EmailJS service ID
                import.meta.env.VITE_TEMPLATE_ID, // Replace with your EmailJS template ID
                form.current,
                import.meta.env.VITE_PUBLIC_KEY // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Message sent successfully!");
                    form.current && form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    toast.error("Something went wrong. Please try again later.");
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-6">Send a Message</h2>
            <form ref={form} onSubmit={sendEmail} noValidate>
                <div className="mb-4">
                    <label
                        htmlFor="user_name"
                        className="block text-color-secondary font-medium mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        className={`w-full px-4 py-2 border ${errors.user_name
                            ? "border-red-500 dark:border-red-400"
                            : "border-gray-300 dark:border-gray-600"
                            } rounded-md bg-secondary-200 text-color-primary focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`}
                        placeholder="Your Name"
                    />
                    {errors.user_name && (
                        <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                            {errors.user_name}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="user_email"
                        className="block text-color-secondary font-medium mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        className={`w-full px-4 py-2 border ${errors.user_email
                            ? "border-red-500 dark:border-red-400"
                            : "border-gray-300 dark:border-gray-600"
                            } rounded-md bg-secondary-200 text-color-primary  focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`}
                        placeholder="you@example.com"
                    />
                    {errors.user_email && (
                        <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                            {errors.user_email}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-color-secondary font-medium mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows={5}
                        className={`w-full px-4 py-2 border ${errors.message
                            ? "border-red-500 dark:border-red-400"
                            : "border-gray-300 dark:border-gray-600"
                            } rounded-md bg-secondary-200 text-color-primary focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`}
                        placeholder="Your message..."
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                            {errors.message}
                        </p>
                    )}
                </div>
                <motion.button
                    type="submit"
                    className="w-full bg-accent-primary text-white py-2 px-4 rounded-md hover:bg-accent-primary-focus transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>

            </form>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
            />
        </div>
    );
};

export default ContactForm;
