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
    title: "Blogging Platform",
    image: blog,
    description:
      "Features include user authentication, real-time updates, and a fully responsive design. Developed as an individual training project, the platform supports user profiles, adding posts, commenting, and storing images via Firebase Storage.",
    liveUrl: "https://aesthetic-madeleine-126da3.netlify.app",
    githubUrl: "https://github.com/alina-multi/blog-with-firebase",
    stack: ["React.js", "Tailwind CSS", "Firebase/Firestore", "Netlify"],
  },
  {
    title: "Filmoteka",
    image: filmoteka,
    description:
      "A collaborative project that allows users to discover movies and save their favorites in a personalized library",
    liveUrl: "https://alina-multi.github.io/filmoteka-team/",
    githubUrl: "https://github.com/alina-multi/filmoteka-team",
    stack: ["JavaScript", "SCSS", "Firebase"],
  },
  {
    title: "Web Studio",
    image: webstudio,
    description:
      "A web app that lets users search recipes by ingredients, cuisine, and dietary preferences. Integrated with the Spoonacular API and built with Vue.js.",
    liveUrl:
      "https://64f5f1c4a13ee300076c0803--enchanting-sawine-5f8f4d.netlify.app/",
    githubUrl: "https://github.com/alina-multi/web-studio",
    stack: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Image Finder",
    image: imagefinder,
    description:
      "Image Finder Web App. An individual educational project that lets users find images instantly by keywords and tags using the Pixabay API. .",
    liveUrl: "https://alina-multi.github.io/image-finder/",
    githubUrl: "https://github.com/alina-multi/image-finder",
    stack: ["JavaScript", "Tailwind CSS", "Git", "Pixabay API"],
  },
];
