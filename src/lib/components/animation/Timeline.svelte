<script lang="ts">
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { writable } from "svelte/store";

  let { header, children } = $props();

  let containerRef: HTMLDivElement;
  let height = $state(0);
  let scrollProgress = writable(0);
  let heightTransform = tweened(0, { duration: 400, easing: cubicOut });
  let opacityTransform = tweened(0, { duration: 400, easing: cubicOut });

  onMount(() => {
    if (containerRef) {
      const rect = containerRef.getBoundingClientRect();
      height = rect.height;
    }

    let onScroll = () => {
      const rect = containerRef.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      let progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
      );
      progress = progress < 0.6 ? progress - 0.09 : progress - 0.004;
      scrollProgress.set(progress);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  $effect(() => {
    const unsubscribe = scrollProgress.subscribe((progress) => {
      heightTransform.set(progress * height);
      opacityTransform.set(progress < 0.1 ? progress * 10 : 1);
    });

    return unsubscribe;
  });
</script>

<div class="w-full" bind:this={containerRef}>
  {@render header?.()}
  <div class="relative mx-auto space-y-6 overflow-hidden pt-20">
    {@render children?.()}

    <div
      style="height: {height}px;"
      class="timeline-line absolute left-5 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] md:left-8 dark:via-neutral-700"
    >
      <div
        style="height: {$heightTransform}px; opacity: {$opacityTransform};"
        class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-teal-500 from-[0%] via-teal-500 via-[10%] to-transparent"
      ></div>
    </div>
  </div>
</div>

<style>
  .timeline-line {
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
  }
</style>
