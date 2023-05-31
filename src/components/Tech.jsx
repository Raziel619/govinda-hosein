import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { toolbox, languages, frameworks } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technologies</p>
        <h2 className={styles.sectionHeadText}>Toolbox</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {toolbox.map((tool) => (
          <div className="h-28 w-28" key={tool.name}>
            <BallCanvas icon={tool.icon}></BallCanvas>
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-20">
        <p className={styles.sectionSubText}>My Technologies</p>
        <h2 className={styles.sectionHeadText}>Languages</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {languages.map((language) => (
          <div className="h-28 w-28" key={language.name}>
            <BallCanvas icon={language.icon}></BallCanvas>
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-20">
        <p className={styles.sectionSubText}>My Technologies</p>
        <h2 className={styles.sectionHeadText}>Frameworks</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {frameworks.map((framework) => (
          <div className="h-28 w-28" key={framework.name}>
            <BallCanvas icon={framework.icon}></BallCanvas>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
