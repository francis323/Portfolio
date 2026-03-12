import { motion } from "framer-motion"
import { personal_data } from "../../data/projects";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

export function Skills() {
    return (
        <section className="lg:my-36 my-24">
            <motion.h2
                className="text-center text-2xl md:text-[2.5rem]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
            >
                Skills and Expertise
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-17 mt-12 lg:mt-35">

                {/* Design Skills */}
                <motion.div
                    className="bg-card border border-stroke rounded-2xl p-8 md:w-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <h3 className="text-lg">Design Skills</h3>
                    <motion.ul
                        className="list-disc list-inside mt-9 text-secondary flex flex-col gap-4"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {personal_data.skills.uxTechnical.map((skill, index) => (
                            <motion.li key={index} variants={fadeUp}>{skill}</motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                    className="bg-card border border-stroke rounded-2xl p-8 md:w-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{ delay: 0.15 }}
                >
                    <h3 className="text-lg">Soft Skills</h3>
                    <motion.ul
                        className="list-disc list-inside mt-9 text-secondary flex flex-col gap-4"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {personal_data.skills.softSkills.map((skill, index) => (
                            <motion.li key={index} variants={fadeUp}>{skill}</motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

            </div>
        </section>
    )
}