import { Hero } from "../home/Hero";
import { InDepth } from "../home/InDepth";
import { About } from "../home/About";
import { Skills } from "../home/Skills";
import { Experience } from "../home/Experience";

export function Home() {
    return (
        <>
            <Hero />
            <InDepth />
            <About />
            <Skills />
            <Experience />
        </>
    );
}