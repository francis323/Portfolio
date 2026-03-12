import { motion } from "framer-motion"

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
    visible: { transition: { staggerChildren: 0.1 } },
};

export function WorkExperience({ data, last = false }) {
    return (
        <motion.div className="flex gap-6 relative" variants={fadeUp}>
            {/* Point with line */}
            <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-foreground mt-1 z-10 shrink-0" />
                <div className="w-px bg-stroke flex-1" />
            </div>

            {/* Data */}
            <div className={`flex-1 ${last ? '' : 'pb-14'}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2.5">
                    <h3 className="text-xl md:text-2xl">{data.title}</h3>
                    <p className="text-sm text-secondary sm:text-foreground whitespace-nowrap shrink-0">{data.duration}</p>
                </div>
                <p className="text-secondary mb-8.75">{data.company}</p>
                {data.highlights && (
                    <motion.ul
                        className="list-disc list-inside flex flex-col gap-6 text-secondary"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {data.highlights.map((highlight, index) => (
                            <motion.li key={index} variants={fadeUp}>{highlight}</motion.li>
                        ))}
                    </motion.ul>
                )}
            </div>
        </motion.div>
    )
}