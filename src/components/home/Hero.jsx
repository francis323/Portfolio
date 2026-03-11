import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const links = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/francisco-sequeira-mendoza/" },
    { Icon: Github, href: "https://github.com/francis323" },
    { Icon: Mail, href: "mailto:jose.sequeiramendoza@ucr.ac.cr" },
]

export function Hero() {
    return (
        <motion.div
            className="h-screen flex flex-col w-full justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex flex-col gap-10 md:gap-20">
                <motion.p className="text-lg md:text-2xl font-medium" variants={fadeUp}>
                    Francisco Sequeira <span className="text-span">- UX Designer</span>
                </motion.p>
                <motion.h1 className="text-3xl md:text-5xl" variants={fadeUp}>
                    UX-focused designer creating intuitive, accessible, and user-centered digital experiences from research to interface.
                </motion.h1>
            </div>

            <motion.div
                className="flex items-center justify-start gap-4 sm:gap-6 mt-8 md:mt-12"
                variants={fadeUp}
            >
                <a href="#" className="bg-foreground font-medium text-background hover:scale-105 py-2.5 px-4 rounded-full transition-all duration-300">
                    Get in touch
                </a>
                <div className="flex gap-3">
                    {links.map((link, i) => (
                        <motion.a
                            key={i}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link.href}
                            className="text-terciary hover:text-foreground hover:scale-105 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <link.Icon />
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}