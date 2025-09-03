<script>
  import BackTopButton from "$lib/components/atoms/BackTopButton.svelte";
  import LogoOctopus from "$lib/components/atoms/LogoOctopus.svelte";
</script>

<footer class="relative mx-auto my-16 mt-16">
  <div class="right-0 top-3 mb-16 text-center md:top-6 lg:absolute lg:top-0">
    <BackTopButton />
  </div>

  <div class="lg:flex lg:items-end lg:justify-between ">
    <div>
      <div class="flex justify-center lg:justify-start ">
        <LogoOctopus
          class="h-12  w-36 fill-teal-500 stroke-teal-500 transition-colors duration-300 hover:fill-white hover:stroke-teal-400"
        />
      </div>

      <p
        class="mx-auto mt-9 max-w-md text-center text-sm leading-relaxed text-stone-400 lg:text-left "
      >
        Designed on the fly and hand-coded in Visual Studio Code. Built with
        SvelteKit & Tailwind CSS, deployed with Vercel
      </p>
    </div>

    <div
      class="mt-6 text-center text-sm leading-relaxed  lg:text-right text-stone-400"
    >
      <p
        class=" text-center text-sm leading-relaxed  lg:text-right text-stone-400"
      >
      <slot></slot>
        Developed & designed by Alina Akseninko © 2025
      </p>
    </div>
  </div>
</footer>
