import { motion } from "framer-motion";
import { ProjectCard } from "../project/ProjectCard";
import { projects_display } from "../../data/projects";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function InDepth() {
  const navigate = useNavigate();
  return (
    <section id="work" className="lg:my-36 overflow-hidden">
      <motion.h2
        className="text-center text-2xl md:text-[2.5rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        In-depth Case Studies and Projects
      </motion.h2>
      {projects_display.map((project) => (
        <ProjectCard
          key={project.id}
            title={project.title}
            description={project.description}
            screenImage={project.screenImage}
            alt={project.title}
            onClick={() => {navigate(`/projects/${project.id}`), window.scrollTo({ top: 0, behavior: 'smooth' });}}
            reversed={project.id % 2 === 0}
        />
      ))}
    </section>
  );
}