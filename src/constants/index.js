import * as assets from "../assets";

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: assets.web,
  },
  {
    title: "UI/UX Designer (Figma)",
    icon: assets.web,
  },
  {
    title: "Content Creator",
    icon: assets.creator,
  },
  {
    title: "Game Developer (Unity)",
    icon: assets.web,
  },
  {
    title: "Mobile App Developer (Flutter)",
    icon: assets.mobile,
  },
  {
    title: "Automation Engineer",
    icon: assets.backend,
  },
];

const toolbox = [
  {
    name: "React",
    icon: assets.reactjs,
  },
  {
    name: "Node JS",
    icon: assets.nodejs,
  },
  {
    name: "git",
    icon: assets.git,
  },
  {
    name: "figma",
    icon: assets.figma,
  },
  {
    name: "docker",
    icon: assets.docker,
  },
];

const languages = [
  {
    name: "HTML 5",
    icon: assets.html,
  },
  {
    name: "PHP",
    icon: assets.php,
  },
  {
    name: "C#",
    icon: assets.csharp,
  },
  {
    name: "Python",
    icon: assets.python,
  },
  {
    name: "Java",
    icon: assets.java,
  },
  {
    name: "Dart",
    icon: assets.dart,
  },
  {
    name: "JavaScript",
    icon: assets.javascript,
  },
];

const frameworks = [
  {
    name: "Tailwind CSS",
    icon: assets.tailwind,
  },
  {
    name: "Laravel",
    icon: assets.laravel,
  },
  {
    name: "Django",
    icon: assets.django,
  },
  {
    name: "Flask",
    icon: assets.flask,
  },
  {
    name: "Flutter",
    icon: assets.flutter,
  },
  {
    name: "unity",
    icon: assets.unity,
  },
];

const experiences = [
  {
    title: "ICT Technologist",
    company_name: "Caribbean Industrial Research Institute",
    icon: assets.cariri,
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
    icon: assets.uwi,
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
    icon: assets.fasove,
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
    icon: assets.digicel,
    iconBg: "#FFFFFF",
    date: "November 2020 - Present",
    points: [
      "A core developer of the MyDigicel App. Built in flutter and published to both google play and ios stores. Has more than 10 million downloads",
      "Designed, developed and deployed DigiAssist, a platform for both customers and internal agents to troubleshoot modem issues with an automated flow. UI/UX designs were created in figma",
      "Implemented responsive design and ensured cross-browser compatibility",
      "Automated manual tasks across the entire company using primarily python",
      "Delivered",
      "Effectively deployed numerous web applications to meet business needs",
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
    tags: ["react", "mongodb", "tailwind"],
    image: assets.carrent,
    link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: ["react", "mongodb", "tailwind"],
    image: assets.jobit,
    link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: ["react", "mongodb", "tailwind"],
    image: assets.tripguide,
    link: "https://github.com/",
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
