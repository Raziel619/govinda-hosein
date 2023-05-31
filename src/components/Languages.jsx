import React from "react";
import { SectionWrapper } from "../hoc";
import { languages } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import Tilt from "react-tilt";

const LanguageItem = ({ language, index }) => (
  <Tilt>
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
      <img
        src={language.icon}
        title={language.name}
        className="h-16 w-16 p-2 bg-white rounded-md"
        alt=""
      />
    </motion.div>
  </Tilt>
);

const Languages = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technologies</p>
        <h2 className={styles.sectionHeadText}>Languages</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {languages.map((language, index) => (
          <div className="h-28 w-28" key={language.name}>
            {/* <BallCanvas icon={language.icon}></BallCanvas> */}
            <LanguageItem index={index} language={language} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Languages, "");
