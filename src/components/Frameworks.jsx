import React from "react";
import { SectionWrapper } from "../hoc";
import { frameworks } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import Tilt from "react-tilt";

const FrameworkItem = ({ framework, index }) => (
  <Tilt>
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
      <img
        src={framework.icon}
        title={framework.name}
        className="h-20 w-20 p-2 bg-white rounded-full"
        alt=""
      />
    </motion.div>
  </Tilt>
);

const Frameworks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.sectionHeadText}>Frameworks.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {frameworks.map((framework, index) => (
          <div
            className="h-28 w-28"
            key={framework.name}
            title={framework.name}
          >
            <FrameworkItem key={index} index={index} framework={framework} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Frameworks, "tech");
