<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { trackResumeCta } from '#lib/utils/analytics.js';

	interface Props {
		placement?: 'about_mobile' | 'about_desktop';
	}

	let { placement = 'about_desktop' }: Props = $props();
</script>

<a
	href={resolve('/resume')}
	target="_blank"
	onclick={() => trackResumeCta(placement)}
	class="block rounded border border-teal-500 px-6 py-4 font-semibold text-teal-300 transition-all hover:scale-105 hover:border-teal-300 hover:bg-teal-400/5 hover:text-stone-300"
	>View full resume
	<ArrowUpRight class="ml-2 inline-block size-6 " />
</a>
