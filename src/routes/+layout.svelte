<script lang="ts">
  import "./app.css";
  import SkipLink from "#lib/components/atoms/SkipLink.svelte";
  import { BROWSER } from 'esm-env';
  import { afterNavigate } from '$app/navigation';
  import { trackPageView } from '#lib/utils/analytics.js';

  let { children } = $props();

  // Initialize performance monitoring in the browser
  if (BROWSER) {
    import('#lib/utils/performance.js');
  }

  // The tag in app.html already sends the first page_view.
  // Later client-side moves (home → /resume) need their own hit.
  let skipFirstPageView = true;
  afterNavigate((navigation) => {
    if (!BROWSER) return;
    if (skipFirstPageView) {
      skipFirstPageView = false;
      return;
    }
    const path = navigation.to?.url.pathname;
    if (path) trackPageView(path);
  });
</script>

<SkipLink />

{@render children()}
