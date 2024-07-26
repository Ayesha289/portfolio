import {
  bootstrap,
  car,
  contact,
  cpp,
  css,
  django,
  estate,
  express,
  flask,
  git,
  github,
  html,
  java,
  javascript,
  jquery,
  linkedin,
  mongodb,
  mongoose,
  mui,
  mysql,
  netlify,
  nodejs,
  opencv,
  php,
  pricewise,
  python,
  react,
  scikitLearn,
  snapgram,
  sql,
  sqlite,
  summiz,
  tailwindcss,
  threads,
  vercel,
} from "../assets/icons";

import { work, volunteer, certificate } from "../assets/images";

export const skills = [
  {
    imageUrl: cpp,
    name: "C plus plus",
    type: "Language",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Language",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Language",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Language",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: jquery,
    name: "jQuery",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: flask,
    name: "flask",
    type: "backend",
  },
  {
    imageUrl: django,
    name: "django",
    type: "backend",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mongoose,
    name: "Mongoose",
    type: "Database",
  },
  {
    imageUrl: sqlite,
    name: "sqlite",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: opencv,
    name: "OpenCV",
    type: "Library",
  },
  {
    imageUrl: scikitLearn,
    name: "scikit-learn",
    type: "Library",
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
    imageUrl: netlify,
    name: "Netlify",
    type: "Host Platform",
  },
  {
    imageUrl: vercel,
    name: "Vercel",
    type: "Host Platform",
  },
];

export const experiences = [
  {
    title: "Work Experience",
    icon: work,
    iconBg: "#accbe1",
    subtitle1: "Prismatic Softwares Private Limited - Software Developer Intern",
    subinfo1: [
      "January 2024 - March 2024",
      " Worked  in the Web development team and built projects that involved technologies likePython, Flask, MySQL database, Django, Rest Framework, ORM, and OpenCV.",
    ],
    subtitle2: "AWS Cloud Virtual Internship",
    subinfo2: [
      "December 2022 - February 2023",
      "Learned about AWS Cloud Foundations and AWS Cloud Architecting",
    ],
  },
  {
    title: "Certifications and Workshops",
    icon: certificate,
    iconBg: "#fbc3bc",
    subtitle1: "Complete Web Development Bootcamp by Dr. Angela Yu.",
    subinfo1: ["Udemy", "May 2023"],
    subtitle2: "Workshop on Ruby on Rails",
    subinfo2: ["Rails Girls, Pune", "February 2023"],
  },
  {
    title: "College Tech Fest",
    icon: work,
    iconBg: "#b7e4c7",
    subtitle1: "Code Fiesta Crack It (Tech Fest)",
    subinfo1: [
      "Event Lead (February 2024)",
      "Led a team of 5 members for the Trial by Trivia event. Built an event website in just 3 days using React.js and Firebase and deployed it on Vercel. Had a successful event with around 150 participantstaking part in the event",
    ],
    subtitle2: "Code Fiesta Crack It (Tech Fest)",
    subinfo2: [
      "Volunteer (March 2023)",
      "Volunteered to Crack It Event Under Code Fiesta which was a grand success with almost 100 participants",
    ],
  },
  {
    title: "Other Activities",
    icon: volunteer,
    iconBg: "#accbe1",
    subtitle1: "Firodia Karandak (Cultural Competition)",
    subinfo1: [
      "Events Team Member (January 2024 - February 2024)",
      " Selected for the final round (Top 9) and won a total of 9 prizes in different categories",
    ],
    subtitle2: "Brain Stormers Club Member",
    subinfo2: [
      "Event Management Team Member (January 2023 - June 2023)",
      "Managed over 3 events which were held under Brain Stormers Club",
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
    link: "https://github.com/Ayesha289",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ayesha-mulani-173b6b207",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Early Dementia Detection using IoT and ML",
    description:
      " Built a website using Flask for predicting the detection of dementia using a machine learning model. Added user login and a mailing system with a JWT token for the forgot password option. The prediction is based on the user’s medical history using Random Forest Algorithm. The IoT device is built using ESP32 and MPU6050 to collect and analyze the patient motion acceleration data to predict dementia.",
    link: "https://github.com/Ayesha289/DementiaDetectionSystem",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Google Keep Clone App",
    description:
      " Built and designed a keeper app using React.js. Used various concepts like react props, mapping data to components, react hooks, event handling, and styling using Material UI. Added user login using Node.js and Express.js and fetched the notes according to the user Login. Added the option of adding, deleting, and updating notes. Used MongoDB at the backend forstoring user login credentials and notes.",
    link: "https://github.com/Ayesha289/iNotebook-MERN",
  },
];
