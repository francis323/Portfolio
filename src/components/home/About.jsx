import { personal_data } from "../../data/projects"
import { motion } from "framer-motion";

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
    visible: { transition: { staggerChildren: 0.12 } },
};

export function About() {
    return (
        <section id="about" className="lg:my-36 my-12">
            <motion.h2
                className="text-center text-[2.5rem]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
            >
                About Me
            </motion.h2>
            <div className="flex gap-20 mt-35 flex-col lg:flex-row">

                {/* Highlights */}
                <motion.div
                    className="flex flex-col gap-12 max-w-xl w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    {personal_data.about.highlights.map((highlight, i) => (
                        <motion.div key={i} className="flex flex-col gap-3" variants={fadeUp}>
                            <h3 className="text-xl">{highlight.title}</h3>
                            <p className="text-lg text-secondary">{highlight.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="w-full flex flex-col gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    <motion.div className="p-8 border-2 border-stroke rounded-2xl" variants={fadeUp}>
                        <h3 className="text-lg">Profile Overview</h3>
                        <div className="mt-6 flex flex-col gap-6">
                            <div>
                                <h4 className="text-sm uppercase text-terciary">Location</h4>
                                <p>{personal_data.about.location}</p>
                            </div>
                            <div>
                                <h4 className="text-sm uppercase text-terciary">Education</h4>
                                <p>{personal_data.about.education}</p>
                            </div>
                            <div>
                                <h4 className="text-sm uppercase text-terciary">Focus areas</h4>
                                <p>{personal_data.about.focusAreas}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="p-8 border-2 border-stroke rounded-2xl" variants={fadeUp}>
                        <h3 className="text-lg">Currently learning</h3>
                        <div className="flex flex-col mt-6 gap-6">
                            {personal_data.about.currentlyLearning.map((item, i) => (
                                <p className="text-secondary" key={i}>{item}</p>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}