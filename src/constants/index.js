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

const projects = [
  {
    name: "Raziel619 - Blog",
    description:
      "Blog containing tutorial posts, app release notes and public software packages and repos.",
    tags: ["Wordpress"],
    image: assets.blog,
    links: [
      {
        icon: assets.linkicon,
        href: "https://www.raziel619.com/",
        title: "Link",
      },
    ],
  },
  {
    name: "All Fours Mobile",
    description:
      "Hang ah Jack! Kick ah Six! All Fours Mobile is completely free to play. Release provides players a strong AI to play with and against during spare time in this tradition four (4) player game.",
    tags: ["Unity", "MobileGame"],
    image: assets.allfoursmobile,
    links: [
      {
        icon: assets.applestore,
        href: "https://apps.apple.com/gb/app/all-fours-mobile/id1573349538",
        title: "Apple Store Link",
      },
      {
        icon: assets.googleplay,
        href: "https://play.google.com/store/apps/details?id=om.Raziel619",
        title: "Google Play Store Link",
      },
      {
        icon: assets.linkicon,
        href: "https://dev.raziel619.com/afm/",
        title: "Dashboard",
      },
    ],
  },
  {
    name: "Floppy Pidgeon",
    description:
      "Flap your way into the leader board in this addictive new title.",
    tags: ["Unity", "MobileGame"],
    image: assets.floppypidgeon,
    links: [
      {
        icon: assets.googleplay,
        href: "https://play.google.com/store/apps/details?id=com.Raziel619.FloppyPidgeon",
        title: "Google Play Store Link",
      },
    ],
  },
  {
    name: "DigiAssist",
    description:
      "DigiAssist is the ultimate solution hub for all your Digicel product and service issues. With a comprehensive list of automated tools, you can troubleshoot any problem from the comfort of your own home.",
    tags: ["Django", "React", "Tailwind"],
    image: assets.digiassist,
    links: [
      {
        icon: assets.linkicon,
        href: "https://service.digiceltt.com/digiassist/",
        title: "Link",
      },
    ],
  },
  {
    name: "MyDigicel App",
    description:
      "Manage your account and complete all your Digicel transactions. Features include activate plans and subscriptions, pay your Digicel Bills using your credit/debit card, Top-up your account, check your balance and data usage, send credit to family & friends",
    tags: ["Flutter", "RestAPI"],
    image: assets.mydigicel,
    links: [
      {
        icon: assets.applestore,
        href: "https://apps.apple.com/gb/app/mydigicel/id1039460951",
        title: "Apple Store Link",
      },
      {
        icon: assets.googleplay,
        href: "https://play.google.com/store/apps/details?id=com.digicel.selfcare.mobile",
        title: "Google Play Link",
      },
    ],
  },
  {
    name: "Type Me Senpai",
    description:
      "Type Me Senpai is a hyper-casual game where players can measure their typing speed on their mobile device.",
    tags: ["Unity", "MobileGame"],
    image: assets.typemesenpai,
    links: [
      {
        icon: assets.applestore,
        href: "https://apps.apple.com/us/app/type-me-senpai/id1575305113",
        title: "Apple Store Link",
      },
      {
        icon: assets.googleplay,
        href: "https://play.google.com/store/apps/details?id=com.Raziel619.TypeMeSenpai",
        title: "Google Play Link",
      },
    ],
  },
  {
    name: "Hit Ah Fish",
    description:
      "Got the fastest fingers?! Test your might to top the leaderboard!",
    tags: ["Unity", "MobileGame"],
    image: assets.hitahfish,
    links: [
      {
        icon: assets.applestore,
        href: "https://apps.apple.com/us/app/hit-ah-fish/id1576041171",
        title: "Apple Store Link",
      },
      {
        icon: assets.googleplay,
        href: "https://play.google.com/store/apps/details?id=com.Raziel619.HitAhFish&hl=en&gl=US",
        title: "Google Play Link",
      },
    ],
  },
  {
    name: "Protector Of The Cosmos",
    description: "Use your ship to save the galaxy!",
    tags: ["Unity", "MobileGame"],
    image: assets.protectorofthecosmos,
    links: [
      {
        icon: assets.applestore,
        href: "https://apps.apple.com/us/app/protector-of-the-cosmos/id1575105139",
        title: "Apple Store Link",
      },
      {
        icon: assets.googleplay,
        href: "https://play.google.com/store/apps/details?id=com.Raziel619.ProtectorOfTheCosmos",
        title: "Google Play Link",
      },
    ],
  },
  {
    name: "Bird Tap",
    description: "These birds said you’re too slow, prove them wrong!",
    tags: ["Unity", "MobileGame"],
    image: assets.birdtap,
    links: [
      {
        icon: assets.applestore,
        href: "https://apps.apple.com/us/app/bird-tap/id1576066324",
        title: "Apple Store Link",
      },
      {
        icon: assets.googleplay,
        href: "https://play.google.com/store/apps/details?id=com.Raziel619.BirdTap",
        title: "Google Play Link",
      },
    ],
  },
  {
    name: "FarmVue",
    description:
      "FarmVue is a mobile app built for farmers to track their produce",
    tags: ["Flutter", "RestAPI"],
    image: assets.farmvuemobile,
    links: [
      {
        icon: assets.applestore,
        href: "https://apps.apple.com/us/app/good-agricultural-practices/id1569043989",
        title: "Apple Store Link",
      },
      {
        icon: assets.googleplay,
        href: "https://play.google.com/store/apps/details?id=com.raziel619.gaptt_mobile",
        title: "Google Play Link",
      },
      {
        icon: assets.linkicon,
        href: "https://farmvue.app/",
        title: "Link",
      },
    ],
  },
  {
    name: "Crypto Of The Day",
    description:
      "Crypto Of The Day, an app that introduces you to a new cryptocurrency project every day. By regularly looking at new projects, you will naturally develop the ability to distinguish between a good investment and a bad one.",
    tags: ["Flutter", "RestAPI", "CryptoCurrency"],
    image: assets.cryptooftheday,
    links: [
      {
        icon: assets.googleplay,
        href: "https://play.google.com/store/apps/details?id=com.raziel619.crypto_of_the_day",
        title: "Google Play Link",
      },
    ],
  },
];

const externalLinks = [
  {
    title: "Google Scholars",
    subtitle: "(7 Publications)",
    link: "https://scholar.google.com/citations?user=Lm_u-F0AAAAJ",
    image: assets.googlescholar,
  },
  {
    title: "Github",
    subtitle: "(>17 Public Repos)",
    link: "https://github.com/Raziel619",
    image: assets.github,
  },
  {
    title: "LinkedIn",
    subtitle: "",
    link: "https://tt.linkedin.com/in/govinda-hosein-94b8ab71",
    image: assets.linkedin,
  },
];

export {
  externalLinks,
  services,
  toolbox,
  languages,
  frameworks,
  experiences,
  projects,
};
