<script lang="ts">
	import { onMount } from 'svelte';
	let active = $state('about');

	const links = [
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' }
	];

	function scrollToSection(id: string) {
		const section = document.getElementById(id);
		section?.scrollIntoView({ behavior: 'smooth' });
		active = id;
	}

	function onScroll() {
		for (const link of links) {
			const el = document.getElementById(link.id);
			if (el && el.getBoundingClientRect().top <= 150) {
				active = link.id;
			}
		}
	}

	onMount(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav class="hidden flex-col space-y-6 lg:flex">
	{#each links as { id, label } (id)}
		<button
			onclick={() => scrollToSection(id)}
			class="flex items-center group cursor-pointer gap-3 text-left text-stone-400 transition-all duration-200 hover:text-white"
			><div
				class="h-[1px] w-10 bg-stone-600 transition-all"
				class:w-20={active === id}
				class:bg-teal-300={active === id}
			></div>
			<span
				class="inline-block transition-transform duration-200"
				class:text-white={active === id}
				class:scale-110={active === id}
			>
				{label}
			</span>
		</button>
	{/each}
</nav>
