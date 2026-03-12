import { motion } from "framer-motion"
import { useParams } from "react-router-dom"
import { projects } from "../../data/projects"

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
}

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

export function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <div className="mt-40 flex justify-center items-center">Project not found</div>;
    }
    return (
        <div className="mt-44 md:px-0">

            {/* Hero */}
            <motion.div
                className="flex flex-col gap-8 md:gap-12"
                variants={stagger}
                initial="hidden"
                animate="visible"
            >
                <motion.span className="text-xs font-medium text-tags uppercase" variants={fadeUp}>
                    Case study
                </motion.span>
                <motion.h1 className="text-4xl md:text-[4rem] leading-tight" variants={fadeUp}>
                    {project.title}
                </motion.h1>
                <motion.p className="text-xl md:text-2xl text-secondary" variants={fadeUp}>
                    {project.description}
                </motion.p>
                <motion.div className="flex flex-wrap gap-2" variants={fadeUp}>
                    {project.tags.map((tag, index) => (
                        <span key={tag} className="text-tags text-sm">
                            {tag}
                            {index !== project.tags.length - 1 && " •"}
                        </span>
                    ))}
                </motion.div>
            </motion.div>

            <motion.img
                className="mt-12 md:mt-20 rounded-lg w-full"
                src={project.screenImage}
                alt={project.alt}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />

            {/* Overview */}
            {project.overView && (
                <motion.section
                    className="mt-32 md:mt-60"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    <motion.h2 className="text-3xl md:text-[2.5rem]" variants={fadeUp}>Overview</motion.h2>
                    {project.overView.problem && (
                        <motion.div className="mt-10 md:mt-13" variants={fadeUp}>
                            <h3 className="text-xl md:text-2xl">Problem</h3>
                            <p className="text-secondary text-xl md:text-2xl mt-6">{project.overView.problem}</p>
                        </motion.div>
                    )}
                    {project.overView.solution && (
                        <motion.div className="mt-10 md:mt-13" variants={fadeUp}>
                            <h3 className="text-xl md:text-2xl">Solution</h3>
                            <p className="text-secondary text-xl md:text-2xl mt-6">{project.overView.solution}</p>
                        </motion.div>
                    )}
                </motion.section>
            )}

            {/* Research */}
            {project.research && (
                <motion.section
                    className="mt-32 md:mt-60"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    <motion.h2 className="text-3xl md:text-[2.5rem]" variants={fadeUp}>Research</motion.h2>
                    <motion.p className="text-secondary text-xl md:text-2xl mt-10 md:mt-13" variants={fadeUp}>
                        {project.research.description}
                    </motion.p>
                    {project.research.insights && (
                        <motion.div className="flex gap-8 mt-12" variants={fadeUp}>
                            <div className="border-3 border-stroke"></div>
                            <ul className="flex flex-col gap-4">
                                {project.research.insights.map((insight, index) => (
                                    <li key={index} className="text-secondary text-lg md:text-xl">{insight}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </motion.section>
            )}

            {/* Approach */}
            {project.aproach && (
                <motion.section
                    className="mt-32 md:mt-60"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    <motion.h2 className="text-3xl md:text-[2.5rem]" variants={fadeUp}>Approach</motion.h2>
                    <motion.p className="text-secondary text-xl md:text-2xl mt-10 md:mt-13" variants={fadeUp}>
                        {project.aproach.description}
                    </motion.p>
                    {project.aproach.methods && (
                        <motion.div className="mt-10 md:mt-13" variants={fadeUp}>
                            <h3 className="text-xl md:text-2xl">Methods</h3>
                            <p className="text-secondary text-xl md:text-2xl mt-6">{project.aproach.methods}</p>
                        </motion.div>
                    )}
                    {project.aproach.tools && (
                        <motion.div className="mt-10 md:mt-13" variants={fadeUp}>
                            <h3 className="text-xl md:text-2xl">Tools</h3>
                            <p className="text-secondary text-xl md:text-2xl mt-6">{project.aproach.tools}</p>
                        </motion.div>
                    )}
                </motion.section>
            )}

            {/* Role */}
            {project.role && (
                <motion.section
                    className="mt-32 md:mt-60"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    <motion.h2 className="text-3xl md:text-[2.5rem]" variants={fadeUp}>My role</motion.h2>
                    <motion.p className="text-secondary text-xl md:text-2xl mt-10 md:mt-13" variants={fadeUp}>
                        {project.role.description}
                    </motion.p>
                    {project.role.responsibilities && (
                        <motion.ul className="flex flex-col gap-6 md:gap-8 mt-10 md:mt-13 list-disc pl-6" variants={stagger}>
                            {project.role.responsibilities.map((responsibility, index) => (
                                <motion.li key={index} className="text-secondary text-lg md:text-xl" variants={fadeUp}>
                                    {responsibility}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </motion.section>
            )}

            {/* Process */}
            {project.process && (
                <motion.section
                    className="mt-32 md:mt-60"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    <motion.h2 className="text-3xl md:text-[2.5rem]" variants={fadeUp}>Design process</motion.h2>
                    <motion.p className="text-secondary text-xl md:text-2xl mt-10 md:mt-13" variants={fadeUp}>
                        {project.process.description}
                    </motion.p>
                    {project.process.gallery && (
                        <motion.div className="mt-10 md:mt-13 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={stagger}>
                            {project.process.gallery.map((image, index) => (
                                <motion.img
                                    key={index}
                                    src={image}
                                    alt={`${project.title} process ${index + 1}`}
                                    className="rounded-sm w-full"
                                    variants={fadeUp}
                                />
                            ))}
                        </motion.div>
                    )}
                </motion.section>
            )}

            {/* Outcomes */}
            {project.outcomes && (
                <motion.section
                    className="mt-32 md:mt-60"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    <motion.h2 className="text-3xl md:text-[2.5rem]" variants={fadeUp}>Outcomes</motion.h2>
                    <motion.p className="text-secondary text-xl md:text-2xl mt-10 md:mt-13" variants={fadeUp}>
                        {project.outcomes.description}
                    </motion.p>
                    {project.outcomes.results && (
                        <motion.div className="flex gap-8 mt-12" variants={fadeUp}>
                            <div className="border-3 border-stroke"></div>
                            <ul className="flex flex-col gap-4">
                                {project.outcomes.results.map((result, index) => (
                                    <li key={index} className="text-secondary text-lg md:text-xl">{result}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </motion.section>
            )}

            {/* Reflection */}
            {project.reflection && (
                <motion.section
                    className="mt-32 md:mt-60 mb-32 md:mb-50"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    <motion.h2 className="text-3xl md:text-[2.5rem]" variants={fadeUp}>Reflection</motion.h2>
                    <motion.p className="text-secondary text-xl md:text-2xl mt-10 md:mt-13" variants={fadeUp}>
                        {project.reflection}
                    </motion.p>
                </motion.section>
            )}

        </div>
    )
}