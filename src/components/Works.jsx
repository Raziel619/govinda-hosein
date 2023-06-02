import React from "react";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const TagColors = [
  "blue-text-gradient",
  "green-text-gradient",
  "pink-text-gradient",
];

const ProjectCard = ({ name, description, image, tags, links }) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex m-3 card-img_hover">
          {links.map((link, index) => (
            <div
              onClick={() => window.open(link.href, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1"
              key={index}
              title={link.title}
            >
              <img
                src={link.icon}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <p
            key={index}
            className={`text-[14px] ${TagColors[index % TagColors.length]}`}
          >
            #{tag}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>

      <div className="w-full flex">
        <div className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies.
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
