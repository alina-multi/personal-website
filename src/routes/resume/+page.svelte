<script>
  import MouseMoveLayout from "$lib/components/layout/MouseMoveLayout.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import SEO from "$lib/components/atoms/SEO.svelte";
  import { pageMetadata } from "$lib/data/seo.js";
  import StickyProfile from "$lib/components/resume/StickyProfile.svelte";
  import MainContent from "$lib/components/resume/MainContent.svelte";
</script>

<SEO
  title={pageMetadata.resume.title}
  description={pageMetadata.resume.description}
  keywords={pageMetadata.resume.keywords}
  canonical="/resume"
/>

<MouseMoveLayout>
  <div class="  mx-auto min-h-screen max-w-screen-xl px-7">
    <main class="lg:flex lg:justify-between">
      <StickyProfile />
      <MainContent />
    </main>
    <Footer>
      <a class=" hover:text-teal-500" href="mailto:akseninkoalina@gmail.com"
        >akseninkoalina@gmail.com</a
      > <br />
    </Footer>
  </div>
</MouseMoveLayout>
