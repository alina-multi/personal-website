<script>
  export let title, url;
    import { ArrowUpRight } from "@lucide/svelte";
</script>

<h3 class="mb-6 font-mono text-sm text-teal-500">Featured Project</h3>

<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View {title} project "
  class=" max-lg:flex items-center gap-3 hover:underline"
>
  <h3 class="font-accent text-3xl lg:text-4xl ">{title}</h3>
   <ArrowUpRight  class="text-stone-100 size-8 stroke-1.5 lg:hidden" />
</a>