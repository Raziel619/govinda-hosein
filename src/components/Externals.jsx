import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { externalLinks, testimonials } from "../constants";
import Tilt from "react-tilt";

const ExternalCard = ({ index, link, title, subtitle, image }) => (
  <Tilt>
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 px-10 py-5 rounded-3xl xs:w-[320px] w-full"
    >
      <div className="flex gap-4 items-center">
        <img
          src={image}
          alt="Image"
          className="w-16 h-16 rounded-full bg-tertiary p-4 "
        />
        <a href={link} className="hover:underline" target="_blank">
          {title} <br /> {subtitle}
        </a>
      </div>
    </motion.div>
  </Tilt>
);

const Externals = () => {
  return (
    <div className="mt-4 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Other Works</p>
          <h2 className={styles.sectionHeadText}>External Links.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} mt-12 pb-14 flex flex-wrap gap-7`}>
        {externalLinks.map((external, index) => (
          <ExternalCard
            key={external.name}
            index={index}
            {...external}
          ></ExternalCard>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Externals, "");
