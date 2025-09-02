<script>
  export let title, url;
</script>

<h3 class="mb-6 font-mono text-sm text-teal-500">Featured Project</h3>

<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View {title} project"
>
  <h3 class="font-accent text-4xl lg:text-4xl ">{title}</h3>
</a>
