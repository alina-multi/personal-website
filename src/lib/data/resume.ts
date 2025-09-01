import arts_center from "../../images/artscenter.png?enhanced";
import blog from "../../images/blog.png?enhanced";
import filmoteka from "../../images/filmoteka.png?enhanced";
import webstudio from "../../images/webstudio.png?enhanced";
import imagefinder from "../../images/imagefinder.png?enhanced";

export const projects = [
  {
    title: "Arts.Center Marketplace",
    image: arts_center,
    description:
      "An online marketplace for unique artworks and handcrafted pieces from artists and artisans. Built with SvelteKit and Tailwind CSS, featuring secure checkout and responsive design.",
    liveUrl: "https://arts.center",
    githubUrl: "",
    stack: ["SvelteKit", "Tailwind CSS", "TypeScript", "Storybook", "Prisma"],
  },
  {
    title: "React Blog Platform",
    image: blog,
    description:
      "A blogging platform built with React and Firebase that lets users create, edit, and share blog posts seamlessly. Features include user authentication, real-time updates, and a fully responsive design. Developed as an individual training project, the platform supports user profiles, adding posts, commenting, and storing images via Firebase Storage.",
    liveUrl: "https://ecotrack.app",
    githubUrl: "https://github.com/yourusername/eco-track",
    stack: ["React.js", "Tailwind CSS", "Firebase", "Netlify"],
  },
  {
    title: "Filmoteka",
    image: filmoteka,
    description:
      "A collaborative project that allows users to discover movies and save their favorites in a personalized library",
    liveUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    stack: ["JavaScript", "SCSS", "Firebase"],
  },
  {
    title: "Web Studio",
    image: webstudio,
    description:
      "A web app that lets users search recipes by ingredients, cuisine, and dietary preferences. Integrated with the Spoonacular API and built with Vue.js.",
    liveUrl: "https://recipefinder.app",
    githubUrl: "https://github.com/yourusername/recipe-finder",
    stack: [],
  },
  {
    title: "Image Finder",
    image: imagefinder,
    description:
      "Image Finder Web App. An individual educational project that lets users find images instantly by keywords and tags using the Pixabay API. .",
    liveUrl: "https://travelplanner.io",
    githubUrl: "https://github.com/yourusername/travel-planner",
    stack: [
      "SvelteKit",
      "Tailwind CSS",
      "TypeScript",
      "Storybook",
      "Vitest",
      "UX/UI",
      "SEO",
      "Quill.js",
    ],
  },
];
