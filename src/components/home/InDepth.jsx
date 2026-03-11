import { motion } from "framer-motion";
import { LaptopMockup } from "../project/LaptopMockup";
import pycon from "/assets/projects/pyconlatam.png";
import portfolio from "/assets/projects/portfolio.png";
import { ProjectCard } from "../project/ProjectCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function InDepth() {
  return (
    <section>
      <motion.h2
        className="text-center text-[2.5rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        In-depth Case Studies and Projects
      </motion.h2>
      <ProjectCard
        title="PyCon Latam 2026 Web Experience"
        description="PyCon Latam is the regional conference for the Python community in Latin America, bringing together developers, educators, researchers, and enthusiasts from across the region. The event features talks, workshops, tutorials, and collaborative sessions focused on sharing knowledge, fostering learning, and strengthening the Python ecosystem in Latin America."
        screenImage={pycon}
        alt="PyCon Latam 2023 website"
        onClick={() => window.open("https://pyconlatam.org/2023/", "_blank")}
      />
      <ProjectCard
        title="Personal Portfolio"
        description="An in-depth look at the design and development of my personal portfolio website, highlighting the challenges faced and solutions implemented to create an engaging user experience."
        screenImage={portfolio}
        alt="Personal Portfolio website"
        reversed={true}
        onClick={() => window.open("https://francis323.github.io/Portfolio/", "_blank")}
      />
    </section>
  );
}