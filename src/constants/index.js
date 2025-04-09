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
    title: "À propos",
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
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur React JS",
    icon: mobile,
  },
  {
    title: "Développeur Backend (Laravel)",
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Développeur React.js",
    company_name: "École Supérieure La Canadienne",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Octobre 2022 - Août 2023",
    points: [
      "Développement et maintenance d'applications web en utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes interfonctionnelles, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Mise en œuvre d'un design responsive et garantie de la compatibilité entre différents navigateurs.",
      "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur React Native",
    company_name: "École Supérieure La Canadienne",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Décembre 2023 - Février 2024",
    points: [
      "Développement et maintenance d'applications web en utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes interfonctionnelles, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Mise en œuvre d'un design responsive et garantie de la compatibilité entre différents navigateurs.",
      "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur Web",
    company_name: "École Supérieure La Canadienne",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mai 2024 - Décembre 2024",
    points: [
      "Développement et maintenance d'applications web en utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes pluridisciplinaires, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Mise en œuvre d'un design réactif et garantie de la compatibilité entre navigateurs.",
      "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur Full Stack",
    company_name: "École Supérieure La Canadienne",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Janvier 2025 - Présent",
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
      "Je pensais qu'il était impossible de créer un site web aussi beau que ceci, mais ma curiosité et ma persévérance m'ont prouvé le contraire 😁.",
    name: "Kamdem Joseph",
    designation: "Directeur Financier",
    company: "Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Je n'ai jamais rencontré un développeur web qui se soucie autant du succès de ses clients que Rick.",
    name: "Yann",
    designation: "Directeur des Opérations",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Après que Rick a optimisé notre site web, notre trafic a augmenté de 50 %. Nous ne pouvons pas assez le remercier !",
    name: "Lisa Wang",
    designation: "Directrice Technique",
    company: "20 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Location de voitures",
    description:
      "Plateforme basée sur le web qui permet aux utilisateurs de rechercher, réserver et gérer des locations de voitures auprès de divers fournisseurs, offrant une solution pratique et efficace pour les besoins de transport.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Frankam487",
  },
  {
    name: "Emploi IT",
    description:
      "Application web qui permet aux utilisateurs de rechercher des offres d'emploi, de consulter les fourchettes de salaires estimées pour les postes et de localiser les emplois disponibles en fonction de leur emplacement actuel.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rest API",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Frankam487",
  },
  {
    name: "Guide de voyage",
    description:
      "Une plateforme complète de réservation de voyages qui permet aux utilisateurs de réserver des vols, des hôtels et des voitures de location, et propose des recommandations curated pour des destinations populaires.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Frankam487",
  },
];

export { services, technologies, experiences, testimonials, projects };