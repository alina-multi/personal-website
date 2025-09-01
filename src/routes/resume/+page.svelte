<script>
  import Timeline from "$lib/components/animation/Timeline.svelte";
  import Summary from "$lib/components/resume/Summary.svelte";
  import SideNav from "$lib/components/resume/SideNav.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import Projects from "$lib/components/resume/Projects.svelte";
  import SocialLinks from "$lib/components/atoms/SocialLinks.svelte";
  import MouseMoveLayout from "$lib/components/layout/MouseMoveLayout.svelte";
  import LinkImageHover from "$lib/components/animation/LinkImageHover.svelte";
</script>

<MouseMoveLayout>
  <div class="  mx-auto min-h-screen max-w-screen-xl px-7">
    <div class="lg:flex lg:justify-between">
      <div
        class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between py-24 mt-4"
      >
        <div class="space-y-6">
          <h1
            class="relative z-50 font-accent w-fit whitespace-pre-wrap text-5xl font-semibold text-stone-200 md:text-6xl"
          >
            <LinkImageHover />
          </h1>
          <h2 class=" font-semibold text-xl">Front End Engineer</h2>

          <p class=" text-stone-400 text-lg md:max-w-sm">
            I build high-performance, maintainable web applications with clean
            code and pixel-perfect precision, handling UI design when needed.
          </p>
        </div>

        <SideNav />

        <SocialLinks />
      </div>

      <div class="lg:mt-24 lg:w-[55%]">
        <section
          id="about"
          class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-stone-400"
        >
          <Summary />
        </section>

        <section
          id="experience"
          class="z-20 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <Timeline>
            <h2
              class="font-accent text-2xl font-semibold text-stone-200 md:text-4xl"
            >
              Experience
            </h2>
          </Timeline>
        </section>

        <Projects />
      </div>
    </div>
    <Footer>
      <a class=" hover:text-teal-500" href="mailto:akseninkoalina@gmail.com"
        >akseninkoalina@gmail.com</a
      > <br />
    </Footer>
  </div>
</MouseMoveLayout>
