import { motion } from "framer-motion"
import { WorkExperience } from "./WorkExperience";
import { personal_data } from "../../data/projects";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

export function Experience() {
    return (
        <section id="experience" className="lg:my-36 my-12">
            <motion.h2
                className="text-center text-[2.5rem]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
            >
                Work Experience
            </motion.h2>
            <motion.div
                className="mt-35"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={stagger}
            >
                {personal_data.workExperience && personal_data.workExperience.map((experience, index) => (
                    <WorkExperience key={index} data={experience} last={index === personal_data.workExperience.length - 1} />
                ))}
            </motion.div>
        </section>
    )
}