<script lang="ts">
  import TimelineCard from "#lib/components/resume/TimelineCard.svelte";

   interface TimelineItem {
    year: string;
    companyName?: string;
    jobTitle?: string;
    description: { subtitle?: string; text: string }[];
    skills?: string[];
    link?: string;
    projects?: { name: string; link: string }[];
  }

  export let timelineData: TimelineItem[] = [
    {
      year: "2026",
      companyName: "Contractor",
      jobTitle: "Frontend & AEM Developer",
      description: [
        {
          subtitle: "Deloitte",
          text:
            "Delivered React and TypeScript UI on a live multi-market cruise site (search, booking, private area) in an Nx monorepo integrated with AEM, including production fixes and AEM authoring.",
        },
        {
          subtitle: "Publicis Group",
          text:
            "Shipped brand pages for Advil, the Sensorials microsite, and other brand sites, and built a reusable AEM page template so content teams could assemble pages in the CMS.",
        },
      ],
      skills: ["React", "TypeScript", "Adobe Experience Manager", "Scrum"],
      projects: [ 
        { name: "Advil", link: "https://www.advil.ca/" },
        { name: "MSC Cruises", link: "https://www.msccruisesusa.com/" },
      ],
    },
      {
      year: "2025–2026",
      companyName: "Globant",
      jobTitle: "Web UI Developer",
      description: [
        {
          text:
            "Built a type-safe UI and features using Svelte 5 and TypeScript on AEM, focusing on scalable architecture and maintainability. Delivered cross-team solutions and created a reusable, multi-brand design system with strong quality and performance.",
        },
      ],
      skills: [
        "Svelte 5",
        "Runed",
        "TypeScript",
        "Adobe Experience Manager",
        "Design System",
        "Headless Pattern",
        "Scrum"
    
      ],
      link: "https://www.globant.com/",
      projects: [
        { name: "Six Flags", link: "https://sixflagsqiddiyacity.com/en" },
        { name: "Aquarabia", link: "https://aquarabiaqiddiyacity.com/en" },
       
      ],
    },
    {
      year: "2023–2025",
      companyName: "Arts.Center",
      jobTitle: "Frontend Engineer",
      description: [
        {
          text:
            "Rebuilt a niche art gallery into a multilingual SvelteKit and TypeScript platform hosting over 300k artworks for 12k users. Led the frontend architecture and UI/UX, and reached 90+ Lighthouse scores.",
        },
      ],
      skills: [
        "SvelteKit",
        "Tailwind CSS",
        "TypeScript",
        "Storybook",
        "Vitest",
        "UX/UI",
        "SEO",
        "Prisma",
      ],
      link: "https://arts.center",
      projects: [],
    },
    {
      year: "2022–2023",
      companyName: "Freelance",
      jobTitle: "Frontend Developer",
      description: [
        {
          text:
            "Delivered responsive web apps with React, Redux, and Firebase. Focused on UI consistency, navigation flow, and mobile-first design across small-to-mid scale projects.",
        },
      ],
      skills: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Firebase/Firestore",
        "JavaScript",
        "HTML5", "SCSS/CSS", "BEM"
      ],
      projects: [
        { name: "React Blog", link: "https://aesthetic-madeleine-126da3.netlify.app" },
        { name: "Filmoteka", link: "https://alina-multi.github.io/filmoteka-team/" },
        { name: "Oh my donut", link: "" },
        { name: "ImageFinder", link: "https://alina-multi.github.io/image-finder/" },
        { name: "Web Studio", link: "https://64f5f1c4a13ee300076c0803--enchanting-sawine-5f8f4d.netlify.app/" },
      ],
    },
    
    {
      year: "2016–2021",
      companyName: "",
      jobTitle: "Project Manager | Event Designer",
      description: [
        {
          text:
            "Led event production from concept to execution for corporate and private clients. Managed budgets, communication, and teams. Built strong planning, communication, and problem-solving skills that now inform my dev work.",
        },
      ],
      skills: [
        "Project Management",
        "Client Communication",
        "Creative Direction",
      ],
    },
  ];
</script>

{#each timelineData as item, index (index)}
  <TimelineCard {item} />
{/each}
