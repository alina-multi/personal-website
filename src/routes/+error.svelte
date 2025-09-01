<script lang="ts">
  import { page } from "$app/state";
  import Layout from "$lib/components/layout/Layout.svelte";
</script>

<svelte:head>
  <title>{page.status} — Page Not Found</title>
</svelte:head>

<Layout>
  <main
    class=" xs:px-12 mx-auto h-screen max-w-4xl space-y-24 px-6 md:px-12 max-lg:container lg:px-20 xl:max-w-5xl flex justify-center"
  >
    <div class="flex flex-col items-center justify-center text-center">
      <h1 class=" text-6xl xl:text-9xl font-bold text-teal-400">
        {page.status}
      </h1>

      <p
        class="mt-4 text-xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300"
      >
        Oops! {page.error?.message}
      </p>
      <a
        href="/"
        class="mt-12 px-9 py-4 border border-teal-300 font-semibold text-base lg:text-lg text-stone-200 rounded hover:bg-teal-600/50 transition"
      >
        Go Home
      </a>
    </div>
  </main>
</Layout>
