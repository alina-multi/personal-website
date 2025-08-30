<script lang="ts">
	import SocialLinks from '$lib/components/atoms/SocialLinks.svelte';
	import { Link } from '@lucide/svelte';

	import { onMount } from 'svelte';

	onMount(async () => {
		await import('@google/model-viewer');
	});
</script>

<section
	aria-labelledby="intro-heading"
	class=" scroll-mt-16 pt-24 lg:scroll-mt-24 xl:h-screen"
	id="home"
>
	<div
		class=" xl:h-9/10 flex items-center justify-center bg-stone-950 backdrop-blur-2xl xl:rounded-[90px]"
	>
		<div
			class="rounded-4xl inset-shadow-sm inset-shadow-gray-700/40 relative flex h-full w-full gap-4 overflow-hidden bg-gray-700/20 xl:rounded-[90px]"
		>
			<div class="mx-auto flex max-w-5xl items-center">
				<!-- Ліва колонка: основна презентація -->
				<article class=" gap-9 space-y-9 xl:w-3/5">
					<p class="font-mono text-teal-300">Hi, my name is</p>

					<h1 id="intro-heading" class="font-gilroy text-3xl font-bold text-stone-300 xl:text-6xl">
						Alina Akseninko
					</h1>

					<h2 class="sr-only">Professional Roles</h2>

					<p class="font-gilroy text-lg text-stone-400">
						I’m a software engineer specializing in building (and sometimes designing) fast,
						elegant, and intuitive interfaces and exceptional digital experiences.
						<br />
						Currently, I’m working on developing and improving the <strong>Arts.Center</strong> marketplace,
						crafting a seamless and engaging experience for artists and buyers.
					</p>

					<nav class="mt-9 flex flex-wrap items-center gap-4" aria-label="Primary actions">
						<button
							type="button"
							onclick={() => console.log('Contact button clicked')}
							class="z-50 inline-flex cursor-pointer items-center justify-center rounded-md border border-teal-400/50 bg-[length:200%_100%] px-4 py-4 text-sm font-medium text-teal-300 transition-colors"
						>
							Get in touch
						</button>

						<a
							href="/Alina_Akseninko_CV.pdf"
							download="Alina_Akseninko_CV.pdf"
							class="z-50 flex cursor-pointer items-center rounded-md px-4 py-4 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-400/10"
						>
							<Link size={20} />
							<span class="ml-2">Download CV</span>
						</a>
					</nav>

					<div class="xl:hidden">
						<SocialLinks />
					</div>
				</article>

				<!-- Права колонка: візуальний блок -->

				<!-- <figure class="hidden h-full xl:flex">
				<model-viewer
					src="/pulbo_monstruo.glb"
					alt="3D object of Pulbo Monstruo character"
					camera-controls
					autoplay
					animation-name="ArmatureAction"
					exposure="1"
					shadow-intensity="2"
					rotation-per-second="30deg"
					class="  absolute -right-[10%] top-1/2 h-[108%] w-[60%] -translate-y-1/2"
					camera-orbit="45deg 60deg auto"
					field-of-view="7deg"
				></model-viewer>
			</figure> -->
			</div>
		</div>
	</div>
</section>
