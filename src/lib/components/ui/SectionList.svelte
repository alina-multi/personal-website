<script>
	import GlowingEffect from '$lib/components/animation/GlowingEffect.svelte';
	import { FolderTree, Rabbit, Crown, Sticker, PawPrint, Sprout } from '@lucide/svelte';

	const icons = { FolderTree, Rabbit, Crown, Sticker, PawPrint, Sprout };

	export let list;
</script>

<ul class=" grid grid-cols-1 gap-9 md:grid-cols-2 xl:grid-cols-3">
	{#each list as { title, description, icon } (title)}
		{@const Icon = icons[icon]}
		<li
			class="inset-shadow-sm inset-shadow-gray-600/4 group relative h-full rounded border border-dashed border-zinc-400 bg-gray-700/20 p-9 dark:border-zinc-700"
		>
			<GlowingEffect spread={60} glow={true} proximity={120} inactiveZone={0.01} />

			<div class=" gap-3">
				<Icon size={32} color="#ff3e98" strokeWidth={1.5} class="stroke-teal-500 " />
				<h4 class="font-accent mt-6 text-2xl">{title}</h4>
				<p class="mt-6 text-stone-400">{description}</p>
			</div>
		</li>
	{/each}
</ul>
