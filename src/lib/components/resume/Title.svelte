<script>
  export let title,
    addClass = "";
</script>

<h2
  class="font-accent text-3xl font-semibold text-stone-200 flex items-center {addClass}"
>
  <span class="text-teal-500 mr-3 text-base lg:hidden" aria-hidden="true">⫸</span>
  <span>{title}</span>
</h2>
