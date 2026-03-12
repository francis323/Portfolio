import { motion } from "framer-motion";
import { LaptopMockup } from "./LaptopMockup";
import { ArrowRight } from "lucide-react";

export function ProjectCard({ title, description, screenImage, alt, reversed = false, onClick }) {
  return (
    <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-5 sm:gap-20 my-12`}>

      <motion.div
        className="md:w-1/2 flex flex-col gap-9"
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="text-xl md:text-4xl mb-4">{title}</h3>
        <p className="text-secondary">{description}</p>
        <div>
          <motion.button
            onClick={onClick}
            className="text-terciary cursor-pointer"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Case Study <ArrowRight className="inline-block ml-1" />
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: reversed ? 0.15 : 0.35 }}
      >
        <LaptopMockup screenImage={screenImage} alt={alt} />
      </motion.div>

    </div>
  );
}