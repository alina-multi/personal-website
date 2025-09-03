<script>
  import { ArrowUpRight, Link } from "@lucide/svelte";
  export let item;
</script>

<div
  class="group rounded-md transition-transform duration-200 hover:z-50 hover:bg-stone-950"
>
  <div
    class="hover:inset-shadow-sm inset-shadow-gray-700/20 flex justify-start rounded-md py-10 transition-transform duration-200 hover:z-50 hover:bg-gray-700/20 lg:gap-9"
  >
    <div class="sticky top-40 z-40 flex shrink-0 md:flex-row">
      <div
        class="absolute left-2 flex size-6 items-center justify-center rounded-full max-sm:top-1 sm:size-10 md:left-3 lg:left-3 dark:bg-stone-900"
      >
        <div
          class="size-2 rounded-full border border-neutral-300 sm:size-4 sm:p-2 dark:border-neutral-700 dark:bg-stone-700"
        ></div>
      </div>

      <h3
        class="hidden text-xl font-semibold text-stone-400 md:block md:pl-20 md:text-base"
      >
        {item.year}
      </h3>
    </div>

    <div class="relative w-full flex-grow pl-12 sm:pl-20 sm:pr-4 md:pl-4">
      <h3
        class="mb-4 block text-left text-2xl font-bold md:hidden text-stone-400"
      >
        {item.year}
      </h3>

      <div class=" ">
        <div class="">
          <div
            class="mb-3 flex items-center gap-3 text-base font-medium text-white group-hover:text-teal-500"
          >
            <h4 class="font-accent text-lg">
              {item.jobTitle}
            </h4>
			{#if item.link || item.companyName}
              <div
                class="h-0.5 w-0.5 rounded-full bg-white group-hover:bg-teal-500"
              ></div>
            {/if}

            {#if item.link}
		
              <a
                href={item.link}
                class="font-accent flex items-center text-lg hover:text-teal-500 hover:underline"
              >
                {item.companyName}
             <ArrowUpRight class="size-5 stroke-1" />
              </a>
            {:else}
              <span
                class="font-accent flex items-center text-lg text-neutral-400"
                >{item.companyName}</span
              >
            {/if}
          </div>

          <p class="text-stone-400 group-hover:text-stone-300">
            {#if typeof item.description === "string"}
              {item.description}
            {:else}
              <svelte:component this={item.description} />
            {/if}
          </p>
        </div>

        <ul
          class="mt-4 flex items flex-wrap gap-4 text-sm font-medium text-neutral-200"
        >
          {#each item.projects as project, index (index)}
            <li class="flex items-center gap-1">
              <Link class="size-3 " />

              <a
                href={project.link}
                class="hover:text-teal-500 hover:underline"
              >
                {project.name}
              </a>
            </li>
          {/each}
        </ul>

        <ul class="mt-4 flex flex-wrap gap-2">
          {#each item.skills as skill (skill)}
            <li
              class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
            >
              {skill}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
