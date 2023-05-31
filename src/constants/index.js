import {
  cariri,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  uwi,
  fasove,
  digicel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer (Figma)",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Game Developer (Unity)",
    icon: web,
  },
  {
    title: "Mobile App Developer (Flutter)",
    icon: mobile,
  },
  {
    title: "Automation Engineer",
    icon: backend,
  },
];

const toolbox = [
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const languages = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
];

const frameworks = [
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "ICT Technologist",
    company_name: "Caribbean Industrial Research Institute",
    icon: cariri,
    iconBg: "#FFFFFF",
    date: "September 2014 - September 2017",
    points: [
      "Team member of the Data Innovations Solutions Centre (DISC)",
      "Provided IT support to the Centre for Enterprise Development (CED)",
      "Delivered numerous programming workshops at the Microsoft Innovation Centre (MIC)",
      "Maintained all company websites",
      "Supervised the development of an Electronic Health Record (EHR) system",
      "Developed the prototype and supported subsequent release of the Hyperglycemia in Pregnancy Trinidad and Tobago (HiPTT) online platform",
    ],
  },
  {
    title: "Associate Professional",
    company_name: "Department of Electrical and Computer Engineering, UWI",
    icon: uwi,
    iconBg: "#FFFFFF",
    date: "February 2019 - February 2020",
    points: [
      "Designed and supervised the installation of the first Electric Vehicle (EV) charging station for the University of the West Indies (UWI), St. Augustine campus",
      "Wrote and submitted 6 research papers for publication in the field of renewable energy, EVs and Machine Learning (ML)",
      "Delivered training workshops for power system modelling in the PowerFactory software",
      "Facilitated an external PhD study by partially modelling Trinidad and Tobago's transmission and distribution system",
    ],
  },
  {
    title: "Electrical and Computer Engineer",
    company_name: "FaSoVe",
    icon: fasove,
    iconBg: "#FFFFFF",
    date: "February 2020 - October 2020",
    points: [
      "Designed, developed and deployed the ProTool; an online assessment productivity measurement tool for the National Competitiveness and Producitivty Council (NCPC) of St. Lucia.",
      "Performed code refactoring and visual updates to the Percussion Harmonic Instrument (P.H.I.) table app",
      "Designed, developed and deployed and online platform to remotely monitor boats",
    ],
  },
  {
    title: "Software Development and Design Engineer",
    company_name: "Digicel",
    icon: digicel,
    iconBg: "#FFFFFF",
    date: "November 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  toolbox,
  languages,
  frameworks,
  experiences,
  testimonials,
  projects,
};
