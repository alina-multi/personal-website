<script>
  import Timeline from "$lib/components/animation/Timeline.svelte";
  import Summary from "$lib/components/resume/Summary.svelte";

  import ProjectList from "$lib/components/resume/ProjectList.svelte";
  import Experience from "./Experience.svelte";
  import Title from "$lib/components/resume/Title.svelte";
</script>

<div
  class="lg:mt-24 space-y-16 md:space-y-24 lg:space-y-36 lg:w-[58%]"
  id="main-content"
>
  <section id="about" class=" scroll-mt-16 lg:scroll-mt-24">
    <Title title="About" addClass="lg:hidden " />
    <Summary />
  </section>

  <section id="experience" class=" scroll-mt-16 lg:scroll-mt-24">
    <Timeline>
      {#snippet header()}
        <Title title="Experience" />
      {/snippet}

      <Experience />
    </Timeline>
  </section>
  <section id="projects" class="scroll-mt-16 lg:scroll-mt-24">
    <Title title="Projects" addClass="mb-4 max-w-4xl lg:pl-6" />
    <ProjectList />
  </section>
</div>
