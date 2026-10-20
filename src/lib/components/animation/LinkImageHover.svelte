<script lang="ts">
  import { resolve } from "$app/paths";
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

<a use:linkEffect href={resolve("/")}  class="z-50 cursor-pointer hover:text-teal-400">
  Alina Akseninko<span class="text-teal-400">.</span>
</a>

{#if isHover}
  <enhanced:img
    in:blur={{ duration: 300 }}
    src="/static/akseninkoalina.jpg"
    alt="Alina Akseninko - Svelte Developer"
    class="z-50 absolute -top-6 -right-28 h-28 w-28 rounded-full object-cover shadow-lg max-lg:hidden"
  />
{/if}
