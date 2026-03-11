import { div } from "framer-motion/client";
import { Linkedin, Github, Mail } from "lucide-react";

export function Home() {
    return (
        <div className="h-screen flex flex-col w-full justify-center gap-4">
            <div className="flex flex-col gap-20">
                <p className="text-2xl font-medium">Francisco Sequeira <span className="text-span">- UX Designer</span></p>
                <h1 className="text-5xl">UX-focused designer creating intuitive, accessible, and user-centered digital experiences from research to interface.</h1>
            </div>

            <div className="flex items-center justify-start gap-6 mt-12">
                <a href="#" className="bg-foreground font-medium text-background hover:scale-105 py-2.5 px-4 rounded-full transition-all duration-300">
                    Get in touch
                </a>
                <div className="flex gap-3">
                    <a href="#" className="text-terciary hover:text-foreground hover:scale-105 transition-all duration-300">
                        <Linkedin />
                    </a>
                    <a href="#" className="text-terciary hover:text-foreground hover:scale-105 transition-all duration-300">
                        <Github />
                    </a>
                    <a href="#" className="text-terciary hover:text-foreground hover:scale-105 transition-all duration-300">
                        <Mail />
                    </a>
                </div>
            </div>
            
        </div>
    )
}