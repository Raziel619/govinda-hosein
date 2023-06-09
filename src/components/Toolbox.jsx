import React from "react";
import { SectionWrapper } from "../hoc";
import { toolbox } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import Tilt from "react-tilt";

const ToolboxItem = ({ tool, index }) => (
  <Tilt>
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
      <img
        src={tool.icon}
        title={tool.name}
        className="h-20 w-20 p-2 bg-white rounded-full"
        alt=""
      />
    </motion.div>
  </Tilt>
);

const Toolbox = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.sectionHeadText}>Toolbox.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {toolbox.map((tool, index) => (
          <div className="h-28 w-28" key={tool.name} title={tool.name}>
            <ToolboxItem key={index} index={index} tool={tool} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Toolbox, "");
