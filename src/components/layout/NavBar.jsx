import logo from '/logo.svg'
import { motion } from 'framer-motion'

export function NavBar() {
    return (
        <motion.nav className='bg-background flex justify-center p-5 pb-36 fixed top-0 left-0 w-full z-50'
            style={{ background: 'linear-gradient(to top, transparent 0%, transparent 0%, var(--color-background) 45%, var(--color-background) 100%)' }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            role="navigation"
        >
            <div className='max-w-308 flex justify-between w-full items-center'>
                <img src={logo} alt="Logo" />
                <ul className="flex gap-4 font-inter uppercase text-sm font-medium text-foreground">
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

        </motion.nav>
    )
}