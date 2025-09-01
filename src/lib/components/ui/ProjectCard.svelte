<script>
  import { ExternalLink } from "@lucide/svelte";
  import ProjectImage from "$lib/components/ui/ProjectImage.svelte";
  import ProjectCardHeader from "$lib/components/ui/ProjectCardHeader.svelte";
  import { ArrowUpRight } from "@lucide/svelte";

  export let project;
  export let index;

  let isEven = index % 2 === 0;
</script>

<div
  class=" flex flex-col items-center lg:flex-row {isEven
    ? ''
    : 'lg:flex-row-reverse'}"
>
  <div class="mb-6 flex w-full items-end justify-between lg:hidden">
    <div><ProjectCardHeader title={project.title} url={project.url} /></div>
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View {project.title} project"
    >
      <ArrowUpRight size={36} class="text-stone-200" />
    </a>
  </div>
  <ProjectImage {project} />

  <div
    class="lg:absolute {isEven
      ? ' right-0 lg:text-end'
      : ' left-0 '} w-full space-y-6 py-6 lg:w-4/5 lg:p-0 xl:w-3/5"
  >
    <div class="max-lg:hidden">
      <ProjectCardHeader title={project.title} url={project.url} />
    </div>
    <p class="text-lg lg:rounded lg:bg-zinc-900 lg:p-6">
      {project.description}
    </p>
    <ul
      class="inline-flex flex-wrap gap-3 font-mono text-xs text-stone-400 sm:gap-6"
      aria-label="Technologies used"
    >
      {#each project.tags as tag (tag)}
        <li class="max-lg:hidden">{tag}</li>
      {/each}

      {#each project.tags as tag (tag)}
        <li
          class="inset-shadow-sm inset-shadow-teal-500/40 flex items-center rounded-full bg-teal-300/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 lg:hidden"
        >
          {tag}
        </li>
      {/each}
    </ul>

    <a
      class=" hidden w-full text-stone-300 hover:text-teal-300 lg:block lg:pt-6"
      href={project.url}
      target="_blank"
      aria-label={`Visit ${project.title}`}
    >
      <ExternalLink size={26} class="inline-block" />
    </a>
  </div>
</div>
