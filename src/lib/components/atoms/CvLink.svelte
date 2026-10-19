<script>
	import { Download } from '@lucide/svelte';
	import { asset } from '$app/paths';

	export let primary = false;

	const cvHref = asset('Front_Dev_Alina_Akseninko_2026.pdf');
</script>

{#if primary}
	<a
		href={cvHref}
		target="_blank"
		rel="noopener"
		aria-label="Download CV (opens in new tab)"
		class="animate-shine inline-flex items-center justify-center rounded border border-teal-400/50 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-3 text-lg font-medium text-stone-200 transition-all hover:scale-110 hover:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-950 md:py-2 md:text-teal-300 lg:px-4 lg:py-3 lg:text-sm"
	>
		<Download class="mr-2 size-5 text-teal-300 lg:size-4" aria-hidden="true" />

		<span class="lg:hidden max-lg:mr-1">Download </span>
		<span class="">CV</span>
	</a>
{:else}
	<a
		href={cvHref}
		download="Front_Dev_Alina_Akseninko_2026.pdf"
		aria-label="Download CV"
		class="z-50 flex cursor-pointer items-center rounded-md p-4 font-medium text-stone-400 transition-colors hover:bg-teal-400/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-950"
	>
		<Download size={20} aria-hidden="true" />
		<span class="ml-2">Download CV</span>
	</a>
{/if}

<style>
	@keyframes shine {
		0% {
			background-position-x: 200%;
		}
		100% {
			background-position-x: 0%;
		}
	}
	.animate-shine {
		animation: shine 2s linear infinite;
	}
</style>
