import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className=" xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className="mt-4">
          Email me at{" "}
          <a href="mailto:raziel619dev@gmail.com" className="hover:underline">
            Raziel619dev@gmail.com
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
