<script>
	import Timeline from '$lib/components/animation/Timeline.svelte';
	import Summary from '$lib/components/resume/Summary.svelte';
	import SideNav from '$lib/components/resume/SideNav.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Projects from '$lib/components/resume/Projects.svelte';
	import SocialLinks from '$lib/components/atoms/SocialLinks.svelte';
	import MouseMoveLayout from '$lib/components/layout/MouseMoveLayout.svelte';
</script>

<MouseMoveLayout>
	<div class=" md:px- mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:py-16 lg:py-0">
		<div class="lg:flex lg:justify-between lg:gap-4">
			<div
				class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"
			>
				<div>
					<h2
						class="font-accent pointer-events-none whitespace-pre-wrap text-4xl font-semibold leading-none text-stone-100 md:text-6xl"
					>
						Alina Akseninko
					</h2>
					<h2 class="mt-3 text-lg font-medium tracking-tight sm:text-xl">Frontend Engeneer</h2>

					<p class="mt-4 leading-normal md:max-w-xs">
						I build accessible, pixel-perfect digital experiences for the web. I specialize in
						SvelteKit and UX design, crafting intuitive interfaces that enhance user engagement.
					</p>
				</div>

				<SideNav />

				<SocialLinks />
			</div>

			<div class="z-20 mt-24 lg:w-[55%]">
				<section id="about" class="mb-16 scroll-mt-16 pl-6 md:mb-24 lg:mb-36 lg:scroll-mt-24">
					<Summary />
				</section>

				<section
					id="experience"
					class="z-20 mb-16 scroll-mt-16 pl-6 md:mb-24 lg:mb-36 lg:scroll-mt-24"
				>
					<Timeline>
						<h2 class="font-accent text-2xl font-semibold text-stone-200 md:text-4xl">
							Expirience
						</h2>
					</Timeline>
				</section>

				<Projects />
			</div>
		</div>
		<Footer />
	</div>
</MouseMoveLayout>
