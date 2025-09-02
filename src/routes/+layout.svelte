<script lang="ts">
  import "./app.css";
  import SkipLink from "$lib/components/atoms/SkipLink.svelte";
  import { BROWSER } from 'esm-env';

  let { children } = $props();

  // Initialize performance monitoring in the browser
  if (BROWSER) {
    import('$lib/utils/performance.js');
  }
</script>

<SkipLink />

{@render children()}
