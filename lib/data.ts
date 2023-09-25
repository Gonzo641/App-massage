import React from "react";
import massageAImg from "@/public/massage5.jpg"
import massageBImg from "@/public/massage5.jpg"
import massageCImg from "@/public/massage5.jpg"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Concept",
    hash: "#concept",
  },
  {
    name: "Salon",
    hash: "#salon",
  },
  {
    name: "Massages",
    hash: "#massages",
  },
  {
    name: "Soins",
    hash: "#soins",
  },
  // {
  //   name: "Produits",
  //   hash: "#produits",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const servicesData = [
  {
    title: "MassageA",
    description:
      "Plus qu’un gommage, un véritable soin corporel complet au sel de l’Himalaya et aux Huiles essentielles. Le sel de l’Himalaya est un puissant détoxifiant, en plus d’exfolier la peau, il dissout et démantèle les toxines, déchets et dépôts calcaires dans l’organisme. Il élimine l’acidité et rétablit l’équilibre acido-basique. C’est un reminéralisant, il soulage les douleurs articulaires et musculaires et aide à réguler la circulation de l’eau dans le corps et les problèmes de cellulite. Ce soin adoucit et raffermit la peau grâce à son huile de sésame bio régénérante et anti oxydante, et le mélange d’Huiles essentielles",
    price: "50 €",
    duration: "45min",
    imageUrl: massageAImg,
  },
  {
    title: "MassageB",
    description:
      "Plus qu’un gommage, un véritable soin corporel complet au sel de l’Himalaya et aux Huiles essentielles. Le sel de l’Himalaya est un puissant détoxifiant, en plus d’exfolier la peau, il dissout et démantèle les toxines, déchets et dépôts calcaires dans l’organisme. Il élimine l’acidité et rétablit l’équilibre acido-basique. C’est un reminéralisant, il soulage les douleurs articulaires et musculaires et aide à réguler la circulation de l’eau dans le corps et les problèmes de cellulite. Ce soin adoucit et raffermit la peau grâce à son huile de sésame bio régénérante et anti oxydante, et le mélange d’Huiles essentielles",
    price: "70 €",
    duration: "1h15",
    imageUrl: massageBImg,
  },
  {
    title: "MassageC",
    description:
      "Plus qu’un gommage, un véritable soin corporel complet au sel de l’Himalaya et aux Huiles essentielles. Le sel de l’Himalaya est un puissant détoxifiant, en plus d’exfolier la peau, il dissout et démantèle les toxines, déchets et dépôts calcaires dans l’organisme. Il élimine l’acidité et rétablit l’équilibre acido-basique. C’est un reminéralisant, il soulage les douleurs articulaires et musculaires et aide à réguler la circulation de l’eau dans le corps et les problèmes de cellulite. Ce soin adoucit et raffermit la peau grâce à son huile de sésame bio régénérante et anti oxydante, et le mélange d’Huiles essentielles",
    price: "110 €",
    duration: "1h30",
    imageUrl: massageCImg,
  },
] as const;

export const soinsData = [
  {
    title: "Soins1",
    description:
      "Description soins avec quelques détails utils",
    price: "50 €",
    duration: "45min",
  },
  {
    title: "Soins2",
    description:
      "Description soins avec quelques détails utils",
    price: "70 €",
    duration: "1h15",
  },
  {
    title: "Soins3",
    description:
      "Description soins avec quelques détails utils",
    price: "110 €",
    duration: "1h30",
  },
  {
    title: "Soins4",
    description:
      "Description soins avec quelques détails utils",
    price: "35 €",
    duration: "30min",
  },
  {
    title: "Soins5",
    description:
      "Description soins avec quelques détails utils",
    price: "25 €",
    duration: "20min",
  },
  {
    title: "Soins6",
    description:
      "Description soins avec quelques détails utils",
    price: "45 €",
    duration: "45min",
  },
] as const;


// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Tailwind",
//   "Redux",
//   "Python",
//   "Django",
//   "Framer Motion",
// ] as const;