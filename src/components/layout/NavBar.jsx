import { useState } from "react";
import logo from '/logo.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useNavigate } from "react-router-dom";


export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <motion.nav className='bg-background flex justify-center p-5 pb-36 fixed top-0 left-0 w-full z-50'
                style={{ background: 'linear-gradient(to top, transparent 0%, transparent 0%, var(--color-background) 45%, var(--color-background) 100%)' }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                role="navigation"
            >
                <div className='max-w-308 flex justify-between w-full items-center'>
                    <button className="cursor-pointer" onClick={() => {navigate("/"), window.scrollTo({ top: 0, behavior: 'smooth' });}}>
                        <img src={logo} alt="Logo" />
                    </button>

                    {/* Desktop */}
                    <ul className="hidden md:flex gap-4 font-inter uppercase text-sm font-medium text-secondary">
                        <li><a className='hover:text-foreground transition-colors duration-300' href="#work">Work</a></li>
                        <li><a className='hover:text-foreground transition-colors duration-300' href="#about">About</a></li>
                        <li><a className='hover:text-foreground transition-colors duration-300' href="#contact">Contact</a></li>
                    </ul>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden text-secondary hover:text-foreground transition-colors duration-300 z-60"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="md:hidden fixed inset-0 z-55"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                backdropFilter: 'blur(4px)',
                                WebkitBackdropFilter: 'blur(4px)'
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsOpen(false)}
                        >

                            {/* Sidebar */}
                            {/* Sidebar */}
                            <motion.div
                                className="md:hidden fixed top-0 right-0 h-full w-2/3 max-w-xs z-60 flex flex-col justify-center px-10"
                                style={{ background: 'var(--color-background)' }}
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <button
                                    className="absolute top-5 right-5 text-secondary hover:text-foreground transition-colors duration-300"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <X size={22} />
                                </button>

                                <ul className="flex flex-col gap-8 font-inter uppercase text-sm font-medium text-secondary">
                                    {["work", "about", "contact"].map((item, i) => (
                                        <motion.li
                                            key={item}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                                        >
                                            <a
                                                className='hover:text-foreground transition-colors duration-300'
                                                href={`#${item}`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}