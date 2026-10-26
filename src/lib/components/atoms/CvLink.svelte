<script lang="ts">
	import { Download } from '@lucide/svelte';
	import { asset } from '$app/paths';
	import { trackCvDownload } from '#lib/utils/analytics.js';

	const cvHref = asset('Front_Dev_Alina_Akseninko_2026.pdf');

	type Variant = 'primary' | 'button' | 'icon';

	interface CvLinkProps {
		variant?: Variant;
	}

	let { variant = 'button' }: CvLinkProps = $props();


	const variantClassName: Record<Variant, string> = {
		primary:
			'animate-shine inline-flex items-center justify-center rounded border border-teal-400/50 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-3 text-lg font-medium text-stone-200 transition-all hover:scale-110 hover:border-teal-500 md:py-2 md:text-teal-300 lg:px-4 lg:py-3 lg:text-sm',
		button:
			'z-50 flex cursor-pointer items-center rounded-md p-4 font-medium text-stone-400 transition-colors hover:bg-teal-400/10 hover:text-white',
		icon: 'flex items-center gap-2 p-2 text-stone-400 transition-colors hover:text-teal-300'
	};

	const className = $derived(`${variantClassName[variant]}`);

	const placement = $derived(
		variant === 'primary' ? 'header' : variant === 'icon' ? 'social' : 'hero'
	);

	const cvLink = {
		href: cvHref,
		target: '_blank',
		rel: 'noopener noreferrer',
		'aria-label': 'Download CV (opens in new tab)'
	} as const;
</script>

<a {...cvLink} class={className} onclick={() => trackCvDownload(placement)}>
	{#if variant === 'primary'}
		<Download class="mr-2 size-5 text-teal-300 lg:size-4" aria-hidden="true" />
		<span class="lg:hidden max-lg:mr-1">Download </span>
		<span>CV</span>
	{:else if variant === 'icon'}
		<span class="flex size-6 items-center justify-center text-lg font-bold" aria-hidden="true">
			CV
		</span>
	{:else}
		<Download size={20} aria-hidden="true" />
		<span class="ml-2">Download CV</span>
	{/if}
</a>

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
