import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A_propos",
  },
  {
    id: "work",
    title: "Travail",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Developpeur Web",
    icon: web,
  },
  {
    title: "Developpeur React-JS",
    icon: mobile,
  },
  {
    title: "Developpeur Backend(Laravel)",
    icon: backend,
  },
  {
    title: "Créateur de contenu",
    icon: creator,
  },
];

const technologies = [
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Laravel",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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

const experiences = [
  {
    title: "Developpeur React.js",
    company_name: "Ecole Superieure la canadienne",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Octobre 2024 - Aout 2021",
    points: [
      "Développement et maintenance d'applications web en utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes interfonctionnelles, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Mise en œuvre d'un design responsive et garantie de la compatibilité entre différents navigateurs.",
      "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Ecole Superieure la canadienne",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ecole Superieure la canadienne",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Développement et maintenance d'applications web en utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes pluridisciplinaires, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Mise en œuvre d'un design réactif et garantie de la compatibilité entre navigateurs.",
      "Anticipation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Ecole Superieure la canadienne",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
  "Développement et maintenance d’applications web en utilisant React.js et d’autres technologies associées.",
  "Collaboration avec des équipes pluridisciplinaires, y compris des designers, des chefs de produit et d’autres développeurs, pour créer des produits de haute qualité.",
  "Mise en œuvre d’un design réactif et garantie de la compatibilité entre navigateurs.",
  "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
],

  },
];

const testimonials = [
  {
    testimonial:
      "Je pensais qu'il était impossible de créer un site web aussi beau que ceci, mais Ma curiosité et ma percévérance m'ont prouvés le contraire 😁.",
    name: "Kamdem Joseph",
    designation: "CFO",
    company: "Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Yann",
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

export { services, technologies, experiences, testimonials, projects };
