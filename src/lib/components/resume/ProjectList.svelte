<script>
  import { projects } from "$lib/data/resume.js";
  import { ArrowUpRight } from "@lucide/svelte";
</script>

<ul class="group/list py-20 space-y-9">
  {#each projects as project (project.title)}
    <li
      class="hover:inset-shadow-sm inset-shadow-gray-700/20 group lg:rounded-md py-9 lg:p-6 transition-transform duration-200 hover:z-50 hover:bg-gray-700/20"
    >
      <div
        class="group relative sm:grid gap-4 pb-1 transition-all duration-200 sm:grid-cols-3 sm:gap-8 md:gap-9"
      >
        <a href={project.liveUrl} aria-label={`View ${project.title} project`}
          ><enhanced:img
            src={project.image}
            alt={project.title}
            class="aspect-video block rounded border-slate-200/10 object-cover transition sm:col-span-1"
          /></a
        >
        <div class="col-span-2 max-sm:mt-6">
          <a
            href={project.liveUrl}
            class="text-lg font-semibold text-stone-100 flex gap-1 items-center"
            ><h3 class="text-lg font-semibold ">
              {project.title}
            </h3>
            <ArrowUpRight class="  size-5 stroke-1" /></a
          >
          <p class="mt-2 text-stone-400">{project.description}</p>
          <div class="mt-4 flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project (opens in new tab)`}
              class="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-950"
            >
              View Project
            </a>
            {#if project.githubUrl}
              <span class="text-sm text-slate-400" aria-hidden="true">|</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} GitHub repository (opens in new tab)`}
                class="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-950"
              >
                GitHub Repo
              </a>
            {/if}
          </div>
          <ul class="mt-4 flex flex-wrap gap-2">
            {#each project.stack as skill (skill)}
              <li
                class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
              >
                {skill}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </li>
  {/each}
</ul>
