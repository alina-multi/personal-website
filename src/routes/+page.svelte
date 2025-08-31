<script lang="ts">
  import Footer from "$lib/components/layout/Footer.svelte";
  import Hero from "$lib/components/sections/Hero.svelte";
  import Services from "$lib/components/sections/Services.svelte";
  import FeaturedProjects from "$lib/components/sections/FeaturedProjects.svelte";
  import WhySvelte from "$lib/components/sections/WhySvelte.svelte";
  import ContactSection from "$lib/components/sections/ContactSection.svelte";
  import AboutMe from "$lib/components/sections/AboutMe.svelte";
  import Layout from "$lib/components/layout/Layout.svelte";
  import BackgroundLights from "$lib/components/animation/BackgroundLights.svelte";
  import { sections } from "$lib/data/sections.js";

  const sectionComponents = {
    about: AboutMe,
    services: Services,
    featuredProjects: FeaturedProjects,
    whySvelte: WhySvelte,
    contact: ContactSection,
  };
</script>

<Layout>
  <BackgroundLights>
    <Hero />
  </BackgroundLights>

  <main
    class="xs:px-12 mx-auto mt-16 max-w-4xl space-y-24 px-6 md:px-12 max-lg:container lg:px-20 xl:mt-24 xl:max-w-5xl xl:space-y-44 xl:px-0"
  >
    {#each sections as { id, title, data }, index (id)}
      <section {id} class="scroll-mt-16 lg:scroll-mt-24">
        <svelte:component
          this={sectionComponents[id]}
          {title}
          order={index + 1}
          {data}
        />
      </section>
    {/each}

    <Footer />
  </main>
</Layout>
