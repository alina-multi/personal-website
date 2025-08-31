<script>
	import Lights from '$lib/components/animation/Lights.svelte';
	import BackgroundBoxes from '$lib/components/animation/BackgroundBoxes.svelte';
</script>

<div class="relative h-screen md:bg-stone-950">
	<div
		class=" absolute right-0 top-0 h-screen w-full overflow-hidden rounded-xl [mask-image:radial-gradient(ellipse_90%_60%_at_60%_50%,white,transparent)]"
	>
		<BackgroundBoxes />



		<div class="animate-appear absolute bottom-0 left-0 z-0 h-2/3 w-full opacity-0">
			<Lights />
		</div>
	</div>

	<slot></slot>
</div>

<style>
	.animate-appear {
		animation: appear 1s ease-in-out forwards;
	}

	@keyframes appear {
		to {
			opacity: 1;
		}
	}
</style>








