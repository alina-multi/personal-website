<script>
	let className =
		'w-23 h-12 fill-teal-400 stroke-stone-400 transition-colors duration-300 hover:fill-teal-400 hover:stroke-teal-400 ';
	export { className as class };
</script>

<a href="/" class="flex items-center gap-3 {className}">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class={className}
		viewBox="15 30 220 80"
		aria-label="Decorative wave pattern"
	>
		<path
			d="M20 80
							 C20 50, 40 50, 40 80
							 C40 100, 60 100, 60 80
							 C60 60, 80 60, 80 80
							 C80 100, 100 100, 100 80
							 C100 30, 140 30, 140 80
							 C140 100, 160 100, 160 80
							 C160 60, 180 60, 180 80
							 C180 100, 200 100, 200 80
							 C200 50, 220 50, 220 80"
			fill="none"
			stroke-width="8"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<circle cx="110" cy="95" r="4" class="animate-pulse" />
		<circle cx="130" cy="95" r="4" class="animate-pulse" style="animation-delay: 0.5s;" />
	</svg>

	<span class="font-gilroy sr-only font-bold text-white"
		>Alina Akseninko - SvelteKit Developer - Personal Website</span
	>
</a>
