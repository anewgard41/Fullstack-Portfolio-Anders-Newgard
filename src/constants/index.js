import { buffs, gsnc, jvg, weVote, unc } from "../assets/images";
import {
  aws,
  contact,
  docker,
  dog,
  django,
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
  goblin,
  prt,
  paperplane,
  waveexchange,
  python,
  postgresql,
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
    imageUrl: docker,
    name: "Docker",
    type: "Backend",
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
    imageUrl: postgresql,
    name: "SQL",
    type: "Database",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: django,
    name: "Python",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "WeVote",
    icon: weVote,
    iconBg: "#adc7e8",
    date: "July 2024 - Present",
    points: [
      "Contributed to the creation, implementation, and maintenance of features on the Web/Mobile Application and Server at WeVote, a non profit dedicated to information and voter literacy.",
      "Identified and fixed accessibility issues with the Web Application, increasing accessibility scores by 30%.",
      "Developed an extensive understanding for how a technology company operates at a national and global scale. Consistent and enthusiastic contributor to team meetings.",
    ],
  },
  {
    title: "AWS Certified Developer - Associate",
    company_name: "Amazon Web Services (AWS) Training and Certification",
    icon: aws,
    iconBg: "#bbdefb",
    date: "July 2024",
    points: [
      "Gained proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline",
      "Learned AWS best practices for development, deployment, security, and of course debugging",
      "This portfolio and other projects of mine are deployed on AWS infrastructure!",
    ],
  },
  {
    title: "Manager",
    company_name: "Joe Van Gogh",
    icon: jvg,
    iconBg: "#C3B1E1",
    date: "October 2020 - May 2024",
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
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/anewgard41",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/andrew-newgard",
  },
  // {
  //   name: "Contact",
  //   iconUrl: contact,
  //   link: "/contact",
  // }
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
  // Below contribution in progress.
  // {
  //   iconUrl: prt,
  //   theme: "btn-back-pink",
  //   name: "Open Source Contributer to Phaser React Tools",
  //   description:
  //     "A toolkit for integrating Phaser, a popular game development framework, with React. I primarily helped with the development of the testbed, a tool for testing Phaser games in a React environment. Spent time debugging and refactoring the codebase, and writing tests to ensure the reliability of the toolkit.",
  //   link: "https://github.com/benrosen/phaser-react-tools",
  // },
  {
    iconUrl: flavfinds,
    theme: "btn-back-red",
    name: "Flavorful Finds Recipe Finder",
    description:
      "Search for recipes and save them to your profile! Enter your favorite ingredients and find a link to a recipe along with an accompanying youtube tutorial. This is a static site built with HTML, CSS, and JavaScript. I was responsible for the UI/UX design, including the color scheme, layout, and typography. I also implemented the dynamic recipe card generation and the youtube search functionality.",
    link: "https://anewgard41.github.io/Flavor-Finds-Recipe-Finder/",
  },
  {
    iconUrl: paperplane,
    theme: "btn-back-blue",
    name: "This Portfolio!",
    description:
      "This portfolio was built with a bunch of super fun, versatile technologies, including React, Tailwind CSS, Vite, and the awesome Three.js library for incorporating 3D elements. Hosted on AWS using S3, Cloudfront,  Route 53, and certified with an SSL certificate from AWS Certificate Manager.",
    link: "https://github.com/anewgard41/Fullstack-Portfolio-Anders-Newgard",
  },
  {
    iconUrl: goblin,
    theme: "btn-back-green",
    name: "Enemy NPC Generator",
    description:
      "Enemy NPC Generator for Table Top and Indie Games! This is a custom GPT bot of my design that is available on the chatGPT marketplace. I was responsible for training the model, designing the prompts given to the user, and fine tuning the visual product produced at the end of the enemy designing process. Designed to help game developers and dungeon masters fill out their fantasy worlds.",
    link: "https://chatgpt.com/g/g-TbIHc00OA-enemy-npc-generator-for-table-top-and-indie-games",
  },
  // below project in progress.
  //   {
  //   iconUrl: dog,
  //   theme: "btn-back-pink",
  //   name: "Dog Picture Emporium",
  //   description:
  //     "Image hosting application hosted entirely on AWS infrastructure. Images are stored in S3 buckets and served securely via presigned URLs. A members only page features exclusive pictures only accessible to users with secret codes. The codes are stored in RDS and accessed programmatically via AWS SDKs. The application itself is hosted on ECS using Fargate. Cloudfront is used for content delivery and HTTPS protocol. The application follows AWS best practices for security, taking full advantage of security groups, private subnets, and IAM roles.",
  // },
];
