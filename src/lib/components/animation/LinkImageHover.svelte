<script lang="ts">
  import { blur } from "svelte/transition";

  let isHover = false;

  let linkEffect = (node: HTMLElement) => {
    node.addEventListener("mouseenter", () => {
      isHover = true;
    });
    node.addEventListener("mouseleave", () => {
      isHover = false;
    });
  };
</script>

<a use:linkEffect href="/" target="_blank" class="z-50 cursor-pointer">
  Alina Akseninko
</a>

{#if isHover}
  <enhanced:img
    in:blur={{ duration: 300 }}
    src="/static/akseninkoalina.jpg"
    alt="Alina Akseninko - Svelte Developer"
    class="z-50 absolute -top-0 -right-32 h-32 w-32 rounded object-cover shadow-lg max-lg:hidden"
  />
{/if}
