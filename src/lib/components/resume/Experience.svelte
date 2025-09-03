<script lang="ts">
  import TimelineCard from "$lib/components/resume/TimelineCard.svelte";

  export let timelineData: {
    year: string;
    companyName?: string;
    jobTitle?: string;
    description: string;
    skills?: string[];
    link?: string;
    projects?: { name: string; link: string }[];
  }[] = [
    {
      year: "2023–2025",
      companyName: "Arts.Center",
      jobTitle: "UI Engineer",
      description:
        "Redesigned and rebuilt the frontend of a niche art marketplace. Led UI/UX, performance, accessibility, and SEO improvements. Built key features from scratch.",
      skills: [
        "SvelteKit",
        "Tailwind CSS",
        "TypeScript",
        "Storybook",
        "Vitest",
        "UX/UI",
        "SEO",
        "Quill.js",
      ],
      link: "https://arts.center",
      projects: [],
    },
    {
      year: "2022–2023",
      companyName: "Freelance",
      jobTitle: "Frontend Developer",
      description:
        "Delivered responsive web apps with React, Redux, and Firebase. Focused on UI consistency, navigation flow, and mobile-first design across small-to-mid scale projects.",
      skills: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Firebase/Firestore",
        "JavaScript",
        "HTML5", "SCSS/CSS", "BEM"
      ],
      projects: [
        { name: "React Blog", link: "" },
        { name: "Filmoteka", link: "" },
          { name: "Oh my donut", link: "" },
          { name: "ImageFinder", link: "" },
        { name: "Web Studio", link: "" },
      ],
    },
    
    {
      year: "2016–2021",
      companyName: "",
      jobTitle: "Project Manager | Event Designer",
      description:
        "Led event production from concept to execution for corporate and private clients. Managed budgets, communication, and teams. Built strong planning, communication, and problem-solving skills that now inform my dev work.",
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
