import { buffs, gsnc, jvg, unc } from "../assets/images";
import {
  aws,
  contact,
  css,
  express,
  git,
  github,
  graphql,
  html,
  javascript,
  jquery,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  hiker,
  react,
  redux,
  sass,
  sql,
  tailwindcss,
  typescript,
  handlebars,
  jest,
  flavfinds,
  prt,
  waveexchange,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: aws,
    name: "Amazon Web Services",
    type: "Cloud Services",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: graphql,
    name: "GraphQL",
    type: "Backend",
  },
  {
    imageUrl: handlebars,
    name: "Handlebars.js",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: jest,
    name: "Jest",
    type: "Testing Library",
  },
  {
    imageUrl: jquery,
    name: "jQuery",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Database",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  // {
  //   imageUrl: typescript,
  //   name: "TypeScript",
  //   type: "Frontend",
  // },
];

export const experiences = [
  {
    title: "Manager",
    company_name: "Joe Van Gogh",
    icon: jvg,
    iconBg: "#C3B1E1",
    date: "October 2020 - Present",
    points: [
      "Successfully managed daily operations of a beloved, local coffee shop, ensuring smooth workflow and exceptional customer service.",
      "Supervised a team of nine employees, providing training, guidance, and performance feedback to ensure high standards of service.",
      "Average Quarterly Revenue Growth during my time as manager: 11.38%.",
      "Praised for an excellent work environment due to rigorous hiring standards.",
      "Promoted to Manager after working as a barista for a year.",
      "ServeSafe Certified.",
    ],
  },
  {
    title: "Certificate in Full Stack Web Development",
    company_name: "UNC Chapel Hill",
    icon: unc,
    iconBg: "#bbdefb",
    date: "July 2023 - Jan 2024",
    points: [
      "An intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handelbars.js, and React.js.",
      "The projects encompassing this program were designed to be collaborative and enlisted the use of cutting edge technology and best coding practices.",
      "Some of the projects featured in this portfolio were created during this program.",
    ],
  },
  {
    title: "Teacher Assistant / Counselor",
    company_name: "North Carolina Governor's School",
    icon: gsnc,
    iconBg: "#FFC58E",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Led and facilitated classes at an exalted summer program for gifted high school students.",
      "Assisted teachers with curriculum planning, student engagement, teaching classes, leading labs, and nerding out over biology and technology.",
      "Directly responsible for the health and well being of 30 students.",
      "Led seminars and weekly elective activities such as guided ornithological tours and talks on the intersections of bird song and classical music.",
    ],
  },
  {
    title: "BS Biology & Pre-Veterinary Medicine (Cum Laude)",
    company_name: "University of Colorado Boulder",
    icon: buffs,
    iconBg: "#C1E1C1",
    date: "August 2015 - May 2019",
    points: [
      "Graduated in four years with latin honors.",
      "Conducted independent research in Costa Rica, culminating in an honors thesis.",
      "Prepared me for professional data collection, analysis, and presentation.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/anewgard41",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/andrew-newgard",
  },
];

export const projects = [
  {
    iconUrl: waveexchange,
    theme: "btn-back-orange",
    name: "Wave Exchange",
    description:
      "Your next music-sharing platform, search for songs using lyrics! Seamless discovery of new tunes and remembering those ear worms, enhanced by a user-friendly interface, personalized experiences, and efficient browsing with GraphQL. This project was built with React.js, antd, JavaScript, MongoDB, GraphQL, Stripe, Figma, Render, Express, Mongoose, and JWT. I personally was responsible for the backend, authentication, and integrating Stripe for payment processing of donations to the website.",
    link: "https://wave-exchange.onrender.com/",
  },
  {
    iconUrl: hiker,
    theme: "btn-back-green",
    name: "Trailbuddy",
    description:
      "Trail finding application with a social media component that enables the sharing of hiking experiences. Find friends, trails, hike, and tell a story! This application was built using Handlebars.js as the frontend framework, while Express and MySQL were used for the backend. I designed the backend, including the database schema, server configuartion, and API routes. I also implemented the user authentication and session management.", 
    link: "https://trail-buddy-cary-nc-4eb34ba4009f.herokuapp.com/",
  },
  {
    iconUrl: prt,
    theme: "btn-back-blue",
    name: "Open Source Contributer to Phaser React Tools",
    description:
      "",
    link: "https://github.com/benrosen/phaser-react-tools",
  },
  {
    iconUrl: flavfinds,
    theme: "btn-back-blue",
    name: "Flavorful Finds Recipe Finder",
    description:
      "Search for recipes and save them to your profile! Enter your favorite ingredients and find a link to a recipe along with an accompanying youtube tutorial. This is a static site built with HTML, CSS, and JavaScript. I was responsible for the UI/UX design, including the color scheme, layout, and typography. I also implemented the dynamic recipe card generation and the youtube search functionality.",
    link: "https://anewgard41.github.io/Flavor-Finds-Recipe-Finder/",
  },
  {
    iconUrl: flavfinds,
    theme: "btn-back-blue",
    name: "This Portfolio!",
    description:
      "This portfolio was built with a bunch of super fun, versatile technologies, including React, Tailwind CSS, Vite, and the awesome Three.js library for incorporating 3D elements. Hosted on AWS using S3, Cloudfront,  Route 53, and certified with an SSL certificate from AWS Certificate Manager.",
    link: "",
  },
];


// A toolkit for integrating Phaser, a popular game development framework, with React. I primarily helped with the development of the testbed, a tool for testing Phaser games in a React environment. Spent time debugging and refactoring the codebase, and writing tests to ensure the reliability of the toolkit.

//Here are some of the projects I have either built from scratch or contributed to. I have worked on multiple frontend and backend teams, and am as excited about a polished UI as I am about a structurally secure backend!
